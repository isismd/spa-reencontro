<p align="center">
  <img src="https://github.com/isismd/spa-reencontro/blob/main/public/icon.png" alt="Logo Reencontro" width="100"/>
</p>
<h1 align="center">Reencontro</h1>

<h2 align="center">SPA Pessoas Desaparecidas</h2>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=000" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=fff" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=fff" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=fff" /></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Code%20Style-Prettier-ff69b4?logo=prettier" /></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Tested%20with-Vitest-6E9F18?logo=vitest&logoColor=fff" /></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn/ui-000?logo=radix-ui&logoColor=fff" /></a>
  <a href="https://zustand-demo.pmnd.rs/"><img src="https://img.shields.io/badge/Zustand-764abc?logo=zustand&logoColor=fff" /></a>
</p>

<img align="right" src="https://github.com/isismd/spa-reencontro/blob/main/public/sample-dark.webp" alt="Demonstração do sistema" width="400"/>

&nbsp;

Aplicação **SPA** (Single Page Application) moderna e responsiva, desenvolvida para facilitar a busca, acompanhamento e colaboração em casos de pessoas desaparecidas.

O sistema permite consultar registros oficiais (desaparecidos e já localizados), acessar detalhes completos e enviar informações adicionais como observações, locais de avistamento e anexos, ampliando a rede de apoio e aumentando as chances de **reencontro**.

Desenvolvido no contexto do **Projeto Prático / Desenvolve MT**.

