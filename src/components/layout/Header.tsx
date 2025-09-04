import { Info, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useTheme } from "../../hooks/ThemeProvider";

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
    <header className="border-primary bg-background sticky top-0 z-50 w-full border-b-2 shadow-md backdrop-blur">
      <div className="relative mx-auto grid max-w-7xl grid-cols-[auto_auto] items-center gap-3 px-4 py-2 md:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex items-center justify-center">
            <img
              src="/logo-dark.png"
              alt="Logo"
              className="block w-52 md:w-72 dark:hidden"
            />
            <img
              src="/logo-light.png"
              alt="Logo"
              className="hidden w-52 md:w-72 dark:block"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2 justify-self-end md:z-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative"
                  aria-label="Informações"
                  asChild
                >
                  <Link to="/sobre">
                    <Info className="h-[1.2rem] w-[1.2rem]" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sobre</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative"
                  onClick={toggle}
                  aria-label="Alternar tema"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Alternar tema</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="col-span-2 row-start-2 text-center leading-tight md:pointer-events-none md:absolute md:top-1/2 md:left-1/2 md:col-auto md:row-auto md:w-max md:-translate-x-1/2 md:-translate-y-1/2 md:px-3">
          <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
          <h2 className="text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </h2>
        </div>
      </div>
    </header>
  );
}
