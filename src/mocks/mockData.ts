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
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 101,
      dtDesaparecimento: "2025-08-01",
      localDesaparecimentoConcat: "Cuiabá - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao:
          "Foi vista pela última vez saindo do trabalho, usando mochila preta.",
        vestimentasDesaparecido:
          "Camisa azul clara, calça jeans, tênis branco e mochila preta.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 2,
    nome: "João de Souza",
    idade: 45,
    sexo: "MASCULINO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 102,
      dtDesaparecimento: "2025-07-20",
      localDesaparecimentoConcat: "Várzea Grande - MT",
      encontradoVivo: true,
      dataLocalizacao: "2025-08-15",
      ocorrenciaEntrevDesapDTO: {
        informacao: "Localizado em segurança após contato de familiar.",
        vestimentasDesaparecido: "Camiseta preta, bermuda cinza, chinelo azul.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 3,
    nome: "Ana Pereira",
    idade: 22,
    sexo: "FEMININO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 101,
      dtDesaparecimento: "2025-06-12",
      localDesaparecimentoConcat: "Rondonópolis - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Saiu de casa para faculdade e não retornou.",
        vestimentasDesaparecido: "Vestido floral e sandália branca.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 4,
    nome: "Carlos Mendes",
    idade: 52,
    sexo: "MASCULINO",
    vivo: false,
    urlFoto:
      "https://images.unsplash.com/photo-1603415526960-f7e0328b29f7?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 101,
      dtDesaparecimento: "2025-05-02",
      localDesaparecimentoConcat: "Tangará da Serra - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Último contato por telefone com a família.",
        vestimentasDesaparecido: "Camisa polo vermelha e calça jeans.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 5,
    nome: "Beatriz Gomes",
    idade: 28,
    sexo: "FEMININO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 101,
      dtDesaparecimento: "2025-04-18",
      localDesaparecimentoConcat: "Cáceres - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Desapareceu após sair para caminhada no fim da tarde.",
        vestimentasDesaparecido: "Short preto e camiseta verde.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 6,
    nome: "Rafael Costa",
    idade: 19,
    sexo: "MASCULINO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 102,
      dtDesaparecimento: "2025-03-25",
      localDesaparecimentoConcat: "Lucas do Rio Verde - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Foi visto por amigos em uma festa no centro.",
        vestimentasDesaparecido: "Jaqueta preta e boné azul.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 7,
    nome: "Fernanda Rocha",
    idade: 34,
    sexo: "FEMININO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 107,
      dtDesaparecimento: "2025-07-10",
      localDesaparecimentoConcat: "Barra do Garças - MT",
      encontradoVivo: true,
      dataLocalizacao: "2025-07-25",
      ocorrenciaEntrevDesapDTO: {
        informacao: "Foi localizada em outro estado, em segurança.",
        vestimentasDesaparecido: "Roupa esportiva preta.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 8,
    nome: "Gabriel Lima",
    idade: 40,
    sexo: "MASCULINO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 108,
      dtDesaparecimento: "2025-02-15",
      localDesaparecimentoConcat: "Sinop - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Desapareceu após viagem a trabalho.",
        vestimentasDesaparecido: "Camisa social branca e calça preta.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 9,
    nome: "Juliana Almeida",
    idade: 25,
    sexo: "FEMININO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 109,
      dtDesaparecimento: "2025-01-28",
      localDesaparecimentoConcat: "Alta Floresta - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Foi vista pela última vez em um supermercado.",
        vestimentasDesaparecido: "Blusa amarela e saia jeans.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 10,
    nome: "Pedro Henrique",
    idade: 31,
    sexo: "MASCULINO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 110,
      dtDesaparecimento: "2025-08-10",
      localDesaparecimentoConcat: "Nova Mutum - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Colegas relataram que não compareceu ao trabalho.",
        vestimentasDesaparecido: "Camisa social azul clara.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 11,
    nome: "Mariana Torres",
    idade: 29,
    sexo: "FEMININO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 111,
      dtDesaparecimento: "2025-05-30",
      localDesaparecimentoConcat: "Sorriso - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Saiu de bicicleta para treino esportivo.",
        vestimentasDesaparecido: "Conjunto esportivo azul.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 12,
    nome: "Lucas Ferreira",
    idade: 37,
    sexo: "MASCULINO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 112,
      dtDesaparecimento: "2025-06-08",
      localDesaparecimentoConcat: "Colíder - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Última vez visto em posto de gasolina.",
        vestimentasDesaparecido: "Camisa verde e calça jeans clara.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 13,
    nome: "Paula Nunes",
    idade: 41,
    sexo: "FEMININO",
    vivo: true,
    urlFoto:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 113,
      dtDesaparecimento: "2025-03-11",
      localDesaparecimentoConcat: "Pontes e Lacerda - MT",
      encontradoVivo: false,
      ocorrenciaEntrevDesapDTO: {
        informacao: "Foi vista em uma feira municipal.",
        vestimentasDesaparecido: "Vestido vermelho longo.",
      },
      listaCartaz: [],
    },
  },
  {
    id: 14,
    nome: "André Oliveira",
    idade: 50,
    sexo: "MASCULINO",
    vivo: false,
    urlFoto:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=800&crop=faces&auto=format",
    ultimaOcorrencia: {
      ocoId: 114,
      dtDesaparecimento: "2025-07-01",
      localDesaparecimentoConcat: "Primavera do Leste - MT",
      encontradoVivo: false,
      dataLocalizacao: "2025-07-05",
      ocorrenciaEntrevDesapDTO: {
        informacao: "Foi localizado pela polícia rodoviária.",
        vestimentasDesaparecido: "Camisa cinza e calça jeans.",
      },
      listaCartaz: [],
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
    informacao: "Avistado no bairro Jardim Itália por morador local.",
    data: "2025-08-15T10:05:00",
    anexos: ["https://dummyimage.com/800x1131/eeeeee/333&text=PDF"],
  },
];
