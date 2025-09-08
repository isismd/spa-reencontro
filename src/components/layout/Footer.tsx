import { ExternalLink, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-sidebar-primary bg-background mt-12 border-t-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 text-sm md:grid-cols-4">
        <div className="flex flex-col items-center gap-5 md:items-start">
          <img
            src="/logo-dark.png"
            alt="Logo PJC-MT"
            className="block w-60 dark:hidden"
          />
          <img
            src="/logo-light.png"
            alt="Logo PJC-MT"
            className="hidden w-60 dark:block"
          />
          <p className="text-muted-foreground text-center md:text-left">
            <strong>Reencontro</strong> - Sistema de apoio à busca de pessoas
            desaparecidas em Mato Grosso.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-semibold">Navegação</h4>
          <Link
            to="/"
            className="hover:text-primary underline-offset-4 transition-colors hover:underline"
          >
            Início
          </Link>
          <Link
            to="/como-ajudar"
            className="hover:text-primary underline-offset-4 transition-colors hover:underline"
          >
            Como ajudar
          </Link>
          <Link
            to="/estatisticas"
            className="hover:text-primary underline-offset-4 transition-colors hover:underline"
          >
            Estatísticas
          </Link>
          <Link
            to="/sobre"
            className="hover:text-primary underline-offset-4 transition-colors hover:underline"
          >
            Sobre
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-semibold">Institucional PJC-MT</h4>
          <a
            href="https://www.pjc.mt.gov.br/inicio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary flex items-center gap-1 underline-offset-4 transition-colors hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            Site Oficial
          </a>
          <a
            href="https://www.pjc.mt.gov.br/ouvidoria"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary flex items-center gap-1 underline-offset-4 transition-colors hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            Ouvidoria
          </a>
          <a
            href="https://www.pjc.mt.gov.br/transparencia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary flex items-center gap-1 underline-offset-4 transition-colors hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            Transparência
          </a>
          <a
            href="https://www.pjc.mt.gov.br/faleconosco"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary flex items-center gap-1 underline-offset-4 transition-colors hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            Fale Conosco
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/isismd/spa-reencontro"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary flex items-center gap-1 underline-offset-4 transition-colors hover:underline"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="mailto:contato.isisdaron@gmail.com"
              className="hover:text-primary flex items-center gap-1 underline-offset-4 transition-colors hover:underline"
            >
              <Mail className="h-4 w-4" />
              Contato
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="font-semibold">Projeto Prático – Desenvolve MT</p>
            <p className="text-muted-foreground">Feito com ❤️ por Isis Daron</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
