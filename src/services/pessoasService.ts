import { httpGet } from "./api";

import type {
  PageResponse,
  PessoaDTO,
  PessoasFiltro,
} from "@/interfaces/IPessoas";

const BASE_PATH = "/v1/pessoas/aberto";

export async function getPessoas(filtro: PessoasFiltro) {
  return httpGet<PageResponse<PessoaDTO>>(`${BASE_PATH}/filtro`, filtro);
}

export async function getPessoaById(id: number) {
  return httpGet<PessoaDTO>(`/v1/pessoas/${id}`);
}

export async function getEstatistico(params?: Record<string, any>) {
  return httpGet<any>(`${BASE_PATH}/estatistico`, params);
}
