import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/layout/ThemeProvider";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
