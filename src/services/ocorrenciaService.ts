import type { InformacaoDesaparecidoDTO } from "@/interfaces/IOcorrencia";
import { httpGet } from "./api";

const BASE_PATH = "/v1/ocorrencias";

export async function getInformacoesDesaparecido(ocorrenciaId: number) {
  return httpGet<InformacaoDesaparecidoDTO[]>(
    `${BASE_PATH}/informacoes-desaparecido`,
    { ocorrenciaId },
  );
}
