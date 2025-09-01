import axios from "axios";
import { describe, it, expect } from "vitest";
import "@/mocks/apiMock";
import { pessoas } from "@/mocks/mockData";

describe("Mock API /v1", () => {
  it("GET /v1/pessoas/aberto/filtro retorna pessoas", async () => {
    const res = await axios.get("/v1/pessoas/aberto/filtro");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.content)).toBe(true);
  });

  it("filtra por nome", async () => {
    const alvo = pessoas[0];
    const termo = alvo.nome.slice(0, 3);
    const res = await axios.get("/v1/pessoas/aberto/filtro", {
      params: { nome: termo },
    });
    expect(res.status).toBe(200);
    expect(res.data.content.every((p: any) => p.nome.includes(termo))).toBe(
      true,
    );
  });

  it("GET /v1/pessoas/:id retorna pessoa existente", async () => {
    const alvo = pessoas[0];
    const res = await axios.get(`/v1/pessoas/${alvo.id}`);
    expect(res.status).toBe(200);
    expect(res.data.id).toBe(alvo.id);
  });

  it("GET /v1/pessoas/:id retorna 404 para inexistente", async () => {
    try {
      await axios.get("/v1/pessoas/999999");
      expect(false).toBe(true);
    } catch (err: any) {
      expect(err.response.status).toBe(404);
    }
  });

  it("GET /v1/pessoas/aberto/estatistico retorna o formato e valores esperados", async () => {
    const esperadoDesap = pessoas.filter(
      (p) => p.ultimaOcorrencia && !p.ultimaOcorrencia.dataLocalizacao,
    ).length;

    const esperadoEnc = pessoas.filter(
      (p) => p.ultimaOcorrencia && p.ultimaOcorrencia.dataLocalizacao,
    ).length;

    const res = await axios.get("/v1/pessoas/aberto/estatistico");
    expect(res.status).toBe(200);

    expect(Object.keys(res.data).sort()).toEqual(
      ["quantPessoasDesaparecidas", "quantPessoasEncontradas"].sort(),
    );

    expect(typeof res.data.quantPessoasDesaparecidas).toBe("number");
    expect(typeof res.data.quantPessoasEncontradas).toBe("number");

    expect(res.data.quantPessoasDesaparecidas).toBe(esperadoDesap);
    expect(res.data.quantPessoasEncontradas).toBe(esperadoEnc);
  });

  it("GET /v1/ocorrencias/informacoes-desaparecido retorna lista", async () => {
    const res = await axios.get("/v1/ocorrencias/informacoes-desaparecido");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  it("cria e lista usando somente config.params", async () => {
    const ocoId = 101;
    const before = await axios.get("/v1/ocorrencias/informacoes-desaparecido", {
      params: { ocorrenciaId: ocoId },
    });
    const prev = before.data.length;

    const fd = new FormData();
    const res = await axios.post(
      "/v1/ocorrencias/informacoes-desaparecido",
      fd,
      {
        params: {
          ocoId,
          informacao: "Vista na Praça Popular.",
          descricao: "Foto João da Silva",
          data: "2025-08-30",
        },
      },
    );
    expect(res.status).toBe(201);

    const after = await axios.get("/v1/ocorrencias/informacoes-desaparecido", {
      params: { ocorrenciaId: ocoId },
    });
    expect(after.data.length).toBe(prev + 1);
    expect(after.data.at(-1).informacao).toContain("Praça Popular");
  });
});
