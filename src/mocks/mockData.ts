import type { PessoaDTO } from "@/interfaces/IPessoas";
import type { InformacaoDesaparecidoDTO } from "@/interfaces/IOcorrencia";

export const pessoas: PessoaDTO[] = [
  {
    id: 1,
    nome: "Maria Silva",
    idade: 30,
    sexo: "FEMININO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    ultimaOcorrencia: {
      ocoId: 101,
      dtDesaparecimento: "2025-08-01",
      localDesaparecimentoConcat: "Cuiabá - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao:
          "Foi vista pela última vez saindo do trabalho, usando mochila preta. Há relatos de que pegou um ônibus sentido Centro.",
        vestimentasDesaparecido:
          "Camisa azul clara, calça jeans, tênis branco e mochila preta.",
      },
      listaCartaz: [
        {
          tipoCartaz: "PDF_DESAPARECIDO",
          urlCartaz:
            "https://dummyimage.com/800x1131/eeeeee/333333&text=CARTAZ+DESAPARECIDA+-+MARIA+SILVA",
        },
      ],
    },
  },
  {
    id: 2,
    nome: "João de Souza",
    idade: 45,
    sexo: "MASCULINO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    ultimaOcorrencia: {
      ocoId: 102,
      dtDesaparecimento: "2025-07-20",
      localDesaparecimentoConcat: "Várzea Grande - MT",
      encontradoVivo: true,
      dataLocalizacao: "2025-08-15",
      ocorrenciaEntrevDesapDTO: {
        informacao:
          "Localizado em segurança após contato de familiar. Estava em residência de amigo.",
        vestimentasDesaparecido:
          "Camiseta preta, bermuda cinza, chinelo azul (informação da época do desaparecimento).",
      },
      listaCartaz: [
        {
          tipoCartaz: "PDF_ENCONTRADO",
          urlCartaz:
            "https://dummyimage.com/800x1131/dfffe0/1f7a1f&text=CARTAZ+ENCONTRADO+-+JOAO+DE+SOUZA",
        },
      ],
    },
  },
];

export const informacoes: InformacaoDesaparecidoDTO[] = [
  {
    id: 1,
    ocoId: 101,
    informacao:
      "Foi vista próximo ao centro (Praça Alencastro) por volta de 18h.",
    data: "2025-08-02T18:30:00",
    anexos: ["https://dummyimage.com/1200x675/ddd/333&text=CCTV"],
  },
  {
    id: 2,
    ocoId: 101,
    informacao:
      "Taxista relatou possível avistamento na Av. do CPA sentido Centro → Bairro.",
    data: "2025-08-03T21:10:00",
    anexos: [],
  },
  {
    id: 3,
    ocoId: 102,
    informacao: "Contato de familiar confirmou localização em segurança.",
    data: "2025-08-15T10:05:00",
    anexos: ["https://dummyimage.com/800x1131/eeeeee/333&text=PDF"],
  },
];
