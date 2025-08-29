import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "./ThemeProvider";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  emergencia?: string;
};

export default function Header({
  title = "Reencontro",
  subtitle = "Sistema de busca de pessoas desaparecidas",
}: HeaderProps) {
  const { setTheme } = useTheme();

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-primary border-b-2 bg-background backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex w-10 h-10 md:h-12 md:w-12 items-center justify-center">
            <img src="/icon.png" />
          </div>
          <div className="leading-tight">
            <h1 className="md:text-xl text-base font-semibold">{title}</h1>
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              {subtitle}
            </h3>
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
