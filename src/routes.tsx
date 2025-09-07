import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Sobre = lazy(() => import("@/pages/Sobre"));
const ComoAjudar = lazy(() => import("@/pages/ComoAjudar"));
const Estatisticas = lazy(() => import("@/pages/Estatisticas"));
const PessoaDetalhePage = lazy(() => import("@/pages/Detalhes"));
const AdicionarInfoPage = lazy(() => import("@/pages/AdicionarInfo"));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/como-ajudar", element: <ComoAjudar /> },
      { path: "/estatisticas", element: <Estatisticas /> },
      { path: "/detalhes/:id", element: <PessoaDetalhePage /> },
      { path: "/detalhes/:id/informar", element: <AdicionarInfoPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
