import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background mt-12 border-t">
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm md:flex-row md:text-left">
        <p className="flex items-center gap-1">
          Projeto Prático - Desenvolve MT
        </p>
        <p className="flex items-center gap-1">Feito com ❤️ por Isis Daron</p>

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
      </div>
    </footer>
  );
}
