import type { InformacaoDesaparecidoDTO } from "@/interfaces/IOcorrencia";
import {
  getInformacoesDesaparecido,
  postInformacaoDesaparecido,
} from "@/services/ocorrenciaService";
import { create } from "zustand";

interface State {
  informacoes: InformacaoDesaparecidoDTO[];
  loading: boolean;
  error?: string;
  ocorrenciaId: number | null;
  setOcorrenciaId: (id: number) => void;
  fetch: () => Promise<void>;
  reset: () => void;
  postInformacao: (input: {
    ocoId: number;
    informacao: string;
    data: string;
    descricao?: string;
    files?: File[];
  }) => Promise<InformacaoDesaparecidoDTO>;
}

const INITIAL_STATE: Omit<
  State,
  "setOcorrenciaId" | "fetch" | "reset" | "postInformacao"
> = {
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

  postInformacao: async (input: {
    ocoId: number;
    informacao: string;
    data: string;
    descricao?: string;
    files?: File[];
  }): Promise<InformacaoDesaparecidoDTO> => {
    set({ loading: true, error: undefined });
    try {
      const resp: InformacaoDesaparecidoDTO =
        await postInformacaoDesaparecido(input);
      set({ loading: false });
      return resp;
    } catch (e: any) {
      set({ loading: false, error: e?.message ?? "Erro ao enviar informação" });
      throw e;
    }
  },
}));
