import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Database,
  ExternalLink,
  FolderTree,
  HeartHandshake,
  ImageIcon,
  Info,
  Layers,
  Lightbulb,
  ListTree,
  MapPinned,
  Moon,
  Search,
  ShieldCheck,
  TestTubes,
} from "lucide-react";

export default function SobrePage() {
  return (
    <section className="space-y-8">
      <div className="ring-border from-primary/10 rounded-2xl bg-gradient-to-b to-transparent p-6 ring-1 sm:p-10">
        <div className="flex items-start gap-4">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold sm:text-3xl">
              <Info className="text-primary mr-2 inline size-6" />
              Sobre o Projeto
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Este sistema foi desenvolvido como parte do{" "}
              <strong>Projeto Prático do Desenvolve MT</strong>. O desafio
              consiste em implementar uma aplicação front-end moderna para
              consultar e visualizar registros de pessoas desaparecidas,
              utilizando dados oficiais da Polícia Judiciária Civil de Mato
              Grosso.
            </p>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HeartHandshake className="text-primary size-5" />
            Objetivo do projeto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm sm:text-base">
          <p>
            O sistema busca aproximar a sociedade das informações
            disponibilizadas pela API oficial, permitindo consultas rápidas,
            aplicação de filtros e até o envio de novas informações sobre
            pessoas desaparecidas.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Consulta de registros atualizados.</li>
            <li>Interface simples e responsiva.</li>
            <li>Funcionalidades de busca e paginação.</li>
            <li>Possibilidade de contribuir com informações.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="text-primary size-5" />
            De onde vêm os dados?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm sm:text-base">
          <p>
            A aplicação consome a{" "}
            <strong>
              API pública da Polícia Judiciária Civil de Mato Grosso
            </strong>
            , que centraliza informações sobre pessoas desaparecidas ou já
            localizadas.
          </p>
          <Button variant="link" className="p-0">
            <ExternalLink />
            <a
              href="https://abitus-api.geia.vip/swagger-ui/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Ver documentação da API
            </a>
          </Button>
        </CardContent>
      </Card>

      <section aria-labelledby="funcionalidades-title" className="space-y-4">
        <h2 id="funcionalidades-title" className="text-xl font-semibold">
          Funcionalidades
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<ImageIcon className="size-5" />}
            title="Visualização de Cards"
            desc="Cards com informações principais, foto e status para identificação rápida."
          />
          <Feature
            icon={<Search className="size-5" />}
            title="Busca Avançada"
            desc="Busca por nome, filtros por sexo, faixa etária e status."
          />
          <Feature
            icon={<ListTree className="size-5" />}
            title="Paginação Dinâmica"
            desc="Organização eficiente para muitos casos, com navegação simples."
          />
          <Feature
            icon={<Layers className="size-5" />}
            title="Detalhes Completos"
            desc="Histórico, dados pessoais e anexos para análise aprofundada."
          />
          <Feature
            icon={<MapPinned className="size-5" />}
            title="Envio de Informações"
            desc="Observações, local de avistamento e anexos por qualquer usuário."
          />
          <Feature
            icon={<ShieldCheck className="size-5" />}
            title="Design Responsivo"
            desc="Acessível em diferentes dispositivos, com boas práticas de UX."
          />
        </div>
      </section>

      <section aria-labelledby="diferenciais-title" className="space-y-4">
        <h2 id="diferenciais-title" className="text-xl font-semibold">
          Diferenciais Implementados
        </h2>
        <Card>
          <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
            <Differential
              icon={<Moon className="size-4" />}
              title="Tema Escuro Inteligente"
              desc="Detecta preferência do sistema e permite alternância manual a qualquer momento."
            />
            <Differential
              icon={<Bell className="size-4" />}
              title="Toasts e Feedbacks"
              desc="Notificações (sonner), skeletons e micro-animações elegantes."
            />
            <Differential
              icon={<FolderTree className="size-4" />}
              title="Arquitetura Modular"
              desc="Stores (Zustand) isoladas e serviços HTTP tipados.."
            />
            <Differential
              icon={<Database className="size-4" />}
              title="API Mock Opcional"
              desc="Fallback com dados fictícios via flag VITE_USE_MOCK=true quando necessário."
            />
            <Differential
              icon={<TestTubes className="size-4" />}
              title="Qualidade & Testes"
              desc="Vitest e ESLint + Prettier"
            />
            <Differential
              icon={<ShieldCheck className="size-4" />}
              title="Acessibilidade"
              desc="Textos alternativos, tooltips, e navegação consistente."
            />
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="text-primary size-5" />
            Sugestões e melhorias
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm sm:text-base">
          <p>
            Sugestões são muito bem-vindas. Entre em contato para contribuir com
            ideias, melhorias de usabilidade ou novas funcionalidades.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-muted-foreground text-sm">Desenvolvido por</p>
          <p className="font-medium">Isis Daron</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">E-mail</p>
          <a
            href="mailto:contato.isisdaron@gmail.com"
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            contato.isisdaron@gmail.com
          </a>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/isisdaron/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            linkedin.com/in/isisdaron
          </a>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">GitHub</p>
          <a
            href="https://github.com/isismd"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            github.com/isismd
          </a>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="bg-primary/10 text-primary grid size-9 place-items-center rounded-lg">
            {icon}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{desc}</p>
      </CardContent>
    </Card>
  );
}

function Differential({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="bg-muted text-foreground mt-0.5 grid size-8 place-items-center rounded-md">
        {icon}
      </span>
      <div>
        <p className="leading-none font-medium">{title}</p>
        <p className="text-muted-foreground mt-1 text-sm">{desc}</p>
      </div>
    </div>
  );
}
