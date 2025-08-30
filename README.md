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
</p>

Aplicação **SPA (Single Page Application)** para **consultar registros de pessoas desaparecidas** (ou já localizadas) e **enviar informações adicionais** (observações, localização, fotos).  
Projeto desenvolvido no contexto do **Projeto Prático / Desenvolve MT**.

🔗 API oficial: [Swagger Abitus](https://abitus-api.geia.vip/swagger-ui/index.html)


---

## 👩‍💼 Dados de Inscrição

- **Nome:** Isis Milena Daron  
- **Telefone:** (65) 98119-0823  
- **E-mail:** contato.isisdaron@gmail.com  

---

## ✨ Funcionalidades

- 📋 **Cards** com foto, dados principais e **status** (Desaparecida / Localizada).
- 🔎 **Busca e filtros** (nome, sexo, faixa etária, status).
- 📄 **Paginação** (mínimo de 10 registros por página).
- 👤 **Página de detalhes** com informações completas.
- 🏷️ **Destaque visual do status** (“Desaparecida” ou “Localizada”).
- 📌 **Envio de informações adicionais** (observações, localização, anexos).
- 🪄 **UX**: skeleton loaders, toasts, rotas com **lazy loading**.
- ♿ **Design responsivo e acessível**.

---

## 🧱 Stack & Principais libs

- **React 19** + **Vite 7**
- **TypeScript 5**
- **Tailwind CSS 4** + [shadcn/ui](https://ui.shadcn.com/)
- **Zustand** (gerenciamento de estado)
- **Lucide React** (ícones)
- **ESLint + Prettier** (padrões de código)

## ⚙️ Como Rodar Localmente

### Pré-requisitos
- Node.js 20+
- npm

### Passo a passo

```bash
git clone https://github.com/seu-usuario/projeto-pratico.git
cd projeto-pratico
npm install
npm run dev
```
Acesse em: http://localhost:5173

## 🗂️ Estrutura de Pastas

A estrutura foi organizada de forma simples e clara, separando os componentes em pastas específicas (como detalhes, filtros, layout, ocorrências, etc.), deixando as páginas (Home, Detalhes, Sobre, NotFound) em pages/, os serviços de API em services/ e o estado global em stores/; além disso, há pastas auxiliares como hooks/, interfaces/ e lib/ para manter o código bem dividido e fácil de manter.

```bash
projeto-pratico/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ hooks/
│  ├─ interfaces/
│  ├─ lib/
│  ├─ pages/
│  ├─ services/
│  ├─ stores/
│  ├─ apis/
│  ├─ routes.tsx
│  ├─ main.tsx
│  └─ App.tsx
├─ .env.example
├─ .eslintrc
├─ .prettierrc
├─ index.html
└─ vite.config.ts
```

Este projeto usa apenas a URL pública da API fornecida no desafio.
Não há dados sensíveis no .env, apenas referência ao endpoint público.
