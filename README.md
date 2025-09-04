<p align="center">
  <img src="https://github.com/isismd/spa-pessoas-desaparecidas/blob/main/public/icon.png" alt="Logo Reencontro" width="100"/>
</p>
<h1 align="center">Reencontro</h1>

<h2 align="center">SPA Pessoas Desaparecidas</h2>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=000" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=fff" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=fff" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=fff" /></a>
  <a href="https://zustand-demo.pmnd.rs/"><img src="https://img.shields.io/badge/State-Zustand-000" /></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Code%20Style-Prettier-ff69b4?logo=prettier" /></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Tested%20with-Vitest-6E9F18?logo=vitest&logoColor=fff" /></a>
</p>

<img align="right" src="https://github.com/isismd/spa-pessoas-desaparecidas/blob/main/public/sample-dark.webp" alt="Demonstração do sistema" width="400"/>

&nbsp;

Aplicação **SPA** (Single Page Application) moderna e responsiva, desenvolvida para facilitar a busca, acompanhamento e colaboração em casos de pessoas desaparecidas.

O sistema permite consultar registros oficiais (desaparecidos e já localizados), acessar detalhes completos e enviar informações adicionais como observações, locais de avistamento e anexos, ampliando a rede de apoio e aumentando as chances de **reencontro**.

Desenvolvido no contexto do **Projeto Prático / Desenvolve MT**.

