import { create } from "zustand";
import type { PessoaDTO, PessoasFiltro } from "@/interfaces/IPessoas";
import { getPessoas } from "@/services/pessoasService";

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
  setFiltros: (patch: Partial<PessoasFiltro>) => void;
  fetch: () => Promise<void>;
  reset: () => void;
};

const INITIAL_FILTROS: PessoasFiltro = {
  faixaIdadeInicial: 0,
  faixaIdadeFinal: 0,
};

const INITIAL_STATE: Omit<
  State,
  "setPage" | "setPerPage" | "setFiltros" | "fetch" | "reset"
> = {
  itens: [],
  total: 0,
  totalPages: 0,
  page: 0,
  perPage: 12,
  loading: false,
  error: undefined,
  filtros: { ...INITIAL_FILTROS },
};

export const usePessoasStore = create<State>((set, get) => ({
  ...INITIAL_STATE,

  setPage: (page) => set((state) => ({ ...state, page })),

  setPerPage: (perPage) =>
    set((state) =>
      state.perPage === perPage ? state : { ...state, perPage, page: 0 },
    ),

  setFiltros: (patch) =>
    set((state) => ({ filtros: { ...state.filtros, ...patch }, page: 0 })),

  fetch: async () => {
    const { page, perPage, filtros } = get();
    set((state) => ({ ...state, loading: true, error: undefined }));
    try {
      const resp = await getPessoas({
        ...filtros,
        pagina: page,
        porPagina: perPage,
      });
      set((state) => ({
        ...state,
        itens: resp.content,
        total: resp.totalElements,
        totalPages: resp.totalPages,
        loading: false,
      }));
    } catch (e: any) {
      set((state) => ({
        ...state,
        loading: false,
        error: e?.message ?? "Erro ao carregar pessoas",
      }));
    }
  },

  reset: () => set({ ...INITIAL_STATE }),
}));
