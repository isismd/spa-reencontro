import { Link } from "react-router-dom";
import { Moon, ShieldAlert, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  emergencia?: string;
};

export default function Header({
  title = "Pessoas Desaparecidas",
  subtitle = "Governo do Estado de Mato Grosso",
  emergencia = "190",
}: HeaderProps) {
  const { setTheme } = useTheme();

  // alterna light <-> dark (simples)
  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  // se quiser ciclar entre light -> dark -> system, use isso no lugar:
  // const cycle = () => {
  //   const current = document.documentElement.getAttribute("data-theme") as "light" | "dark" | null;
  //   // se não tiver data-theme, considere "light"
  //   const next = current === "light" ? "dark" : current === "dark" ? "system" : "light";
  //   setTheme(next);
  // };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary bg-background backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary ring-1 ring-indigo-200">
            <ShieldAlert className="h-5 w-5" aria-hidden />
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight">
              {title}
            </div>
            <div className="text-xs text-gray-500">{subtitle}</div>
          </div>
        </Link>

        <div className="block text-right text-xs text-gray-500">
          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={toggle}
            aria-label="Alternar tema"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Alternar tema</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
