<p align="center">
  <img src="https://github.com/isismd/spa-pessoas-desaparecidas/blob/main/public/icon.png" alt="Projeto Prático Reencontro" width="120"/>
</p>

<h1 align="center">Reencontro</h1>
<h2 align="center">Projeto Prático - Desenvolve MT</h2>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=000" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=fff" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=fff" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=fff" /></a>
  <a href="https://zustand-demo.pmnd.rs/"><img src="https://img.shields.io/badge/State-Zustand-000" /></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/Lint-ESLint-4b32c3?logo=eslint&logoColor=fff" /></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Code%20Style-Prettier-ff69b4?logo=prettier" /></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Tested%20with-Vitest-6E9F18?logo=vitest&logoColor=fff" /></a>
</p>

Aplicação **SPA (Single Page Application)** para **consultar registros de pessoas desaparecidas** (ou já localizadas) e **enviar informações adicionais** (observações, localização, fotos).  
Projeto desenvolvido no contexto do **Projeto Prático / Desenvolve MT**.

🔗 API oficial: [Swagger Abitus](https://abitus-api.geia.vip/swagger-ui/index.html)

## 🧭 Sumário

- [👩‍💼 Dados de Inscrição](#-dados-de-inscrição)
- [✨ Funcionalidades](#funcionalidades)
- [🧱 Stack](#stack)
- [⚙️ Rodando o Projeto](#rodando-projeto)
- [🎨 Identidade Visual](#identidade-visual)
- [🗂️ Estrutura de Pastas](#️-estrutura-de-pastas)

<h2 id="dados-de-inscricao">👩‍💼 Dados de Inscrição</h2>

- **Nome:** Isis Milena Daron
- **Telefone:** (65) 98119-0823
- **E-mail:** contato.isisdaron@gmail.com

<h2 id="funcionalidades">✨ Funcionalidades</h2>

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
- Escolha interativa API/Mock: Prompt no terminal com inquirer + suporte a flag de ambiente (VITE_USE_MOCK=true|false).
- Testes de unidade com Vitest, incluindo runner interativo (npm run test:ui).
- Toasts com sonner (inclui integração com o tema claro ou escuro).
- Animações sutis com tw-animate-css.
- Gerenciamento de estado global leve com Zustand, organizado em stores independentes.
- Qualidade contínua: ESLint + Prettier.

<h2 id="stack">🧱 Stack</h2>

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

<h2 id="rodando-projeto">⚙️ Rodando o Projeto</h2>

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
- Sua escolha será salva no arquivo `.env.local`.

3. Acesse a aplicação em [http://localhost:5173](http://localhost:5173).

---

#### 2.2. 🐋 Executando com Docker 

1. Certifique-se de ter o Docker instalado.
2. Execute o comando abaixo para rodar o projeto (por padrão, ele já utiliza a **API oficial**, e não os mocks):

   ```powershell
   docker compose up --build
   ```

   - Caso a API esteja instável, utilize o seguinte comando para rodar o projeto com os Mocks (dados fictícios):
     - **PowerShell (Windows):**
       ```powershell
       $env:VITE_USE_MOCK="true"; docker compose up --build
       ```
     - **Bash (Linux/Mac):**
       ```bash
       VITE_USE_MOCK=true docker compose up --build
       ```

3. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

### 3. Sobre as Configurações de Ambiente

O projeto utiliza **variáveis de ambiente** para controlar o comportamento da aplicação.  
Não se preocupe: não é necessário criar manualmente um arquivo `.env.local`, pois esse processo já está **automatizado**, mesmo ao rodar o projeto localmente com NPM. 😉

```bash
# URL da API oficial
VITE_API_BASE_URL=https://abitus-api.geia.vip

# Define se usa mock ou não
# true  = usar mock de dados fictícios
# false = usar API oficial
VITE_USE_MOCK=false
```

> [!WARNING]
> Se a API oficial estiver instável, você pode ativar os dados fictícios (mocks) alterando o valor da variável VITE_USE_MOCK para true.
> Essa configuração pode ser feita no arquivo .env.local ou diretamente no comando de execução.


<h2 id="identidade-visual">🎨 Identidade Visual</h2>

O design do **Reencontro** foi pensado para transmitir **clareza, empatia e urgência**:

- **Paleta de cores**: tons mais fortes de **vermelho** foram escolhidos para reforçar a identidade do projeto “Reencontro”.  
  O vermelho funciona como um chamado de atenção, remetendo à urgência da causa (pessoas desaparecidas) e à importância de agir rápido.  
  Para contraste e legibilidade, foram aplicados tons neutros (cinza, branco e preto) no fundo e na tipografia.

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

<h2 id="testes">🧪 Testes</h2>

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

Os resultados dos testes são exibidos no terminal e também geram relatórios de cobertura em `/coverage`.

<h2 id="estrutura-de-pastas">🗂️ Estrutura de Pastas</h2>

O projeto está organizado para facilitar o desenvolvimento, manutenção e escalabilidade. Os principais diretórios e arquivos têm funções bem definidas:

- **src/**: Código-fonte principal da aplicação, dividido em módulos como componentes, páginas, serviços, estado global, mocks, interfaces e utilitários.
- **public/**: Arquivos públicos e estáticos, como imagens e ícones.
- **scripts/**: Scripts auxiliares para configuração e automação.
- **docker-compose.yml / Dockerfile**: Arquivos para configuração e execução do ambiente Docker.
- **package.json / vite.config.ts / tsconfig.json**: Configurações de dependências, build e TypeScript.
- **README.md**: Documentação do projeto.

Essa estrutura permite separar responsabilidades, tornando o projeto mais organizado e fácil de entender para novos colaboradores.

```bash
spa-pessoas-desaparecidas/
├─ public/
├─ scripts/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ hooks/
│  ├─ interfaces/
│  ├─ layout/
│  ├─ lib/
│  ├─ mocks/
│  ├─ pages/
│  ├─ services/
│  ├─ stores/
│  ├─ main.tsx
│  ├─ routes.tsx
│  └─ App.tsx
├─ docker-compose.yml
├─ Dockerfile
├─ package.json
├─ vite.config.ts
├─ tsconfig.json
└─ README.md
```

> [!NOTE]  
> Este projeto não utiliza variáveis sensíveis (como tokens ou credenciais).  
> As únicas variáveis de ambiente são públicas (`VITE_API_BASE_URL` e `VITE_USE_MOCK`), mas recomenda-se sempre manter arquivos `.env` fora do versionamento por boas práticas.

