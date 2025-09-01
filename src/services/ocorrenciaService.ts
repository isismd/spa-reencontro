import type { InformacaoDesaparecidoDTO } from "@/interfaces/IOcorrencia";
import { httpGet, httpPost } from "./api";

const BASE_PATH = "/v1/ocorrencias";

export async function getInformacoesDesaparecido(ocorrenciaId: number) {
  return httpGet<InformacaoDesaparecidoDTO[]>(
    `${BASE_PATH}/informacoes-desaparecido`,
    { ocorrenciaId },
  );
}

export async function postInformacaoDesaparecido(input: {
  ocoId: number;
  informacao: string;
  data: string;
  descricao?: string;
  files?: File[];
}): Promise<InformacaoDesaparecidoDTO> {
  const form = new FormData();
  (input.files ?? []).forEach((f) => form.append("files", f));

  const url = `${BASE_PATH}/informacoes-desaparecido`;

  return httpPost<InformacaoDesaparecidoDTO>(url, form, {
    params: {
      ocoId: input.ocoId,
      informacao: input.informacao,
      data: input.data,
      descricao: input.descricao ?? "",
    },
  });
}
