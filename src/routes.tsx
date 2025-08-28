import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layout/RootLayout";

const Home = lazy(() => import("@/screens/Home"));
const NotFound = lazy(() => import("@/screens/NotFound"));

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
