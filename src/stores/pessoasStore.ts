import { create } from "zustand";
import type { PessoaDTO, PessoasFiltro } from "@/interfaces/Pessoas";
import { listarPessoas } from "@/services/pessoasService";

type State = {
  itens: PessoaDTO[];
  total: number;
  totalPages: number;
  page: number;
  perPage: number;
  loading: boolean;
  error?: string;

  filtros: PessoasFiltro;

  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
  setFiltros: (patch: Partial<State["filtros"]>) => void;
  fetch: () => Promise<void>;
  reset: () => void;
};

export const usePessoasStore = create<State>((set, get) => ({
  itens: [],
  total: 0,
  totalPages: 0,
  page: 0,
  perPage: 12,
  loading: false,
  filtros: { faixaIdadeInicial: 0, faixaIdadeFinal: 0 },

  setPage: (page) => set({ page }),
  setPerPage: (perPage) => set({ perPage }),
  setFiltros: (patch) =>
    set((s) => ({ filtros: { ...s.filtros, ...patch }, page: 0 })),

  fetch: async () => {
    const { page, perPage, filtros } = get();
    set({ loading: true, error: undefined });
    try {
      const resp = await listarPessoas({
        faixaIdadeInicial: filtros.faixaIdadeInicial,
        faixaIdadeFinal: filtros.faixaIdadeFinal,
        sexo: filtros.sexo,
        vivo: filtros.vivo,
        nome: filtros.nome,
        pagina: page,
        porPagina: perPage,
      });

      set({
        itens: resp.content,
        total: resp.totalElements,
        totalPages: resp.totalPages,
        loading: false,
      });
    } catch (e: any) {
      set({ loading: false, error: e?.message ?? "Erro ao carregar pessoas" });
    }
  },

  reset: () =>
    set({
      itens: [],
      total: 0,
      totalPages: 0,
      page: 0,
      perPage: 12,
      filtros: { faixaIdadeInicial: 0, faixaIdadeFinal: 0 },
      error: undefined,
    }),
}));