🔗 API oficial: [Swagger Abitus](https://abitus-api.geia.vip/swagger-ui/index.html)

<br clear="right"/>

## Sumário

- [🗃️ Dados de Inscrição](#%EF%B8%8F-dados-de-inscrição)
- [🔮 Funcionalidades](#%EF%B8%8F-dados-de-inscrição)
- [🔍 Stack](#%EF%B8%8F-dados-de-inscrição)
- [💻 Rodando o Projeto](#%EF%B8%8F-dados-de-inscrição)
- [🏗️ Configurações de Ambiente](#%EF%B8%8F-configura%C3%A7%C3%B5es-de-ambiente)
- [👩‍🎨 Identidade Visual](#%EF%B8%8F-dados-de-inscrição)
- [🧪 Testes](#%EF%B8%8F-dados-de-inscrição)

## 🗃️ Dados de Inscrição

- **Nome:** Isis Milena Daron
- **Telefone:** (65) 98119-0823
- **E-mail:** contato.isisdaron@gmail.com

## 🔮 Funcionalidades

O sistema foi pensado para facilitar a busca, colaboração e acompanhamento de casos de pessoas desaparecidas.

### Funcionalidades Principais

- Visualização de cards com informações principais, foto e status (Desaparecida/Localizada), permitindo identificação rápida dos casos.
- Busca nome e filtros avançados por sexo, faixa etária e status, tornando fácil encontrar registros específicos.
- Paginação dinâmica para melhor organização, mesmo com muitos casos.
- Página de detalhes completa, com histórico, dados pessoais e anexos enviados, útil para análise aprofundada e colaboração.
- Envio de informações adicionais (observações, localização, anexos) por qualquer usuário, incentivando a participação ativa.
- Validação do formulário da tela adicionar informações com react-hook-form + zod.
- Destaque visual do status com cores e ícones, além de feedbacks modernos (skeleton loaders, toasts).
- Rotas com lazy loading.
- Design responsivo e acessível, adaptado para diferentes dispositivos.
- Empacotamento da aplicação em container Docker

### Diferenciais Implementados

Além dos requisitos previstos, o projeto inclui:

- Design do sistema pensado para acolher famílias que possuem um ente querido desaparecido, transmitindo empatia e esperança.
- Tema escuro (Dark Mode) com detecção automática da preferência do sistema, mas permitindo que o usuário alterne manualmente entre claro/escuro a qualquer momento.
- Página "Sobre" explicando o projeto.
- Tooltips em todos os botões que possuem somente ícone, garantindo fácil entendimento.
- Customização do terminal ao rodar npm run dev, com mensagens estilizadas e cores (via chalk e boxen), tornando a experiência de desenvolvimento mais imersiva.
- Possibilidade de usar API Mock em caso de instabilidade com a API Oficial.
- Validação com reCAPTCHA v2 no formulário de adicionar informações.
- Botão para download do Cartaz e botão para compartilhamento do link da página de detalhes.
- Botão para abrir o Local de Desaparecimento no Google Maps.
- Usuário pode escolher quantos itens deseja por página, evitando ter que clicar várias vezes no botão de paginação.
- Escolha interativa no terminal para API ou MOCK e uso do reCAPTCHA.
- Testes de unidade com Vitest, incluindo runner interativo (npm run test:ui).
- Toasts com sonner (inclui integração com o tema claro ou escuro).
- Animações sutis com tw-animate-css.
- Gerenciamento de estado global leve com Zustand, organizado em stores independentes.
- ESLint + Prettier.

## 🔍 Stack

O projeto utiliza as seguintes stacks e principais dependências:

- **React 19**
- **Vite 7**
- **TypeScript 5**
- **Tailwind CSS 4**
- **shadcn/ui** (componentes de UI)
- **Zustand** (gerenciamento de estado)
- **React Hook Form** (formulários)
- **React Router DOM** (rotas)
- **Sonner** (notificações/toasts)
- **Axios** (requisições HTTP)
- **Vitest** (testes)
- **ESLint + Prettier** (padrões de código)
- **Zod** (validação de dados)
- **Boxen, Chalk, Figlet, Inquirer** (CLI interativo)

## 💻 Rodando o Projeto

Abaixo estão as instruções para rodar o projeto localmente, seja utilizando os comandos do **NPM** ou via **Docker**.

### 1. Clonar o projeto

```bash
git clone https://github.com/isismd/spa-pessoas-desaparecidas.git
cd spa-pessoas-desaparecidas
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

- Ao rodar `npm run dev`, será perguntado se deseja usar a API oficial ou dados fictícios (mock).
- Também será perguntado se você deseja ativar o reCAPTCHA no formulário.
- Suas escolhas serão salvas no arquivo `.env.local`.

3. Acesse a aplicação em [http://localhost:5173](http://localhost:5173).

---

#### 2.2. 🐋 Executando com Docker

1. Certifique-se de ter o Docker instalado.
2. Execute o comando abaixo para rodar o projeto (por padrão, ele já utiliza a **API oficial**, e não os mocks):

   ```powershell
   docker compose up --build
   ```
   
> [!IMPORTANT]
>  Caso a API esteja instável, utilize o seguinte comando para rodar o projeto com os Mocks (dados fictícios):
> - **PowerShell (Windows):**
       `$env:VITE_USE_MOCK="true"; docker compose up --build`
> - **Bash (Linux/Mac):**
       `VITE_USE_MOCK=true docker compose up --build`

3. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## 🏗️ Configurações de Ambiente

O projeto utiliza **variáveis de ambiente** para controlar o comportamento da aplicação.

Essas variáveis podem ser definidas em um arquivo `.env.local` (gerado automaticamente pelo script interativo ao rodar `npm run dev`) ou passadas via docker-compose.yml durante o build.

```bash
# URL da API oficial
VITE_API_BASE_URL=https://abitus-api.geia.vip

# Define se usa mock ou não
# true  = usar mock de dados fictícios
# false = usar API oficial
VITE_USE_MOCK=false

# reCAPTCHA (usado na tela de envio de informações)
# Em desenvolvimento é utilizado a test key oficial do Google
VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI

# Ativa ou desativa o reCAPTCHA (útil para rodar localmente sem precisar do widget)
VITE_RECAPTCHA_ENABLED=true
```

> [!WARNING]
> Se a API oficial estiver instável, você pode ativar os dados fictícios (mocks) alterando o valor da variável VITE_USE_MOCK para true.
> Essa configuração pode ser feita no arquivo .env.local ou diretamente no comando de execução.

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

---

> [!NOTE]  
> Este projeto não utiliza variáveis sensíveis (como tokens ou credenciais privadas).  
> Mesmo o `VITE_RECAPTCHA_SITE_KEY` é apenas a **test key oficial do Google**, própria para desenvolvimento, sem risco de exposição.  
> Ainda assim, recomenda-se manter arquivos `.env` fora do versionamento por boas práticas.
