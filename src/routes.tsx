import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layout/RootLayout";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Sobre = lazy(() => import("@/pages/Sobre"));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
