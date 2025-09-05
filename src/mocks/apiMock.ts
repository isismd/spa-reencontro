import type { InformacaoDesaparecidoDTO } from "@/interfaces/IOcorrencia";
import type { PageResponse } from "@/interfaces/IPessoas";
import axios, { type AxiosInstance } from "axios";
import { openDB } from "idb";
import {
  informacoes as baseInformacoes,
  pessoas as basePessoas,
} from "./mockData";
const { default: MockAdapter } = await import("axios-mock-adapter");

// =======================
// Config / Regex
// =======================
const DEFAULT_DELAY = 600;
const RX = {
  PESSOAS_FILTRO: /\/v1\/pessoas\/aberto\/filtro/,
  PESSOA_BY_ID: /\/v1\/pessoas\/\d+(?:\?.*)?$/,
  PESSOAS_ESTATS: /\/v1\/pessoas\/aberto\/estatistico/,
  INFO_LIST: /\/v1\/ocorrencias\/informacoes-desaparecido(?:\?.*)?$/,
  INFO_CREATE: /\/v1\/ocorrencias\/informacoes-desaparecido(?:\?.*)?$/,
};

// =======================
// Tipos
// =======================
type StoredFile = {
  name: string;
  type: string;
  size: number;
  data: ArrayBuffer;
};
type LocalInfoRecord = {
  id?: number;
  ocoId: number;
  informacao: string;
  descricao: string;
  data: string;
  anexos: StoredFile[];
  createdAt: number;
};

type StorageAdapter = {
  addInfo(
    input: Omit<LocalInfoRecord, "id" | "createdAt">,
  ): Promise<LocalInfoRecord>;
  listInfosByOcoId(ocoId: number): Promise<LocalInfoRecord[]>;
};

type FileAdapter = {
  serialize(files?: File[]): Promise<StoredFile[]>;
  toObjectURLs(stored: StoredFile[]): string[];
};

type ApiMockOptions = {
  axiosInstance?: AxiosInstance;
  delay?: number;
  storage?: StorageAdapter;
  files?: FileAdapter;
  data?: {
    pessoas?: typeof basePessoas;
    informacoes?: InformacaoDesaparecidoDTO[];
  };
};

// =======================
// Helpers
// =======================
function pageResponse<T>(items: T[], page = 0, size = 10): PageResponse<T> {
  const totalElements = items.length;
  const start = page * size;
  const end = Math.min(start + size, totalElements);
  const content = items.slice(start, end);
  return {
    totalElements,
    totalPages: Math.max(1, Math.ceil(totalElements / size)),
    numberOfElements: content.length,
    first: page === 0,
    last: end >= totalElements,
    size,
    content,
    number: page,
    sort: { sorted: false, unsorted: true, empty: true },
    pageable: {
      unpaged: false,
      paged: true,
      pageNumber: page,
      pageSize: size,
      offset: start,
      sort: { sorted: false, unsorted: true, empty: true },
    },
    empty: content.length === 0,
  };
}

// =======================
// Adapters
// =======================
async function createIndexedDbStorage(): Promise<StorageAdapter> {
  const db = await openDB("reencontro-db", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("infos")) {
        const store = db.createObjectStore("infos", {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("by_ocoId", "ocoId", { unique: false });
      }
    },
  });

  return {
    async addInfo(input) {
      const createdAt = Date.now();
      const id = await db.add("infos", {
        ...input,
        createdAt,
      } as LocalInfoRecord);
      return { ...input, id, createdAt } as LocalInfoRecord;
    },
    async listInfosByOcoId(ocoId) {
      const idx = db.transaction("infos").store.index("by_ocoId");
      const all = await idx.getAll(ocoId);
      return all.sort(
        (a, b) => b.data.localeCompare(a.data) || b.createdAt - a.createdAt,
      );
    },
  };
}

const defaultFileAdapter: FileAdapter = {
  async serialize(files: File[] = []) {
    const out: StoredFile[] = [];
    for (const f of files) {
      const buf = await f.arrayBuffer();
      out.push({ name: f.name, type: f.type, size: f.size, data: buf });
    }
    return out;
  },
  toObjectURLs(stored) {
    return stored.map((s) =>
      URL.createObjectURL(new Blob([s.data], { type: s.type })),
    );
  },
};

