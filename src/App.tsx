import { RouterProvider } from "react-router-dom";
import { ThemeProvider, useTheme } from "./hooks/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { router } from "./routes";

function AppContent() {
  const { theme } = useTheme();

  return (
    <>
      <Toaster position="top-right" richColors theme={theme} />
      <RouterProvider router={router} />
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
