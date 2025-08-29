export type Sexo = "MASCULINO" | "FEMININO";

export type TipoCartaz = "PDF_DESAPARECIDO" | "PDF_ENCONTRADO" | string;

export interface CartazDTO {
  urlCartaz: string;
  tipoCartaz: TipoCartaz;
}

export interface OcorrenciaEntrevDesapDTO {
  informacao?: string;
  vestimentasDesaparecido?: string;
}

export interface UltimaOcorrenciaDTO {
  dtDesaparecimento?: string;
  dataLocalizacao?: string;
  encontradoVivo?: boolean;
  localDesaparecimentoConcat?: string;
  ocorrenciaEntrevDesapDTO?: OcorrenciaEntrevDesapDTO;
  listaCartaz?: CartazDTO[];
  ocoId?: number;
}

export interface PessoaDTO {
  id: number;
  nome: string;
  idade: number;
  sexo: Sexo;
  vivo: boolean;
  urlFoto?: string;
  ultimaOcorrencia?: UltimaOcorrenciaDTO;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
export interface Pageable {
  unpaged: boolean;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  offset: number;
  sort: Sort;
}

export interface PageResponse<T> {
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  content: T[];
  number: number;
  sort: Sort;
  pageable: Pageable;
  empty: boolean;
}

export interface PessoasFiltro {
  faixaIdadeInicial?: number;
  faixaIdadeFinal?: number;
  pagina?: number;
  porPagina?: number;
  sexo?: Sexo;
  vivo?: boolean;
  nome?: string;
  status?: "DESAPARECIDO" | "LOCALIZADO";
}
