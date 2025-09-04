import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-sidebar-primary bg-background mt-12 border-t-2">
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm md:flex-row md:text-left">
        <div className="flex flex-col gap-5">
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

        <div className="flex flex-col items-center gap-4 md:items-end md:text-end">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/isismd/spa-pessoas-desaparecidas"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:contato.isisdaron@gmail.com"
              className="hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contato
            </a>
          </div>

          <div>
            <p className="font-semibold"> Projeto Prático - Desenvolve MT</p>
            <p>Feito com ❤️ por Isis Daron</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
