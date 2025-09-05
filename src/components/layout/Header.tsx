import { enableMocks, isMockEnabled } from "@/mocks/mockController";
import { usePessoasStore } from "@/stores/pessoasStore";
import { FlaskConical, Info, Moon, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/ThemeProvider";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  emergencia?: string;
};

export default function Header({
  title = "Reencontro",
  subtitle = "Sistema da PJC-MT para busca de pessoas desaparecidas",
}: HeaderProps) {
  const { setTheme } = useTheme();
  const { fetch } = usePessoasStore();
  const navigate = useNavigate();

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  const handleUseMock = async () => {
    await enableMocks().then(() => setTimeout(() => fetch(), 200));
    navigate("/");
  };

  return (
    <header className="border-primary bg-background sticky top-0 z-50 w-full border-b-2 shadow-md backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center md:h-12 md:w-12">
            <img src="/icon.png" alt="Logo" />
          </div>
          <div className="leading-tight">
            <h1 className="text-base font-semibold md:text-xl">{title}</h1>
            <h2 className="text-sm text-gray-500 dark:text-gray-400">
              {subtitle}
            </h2>
          </div>
        </Link>

        <div className="flex items-center gap-2">
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
          {!isMockEnabled() && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    onClick={handleUseMock}
                    size="icon"
                    className="relative"
                  >
                    <FlaskConical className="inline" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ativa dados fictícios para demonstração do sistema</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </header>
  );
}
