import type { UltimaOcorrenciaDTO } from "./IOcorrencia";

export type Sexo = "MASCULINO" | "FEMININO";

export interface PessoaDTO {
  id: number;
  nome: string;
  idade: number;
  sexo: Sexo;
  vivo: boolean;
  urlFoto?: string;
  ultimaOcorrencia?: UltimaOcorrenciaDTO;
}

export interface PessoasFiltro {
  faixaIdadeInicial?: number;
  faixaIdadeFinal?: number;
  pagina?: number;
  porPagina?: number;
  sexo?: Sexo;
  nome?: string;
  status?: "DESAPARECIDO" | "LOCALIZADO";
}
