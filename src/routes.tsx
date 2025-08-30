import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layout/RootLayout";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Sobre = lazy(() => import("@/pages/Sobre"));
const PessoaDetalhePage = lazy(() => import("@/pages/Detalhes"));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/detalhes/:id", element: <PessoaDetalhePage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
