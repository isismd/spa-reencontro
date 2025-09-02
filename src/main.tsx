import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

if (USE_MOCK) {
  await import("@/mocks/apiMock.ts");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