// =======================
// Mock
// =======================
export async function apiMock(opts: ApiMockOptions = {}) {
  const { axiosInstance = axios, delay = DEFAULT_DELAY, data } = opts;

  const storage = opts.storage ?? (await createIndexedDbStorage());
  const files = opts.files ?? defaultFileAdapter;
  const pessoas = data?.pessoas ?? basePessoas;
  const informacoes = data?.informacoes ?? baseInformacoes;

  const mock = new MockAdapter(axiosInstance, { delayResponse: delay });

  // 1) GET /v1/pessoas/aberto/filtro
  mock.onGet(RX.PESSOAS_FILTRO).reply((config) => {
    const params = config.params || {};
    const nome = String(params["nome"] ?? "").toLowerCase();
    const sexo = params["sexo"] as "MASCULINO" | "FEMININO" | null;
    const status = params["status"] as "DESAPARECIDO" | "LOCALIZADO" | null;
    const faixaIdadeInicial = Number(params["faixaIdadeInicial"] ?? 0);
    const faixaIdadeFinal = Number(params["faixaIdadeFinal"] ?? 0);
    const page = Number(params["pagina"] ?? 0);
    const size = Number(params["porPagina"] ?? 10);

    let result = [...pessoas];
    if (nome)
      result = result.filter((p) => p.nome.toLowerCase().includes(nome));
    if (sexo) result = result.filter((p) => p.sexo === sexo);
    if (status) {
      result = result.filter((p) =>
        status === "DESAPARECIDO"
          ? p.ultimaOcorrencia && !p.ultimaOcorrencia.dataLocalizacao
          : p.ultimaOcorrencia && p.ultimaOcorrencia.dataLocalizacao,
      );
    }
    if (faixaIdadeInicial > 0)
      result = result.filter((p) => p.idade >= faixaIdadeInicial);
    if (faixaIdadeFinal > 0)
      result = result.filter((p) => p.idade <= faixaIdadeFinal);

    return [
      200,
      pageResponse(result, page, size) as PageResponse<
        (typeof pessoas)[number]
      >,
    ];
  });

  // 2) GET /v1/pessoas/:id
  mock.onGet(RX.PESSOA_BY_ID).reply((config) => {
    const url = config.url ?? "";
    const idMatch = url.match(/\/v1\/pessoas\/(\d+)/);
    const id = idMatch ? Number(idMatch[1]) : NaN;
    const pessoa = pessoas.find((p) => p.id === id);
    if (!pessoa) return [404, { message: "Pessoa não encontrada" }];
    return [200, pessoa];
  });

  // 3) GET /v1/pessoas/aberto/estatistico
  mock.onGet(RX.PESSOAS_ESTATS).reply(() => {
    const quantPessoasDesaparecidas = pessoas.filter(
      (p) => p.ultimaOcorrencia && !p.ultimaOcorrencia.dataLocalizacao,
    ).length;
    const quantPessoasEncontradas = pessoas.filter(
      (p) => p.ultimaOcorrencia && p.ultimaOcorrencia.dataLocalizacao,
    ).length;
    return [200, { quantPessoasDesaparecidas, quantPessoasEncontradas }];
  });

  // 4) GET /v1/ocorrencias/informacoes-desaparecido
  mock.onGet(RX.INFO_LIST).reply(async (config) => {
    const params = config.params || {};
    const ocoId = Number(params["ocorrenciaId"]);

    const base: InformacaoDesaparecidoDTO[] = Number.isFinite(ocoId)
      ? informacoes.filter((i) => i.ocoId === ocoId)
      : informacoes;

    const locais = Number.isFinite(ocoId)
      ? await storage.listInfosByOcoId(ocoId)
      : [];
    const locaisDTO: InformacaoDesaparecidoDTO[] = locais.map((l) => ({
      id: l.id as number,
      ocoId: l.ocoId,
      informacao: l.informacao,
      data: l.data,
      anexos: files.toObjectURLs(l.anexos),
    }));

    const merged = [...base, ...locaisDTO].sort((a, b) =>
      (b.data || "").localeCompare(a.data || ""),
    );

    return [200, merged];
  });

  // 5) POST /v1/ocorrencias/informacoes-desaparecido
  mock.onPost(RX.INFO_CREATE).reply(async (config) => {
    const params = config.params ?? {};
    const ocoId = Number(params.ocoId);
    const informacao = String(params.informacao ?? "").trim();
    const descricao = String(params.descricao ?? "").trim();
    const data =
      String(params.data ?? "").trim() || new Date().toISOString().slice(0, 10);

    let filesFromForm: File[] = [];
    const isFormData =
      typeof FormData !== "undefined" && config.data instanceof FormData;
    if (isFormData) {
      const fd = config.data as FormData;
      const raw = fd.getAll("files");
      filesFromForm = raw.filter((v): v is File => v instanceof File);
    }

    if (!Number.isFinite(ocoId) || !informacao || !descricao || !data) {
      return [
        400,
        {
          message: "Parâmetros inválidos (ocoId, informacao, descricao, data).",
        },
      ];
    }

    const storedFiles = await files.serialize(filesFromForm);
    const created = await storage.addInfo({
      ocoId,
      informacao,
      descricao,
      data,
      anexos: storedFiles,
    });

    const dto: InformacaoDesaparecidoDTO = {
      id: created.id as number,
      ocoId: created.ocoId,
      informacao: created.informacao,
      data: created.data,
      anexos: files.toObjectURLs(created.anexos),
    };

    return [201, dto];
  });

  return mock;
}
