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

export interface InformacaoDesaparecidoDTO {
  ocoId: number;
  informacao: string;
  data: string;
  id: number;
  anexos: string[];
}
