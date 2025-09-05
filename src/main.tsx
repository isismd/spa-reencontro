import { enableMocks, isMockEnabled } from "@/mocks/mockController";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

async function bootstrap() {
  if (isMockEnabled()) {
    await enableMocks();
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

bootstrap();
