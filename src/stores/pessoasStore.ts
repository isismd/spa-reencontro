import type { PessoaDTO, PessoasFiltro } from "@/interfaces/IPessoas";
import {
  getEstatistico,
  getPessoaById,
  getPessoas,
} from "@/services/pessoasService";
import { create } from "zustand";

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

  estatistico: {
    quantPessoasDesaparecidas: number;
    quantPessoasEncontradas: number;
  } | null;
  loadingEstatistico: boolean;
  fetchEstatistico: () => Promise<void>;

  pessoaSelecionada: PessoaDTO | null;
  loadingById: boolean;
  fetchById: (id: number) => Promise<void>;
};

const INITIAL_FILTROS: PessoasFiltro = {
  faixaIdadeInicial: 0,
  faixaIdadeFinal: 0,
};

const INITIAL_STATE: Omit<
  State,
  | "setPage"
  | "setPerPage"
  | "setFiltros"
  | "fetch"
  | "reset"
  | "fetchEstatistico"
  | "fetchById"
> = {
  itens: [],
  total: 0,
  totalPages: 0,
  page: 0,
  perPage: 12,
  loading: false,
  error: undefined,
  filtros: { ...INITIAL_FILTROS },
  estatistico: null,
  loadingEstatistico: false,
  pessoaSelecionada: null,
  loadingById: false,
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
    set({ loading: true, error: undefined });
    try {
      const resp = await getPessoas({
        ...filtros,
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

  fetchEstatistico: async () => {
    set({ loadingEstatistico: true });
    try {
      const resp = await getEstatistico();
      set({ estatistico: resp, loadingEstatistico: false });
    } catch {
      set({ loadingEstatistico: false });
    }
  },

  fetchById: async (id: number) => {
    set({ loadingById: true, pessoaSelecionada: null });
    try {
      const pessoa = await getPessoaById(id);
      set({ pessoaSelecionada: pessoa, loadingById: false });
    } catch (e: any) {
      set({
        loadingById: false,
        error: e?.message ?? "Erro ao carregar pessoa",
      });
    }
  },

  reset: () => set({ ...INITIAL_STATE }),
}));
