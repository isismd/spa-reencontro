import type { PageResponse } from "@/interfaces/IPessoas";
import { informacoes, pessoas } from "@/mocks/mockData";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const RESPONSE_DELAY = 800;
const mock = new MockAdapter(axios, { delayResponse: RESPONSE_DELAY });

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

mock.onGet(/\/v1\/pessoas\/aberto\/filtro/).reply((config) => {
  const params = config.params || {};

  const nome = (params["nome"] ?? "").toLowerCase();
  const sexo = params["sexo"] as "MASCULINO" | "FEMININO" | null;
  const status = params["status"] as "DESAPARECIDO" | "LOCALIZADO" | null;
  const faixaIdadeInicial = Number(params["faixaIdadeInicial"] ?? 0);
  const faixaIdadeFinal = Number(params["faixaIdadeFinal"] ?? 0);
  const page = Number(params["pagina"] ?? 0);
  const size = Number(params["porPagina"] ?? 10);

  let result = [...pessoas];
  if (nome) result = result.filter((p) => p.nome.toLowerCase().includes(nome));
  if (sexo) result = result.filter((p) => p.sexo === sexo);
  if (status) {
    result = result.filter((p) =>
      status === "DESAPARECIDO"
        ? p.ultimaOcorrencia && !p.ultimaOcorrencia.dataLocalizacao
        : p.ultimaOcorrencia && p.ultimaOcorrencia.dataLocalizacao,
    );
  }
  if (faixaIdadeInicial > 0) {
    result = result.filter((p) => p.idade >= faixaIdadeInicial);
  }
  if (faixaIdadeFinal > 0) {
    result = result.filter((p) => p.idade <= faixaIdadeFinal);
  }

  return [200, pageResponse(result, page, size)];
});

mock.onGet(/\/v1\/pessoas\/\d+(?:\?.*)?$/).reply((config) => {
  const url = config.url ?? "";
  const idMatch = url.match(/\/v1\/pessoas\/(\d+)/);
  const id = idMatch ? Number(idMatch[1]) : NaN;
  const pessoa = pessoas.find((p) => p.id === id);
  if (!pessoa) return [404, { message: "Pessoa não encontrada" }];
  return [200, pessoa];
});

mock.onGet(/\/v1\/pessoas\/aberto\/estatistico/).reply(() => {
  const quantPessoasDesaparecidas = pessoas.filter(
    (p) => p.ultimaOcorrencia && !p.ultimaOcorrencia.dataLocalizacao,
  ).length;
  const quantPessoasEncontradas = pessoas.filter(
    (p) => p.ultimaOcorrencia && p.ultimaOcorrencia.dataLocalizacao,
  ).length;
  return [
    200,
    {
      quantPessoasDesaparecidas,
      quantPessoasEncontradas,
    },
  ];
});

mock
  .onGet(/\/v1\/ocorrencias\/informacoes-desaparecido(?:\?.*)?$/)
  .reply((config) => {
    const params = config.params || {};
    const ocoId = Number(params["ocorrenciaId"]);
    const lista = Number.isFinite(ocoId)
      ? informacoes.filter((i) => i.ocoId === ocoId)
      : informacoes;
    return [200, lista];
  });

mock
  .onPost(/\/v1\/ocorrencias\/informacoes-desaparecido(?:\?.*)?$/)
  .reply((config) => {
    const params = (config.params ?? {}) as Record<string, any>;

    const ocoId = Number(params.ocoId);
    const informacao = (params.informacao ?? "").trim();
    const descricao = (params.descricao ?? "").trim();
    const data =
      (params.data ?? "").trim() || new Date().toISOString().slice(0, 10);

    if (!Number.isFinite(ocoId) || !informacao || !descricao || !data) {
      return [
        400,
        {
          message:
            "Parâmetros inválidos. Envie ocoId (number), informacao (string), descricao (string) e data (yyyy-MM-dd).",
        },
      ];
    }

    const nextId =
      informacoes.reduce((max, i) => Math.max(max, Number(i.id) || 0), 0) + 1;

    const novo = {
      id: nextId,
      ocoId,
      informacao,
      data,
      anexos: [] as string[],
    };

    informacoes.push(novo as any);

    return [201, novo];
  });

export default mock;
