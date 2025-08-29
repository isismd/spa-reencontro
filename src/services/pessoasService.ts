import { httpGet } from "./api";
import type {
  PageResponse,
  PessoaDTO,
  PessoasFiltro,
} from "@/interfaces/Pessoas";

const PATH = "/v1/pessoas/aberto/filtro";

export async function listarPessoas(filtro: PessoasFiltro) {
  const query = {
    faixaIdadeInicial: filtro.faixaIdadeInicial ?? 0,
    faixaIdadeFinal: filtro.faixaIdadeFinal ?? 0,
    pagina: filtro.pagina ?? 0,
    porPagina: filtro.porPagina ?? 10,
    sexo: filtro.sexo,
    vivo: filtro.vivo,
    nome: filtro.nome,
  };
  return httpGet<PageResponse<PessoaDTO>>(PATH, query);
}
