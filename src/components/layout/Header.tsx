import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { enableMocks, isMockEnabled } from "@/mocks/mockController";
import { usePessoasStore } from "@/stores/pessoasStore";
import { FlaskConical, Menu, Moon, Sun } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/ThemeProvider";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function navClass({ isActive }: { isActive: boolean }) {
  return [
    "px-3 py-2 text-sm font-medium transition",
    isActive
      ? "text-primary underline underline-offset-4"
      : "opacity-80 hover:opacity-100",
  ].join(" ");
}

export default function Header() {
  const { setTheme } = useTheme();
  const { fetch, fetchEstatistico } = usePessoasStore();
  const navigate = useNavigate();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  const handleUseMock = async () => {
    await enableMocks().then(() =>
      setTimeout(() => {
        fetch();
        fetchEstatistico();
      }, 500),
    );
    navigate("/");
  };

  return (
    <header className="border-primary bg-background sticky top-0 z-50 w-full border-b-2 shadow-md backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center">
            <img src="/icon.png" alt="Logo" className="h-10 w-10" />
          </div>
          <div className="leading-tight">
            <h1 className="text-base font-semibold md:text-xl">Reencontro</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" end className={navClass}>
            Início
          </NavLink>
          <NavLink to="/como-ajudar" className={navClass}>
            Como ajudar
          </NavLink>
          <NavLink to="/estatisticas" className={navClass}>
            Estatísticas
          </NavLink>
          <NavLink to="/sobre" className={navClass}>
            Sobre
          </NavLink>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Alternar tema"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Alternar tema</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {!isMockEnabled() && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleUseMock}
                    aria-label="Ativar dados fictícios"
                  >
                    <FlaskConical className="h-[1.2rem] w-[1.2rem]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Ativar dados fictícios</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menu">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8} className="w-56">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/">Início</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/como-ajudar">Como ajudar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/estatisticas">Estatísticas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/sobre">Sobre</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={toggleTheme}
                className="cursor-pointer"
              >
                Alternar tema
              </DropdownMenuItem>
              {!isMockEnabled() && (
                <DropdownMenuItem
                  onClick={handleUseMock}
                  className="cursor-pointer"
                >
                  Ativar dados fictícios
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
