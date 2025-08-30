import { create } from "zustand";
import type { InformacaoDesaparecidoDTO } from "@/interfaces/IOcorrencia";
import { getInformacoesDesaparecido } from "@/services/ocorrenciaService";

interface State {
  informacoes: InformacaoDesaparecidoDTO[];
  loading: boolean;
  error?: string;
  ocorrenciaId: number | null;
  setOcorrenciaId: (id: number) => void;
  fetch: () => Promise<void>;
  reset: () => void;
}

const INITIAL_STATE: Omit<State, "setOcorrenciaId" | "fetch" | "reset"> = {
  informacoes: [],
  loading: false,
  error: undefined,
  ocorrenciaId: null,
};

export const useOcorrenciaStore = create<State>((set, get) => ({
  ...INITIAL_STATE,

  setOcorrenciaId: (id) => set({ ocorrenciaId: id }),

  fetch: async () => {
    const { ocorrenciaId } = get();
    if (!ocorrenciaId) return;
    set({ loading: true, error: undefined });
    try {
      const resp = await getInformacoesDesaparecido(ocorrenciaId);
      set({ informacoes: resp, loading: false });
    } catch (e: any) {
      set({
        loading: false,
        error: e?.message ?? "Erro ao carregar informações",
      });
    }
  },

  reset: () => set({ ...INITIAL_STATE }),
}));
