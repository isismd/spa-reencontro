<p align="center">
  <img src="https://github.com/isismd/projeto-pratico/blob/main/public/icon.png" alt="Projeto Prático Reencontro" width="120"/>
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
- [✨ Funcionalidades](#-funcionalidades)
- [🧱 Stack](#-stack)
- [⚙️ Rodando o Projeto](#️-como-rodar-localmente)
- [🎨 Identidade Visual](#-identidade-visual)
- [🗂️ Estrutura de Pastas](#️-estrutura-de-pastas)

<h2 id="dados-de-inscricao">👩‍💼 Dados de Inscrição</h2>

- **Nome:** Isis Milena Daron
- **Telefone:** (65) 98119-0823
- **E-mail:** contato.isisdaron@gmail.com

<h2 id="funcionalidades">✨ Funcionalidades</h2>

O sistema foi pensado para facilitar a busca, colaboração e acompanhamento de casos de pessoas desaparecidas. Entre as principais funcionalidades estão:

- Visualização de cards com informações principais, foto e status (Desaparecida/Localizada), permitindo identificação rápida dos casos.
- Busca inteligente e filtros avançados por nome, sexo, faixa etária e status, tornando fácil encontrar registros específicos.
- Paginação dinâmica para melhor organização e performance, mesmo com muitos casos.
- Página de detalhes completa, com histórico, dados pessoais e anexos enviados, útil para análise aprofundada e colaboração.
- Envio de informações adicionais (observações, localização, anexos) por qualquer usuário, incentivando a participação ativa.
- Destaque visual do status com cores e ícones, além de feedbacks modernos (skeleton loaders, toasts, lazy loading) para uma experiência fluida.
- Design responsivo e acessível, adaptado para todos os dispositivos e pessoas com deficiência.
- Possibilidade de rodar o sistema com dados fictícios (mock) para testes e demonstrações.

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

<h2 id="como-rodar-localmente">⚙️ Rodando o Projeto</h2>

### 1. Clonar o projeto

```bash
git clone https://github.com/isismd/projeto-pratico.git
cd projeto-pratico
```

---

### 2. Executando com npm

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

### 3. Executando com Docker

1. Certifique-se de ter o Docker instalado.
2. Execute o comando abaixo para rodar o projeto (por padrão, ele já utiliza dados fictícios/mock devido à instabilidade da API oficial):

   ```powershell
   docker compose up --build
   ```

   - Para forçar o uso da API oficial (se estiver estável):
     - **PowerShell (Windows):**
       ```powershell
       $env:VITE_USE_MOCK="false"; docker compose up --build
       ```
     - **Bash (Linux/Mac):**
       ```bash
       VITE_USE_MOCK=false docker compose up --build
       ```

3. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

<h2 id="identidade-visual">🎨 Identidade Visual</h2>

O design do **Reencontro** foi pensado para transmitir **clareza, empatia e urgência**:

- **Paleta de cores**: tons mais fortes de **vermelho** foram escolhidos para reforçar a identidade do projeto “Reencontro”.  
  O vermelho funciona como um chamado de atenção, remetendo à urgência da causa (pessoas desaparecidas) e à importância de agir rápido.  
  Para contraste e legibilidade, foram aplicados tons neutros (cinza, branco e preto) no fundo e na tipografia.

- **Componentes de UI**: a interface utiliza [**shadcn/ui**](https://ui.shadcn.com/), que fornece componentes modernos, acessíveis e reutilizáveis, estilizados diretamente com **Tailwind CSS**.  
  Isso garante consistência visual, responsividade e rapidez no desenvolvimento.

- **Foco em acessibilidade**: a interface adota textos claros, contraste adequado, responsividade em múltiplos dispositivos e elementos de feedback (skeleton loaders, toasts), favorecendo a inclusão.

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
projeto-pratico/
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

> Este projeto usa apenas a URL pública da API fornecida no desafio.