🔗 API oficial: [Swagger Abitus](https://abitus-api.geia.vip/swagger-ui/index.html)

<br clear="right"/>

## Sumário

- [🗃️ Dados de Inscrição](#%EF%B8%8F-dados-de-inscrição)
- [🔮 Funcionalidades](#-funcionalidades)
- [💻 Rodando o Projeto](#-rodando-o-projeto)
- [🤖 Modo de Demonstração](#-modo-de-demonstração)
- [🏗️ Configurações de Ambiente](#%EF%B8%8F-configura%C3%A7%C3%B5es-de-ambiente)
- [👩‍🎨 Identidade Visual](#-identidade-visual)
- [🧪 Testes](#-testes)
- [🔍 Stack](#-stack)

## 🗃️ Dados de Inscrição

- **Nome:** Isis Milena Daron
- **Telefone:** (65) 98119-0823
- **E-mail:** contato.isisdaron@gmail.com

## 🔮 Funcionalidades

O sistema foi pensado para facilitar a busca, colaboração e acompanhamento de casos de pessoas desaparecidas.

### Funcionalidades Principais

- Cards informativos com foto, nome e status (Desaparecida/Localizada) para identificação rápida.
- Busca por nome e filtros combináveis (sexo, faixa etária e status) para localizar casos específicos.
- Paginação dinâmica com controle de itens por página, mantendo a navegação fluida mesmo com muitos registros.
- Página de detalhes completa: histórico, dados pessoais e anexos enviados, útil para análise aprofundada e colaboração.
- Envio de informações adicionais (observações, localização e anexos) aberto a qualquer usuário.
- Validação no formulário de adicionar informações (React Hook Form + Zod).
- Feedbacks modernos: skeleton loaders e toasts para estados de carregamento, sucesso e erro.
- Rotas com lazy loading para otimizar carregamento e experiência.
- Design responsivo e acessível (labels/ARIA, foco visível, contraste adequado).
- Distribuição em Docker, facilitando a execução em qualquer ambiente

### Diferenciais Implementados

Além dos requisitos previstos, o projeto inclui:

- Escolha de stack moderna: React 19 + Vite 7 + TypeScript 5 + Tailwind 4 + shadcn/ui
- Design pensado para transmitir empatia e esperança às famílias de desaparecidos
- Tema escuro inteligente que detecta a preferência do sistema e permite alternância manual
- Página “Sobre” explicando o projeto e seus objetivos
- Página "Estatísticas" com gráficos e indicadores sobre os dados disponíveis.
- Página "Como Ajudar" contendo um guia sobre a adição de informações de avistamento de pessoas desaparecidas.
- Tooltips em botões de ícone para garantir entendimento rápido
- Terminal customizado no `npm run dev` com mensagens estilizadas (chalk e boxen)
- Possibilidade de ativar API Mock em caso de instabilidade da API oficial
- Mock completo da API, incluindo filtros, paginação e estatísticas
- reCAPTCHA v2 no formulário de envio de informações (com chave de teste para modo desenvolvimento, apenas simulação do funcionamento real)
- Ações rápidas na página de detalhes, incluindo abrir local do desaparecimento no Google Maps, baixar cartaz e compartilhar o link da página
- Testes de unidade com Vitest, incluindo runner visual (`npm run test:ui`)
- Estado global leve com Zustand, organizado em stores independentes
- Integração de animações sutis com `tw-animate-css`
- Garantia de qualidade de código Prettier

## 💻 Rodando o Projeto

Abaixo estão as instruções para rodar o projeto localmente, seja utilizando os comandos do **NPM** ou via **Docker**.

### 1. Clonar o projeto

```bash
git clone https://github.com/isismd/spa-reencontro.git
cd spa-reencontro
```

---

### 2. Executando o Projeto

#### 2.1. 🔧 Executando com npm

1. Instale as dependências:

```powershell
npm install
```

2. Inicie o projeto:

```powershell
npm run dev
```

> Ao rodar esse comando de inicialização do projeto, será perguntado se deseja ativar o reCAPTCHA no formulário.
>
> <img height="350" alt="image" src="https://github.com/user-attachments/assets/4d130df4-e2ce-43d3-aa17-286aab961b94" />
>
> Sua escolha será salva no arquivo `.env.local`.

3. Acesse a aplicação em [http://localhost:5173](http://localhost:5173).

---

#### 2.2. 🐋 Executando com Docker

1. Certifique-se de ter o Docker instalado.
2. Execute o comando abaixo para rodar o projeto (por padrão, ele já utiliza a **API oficial**, e não os mocks):

   ```powershell
   docker compose up --build
   ```

3. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## 🤖 Modo de Demonstração

Quando a API oficial estiver indisponível ou se você preferir testar o sistema sem depender dela, é possível ativar o modo demonstração (mocks).

Nesse modo, todas as chamadas são respondidas localmente e você pode simular o fluxo completo, inclusive envio de informações com anexos, sem que nada seja enviado para a API real.

O que acontece nos bastidores:

- Interceptação de requisições: feita com `axios-mock-adapter`, que retorna respostas pré-configuradas.
- Envio de informações: os dados da página de enviar informações chegam via FormData, são serializados e salvos no IndexedDB junto com os metadados.
- Listagem de informações: o sistema combina os dados mockados em memória com os registros locais armazenados no navegador, já gerando object URLs para visualizar anexos imediatamente.
- Sem sincronização posterior: tudo que você criar no modo demonstração fica apenas no seu navegador. Esses dados não são enviados para a API oficial depois.

É possível ativar esse modo na home page quando a API retornar um erro 500 ou no cabeçalho, clicando no botão <img width="30" alt="image" src="https://github.com/user-attachments/assets/def04283-389e-4209-9f9e-f993154d586d" /> que ativa os dados fictícios no sistema.

## 🏗️ Configurações de Ambiente

O projeto utiliza **variáveis de ambiente** para controlar o comportamento da aplicação.

Essas variáveis podem ser definidas em um arquivo `.env.local` (gerado automaticamente pelo script interativo ao rodar `npm run dev`) ou passadas via docker-compose.yml durante o build.

```bash
# URL da API oficial
VITE_API_BASE_URL=https://abitus-api.geia.vip

# reCAPTCHA (usado na tela de envio de informações)
# Em desenvolvimento é utilizada a test key oficial do Google
VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI

# Ativa ou desativa o reCAPTCHA (útil para rodar localmente sem precisar do widget)
VITE_RECAPTCHA_ENABLED=true
```

## 👩‍🎨 Identidade Visual

O design do **Reencontro** foi pensado para transmitir **clareza, empatia e urgência**:

- **Paleta de cores**: a identidade visual do projeto adota tons de amarelo/dourado, alinhados ao brasão da **Polícia Judiciária Civil de Mato Grosso** (PJC-MT).
  Essa escolha transmite seriedade, confiabilidade e institucionalidade, sem perder a força de destaque necessária para o tema de pessoas desaparecidas.
  Para garantir contraste e legibilidade, foram aplicados tons neutros (cinza, branco e preto) no fundo e na tipografia.

- **Componentes de UI**: a interface utiliza [**shadcn/ui**](https://ui.shadcn.com/), que fornece componentes modernos, acessíveis e reutilizáveis, estilizados diretamente com **Tailwind CSS**.  
  Isso garante consistência visual, responsividade e rapidez no desenvolvimento.

- **Foco em acessibilidade**: a interface adota textos claros, contraste adequado, responsividade em múltiplos dispositivos e elementos de feedback (skeleton loaders, toasts), favorecendo a inclusão.

- **Design acolhedor**: pensado especialmente para **famílias que possuem um ente querido desaparecido**, com banners e mensagens que reforçam a importância da ajuda nas informações, transmitindo esperança e humanidade.  
  Exemplos de mensagens exibidas:

  > Use nossa plataforma para consultar registros de pessoas desaparecidas ou já localizadas. Qualquer informação pode transformar a vida de uma família.

  > **Viu essa pessoa?**  
  > Qualquer detalhe pode ajudar. Adicione uma informação agora mesmo.

  > Ainda não localizada, qualquer informação pode ajudar.  
  > **Sua ajuda pode fazer a diferença.**

Cada detalhe visual busca não apenas atender aos requisitos técnicos, mas também **transmitir a mensagem de ajuda e solidariedade** que o projeto representa.

## 🧪 Testes

Os testes automatizados utilizam **Vitest** e cobrem:

- **Funções utilitárias** (`src/lib/utils.test.ts`)
- **Mock da API** e simulação de endpoints (`src/mocks/apiMock.test.ts`)
- Componentes principais

Para rodar os testes:

```bash
npm test
# ou
npm run test
```

Os resultados dos testes são exibidos no terminal.

## 🔍 Stack

O projeto utiliza as seguintes stacks e principais dependências:

<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="60" alt="React"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" width="60" alt="Vite"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="60" alt="TypeScript"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" width="60" alt="Tailwind"/>
  <img src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/favicon.ico" width="60" alt="shadcn/ui"/>
  <img src="https://raw.githubusercontent.com/github/explore/990a9efe0b9529eca38ca9e081bc7a97b18dff45/topics/zustand/zustand.png" width="60" alt="Zustand"/>
  <img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" width="60" alt="React Hook Form"/>
  <img src="https://www.svgrepo.com/show/354262/react-router.svg" width="60" alt="React Router"/>
  <img src="https://vitest.dev/logo.svg" width="60" alt="Vitest"/>
</p>

---

> [!NOTE]  
> Este projeto não utiliza variáveis sensíveis (como tokens ou credenciais privadas).  
> Mesmo o `VITE_RECAPTCHA_SITE_KEY` é apenas a **test key oficial do Google**, própria para desenvolvimento, sem risco de exposição.  
> Ainda assim, recomenda-se manter arquivos `.env` fora do versionamento por boas práticas.

> [!NOTE]  
> A **API Oficial** não retorna o status da pessoa quando a listagem é feita sem filtro por status.  
> Para exibir no card se está localizada ou não, foi utilizada a propriedade `dataLocalizacao`, que pode em alguns casos apresentar **inconsistências**.
