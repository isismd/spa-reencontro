import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Info,
  Database,
  HeartHandshake,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

export default function SobrePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl ring-1 ring-border bg-gradient-to-b from-primary/10 to-transparent p-6 sm:p-10">
        <div className="flex items-start gap-4">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <Info className="size-6 text-primary inline mr-2" />
              Sobre o Projeto
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
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
            <HeartHandshake className="size-5 text-primary" />
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
          <ul className="list-disc pl-5 space-y-1">
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
            <Database className="size-5 text-primary" />
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="size-5 text-primary" />
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
          <p className="text-sm text-muted-foreground">Desenvolvido por</p>
          <p className="font-medium">Isis Daron</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">E-mail</p>
          <a
            href="mailto:contato.isisdaron@gmail.com"
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            contato.isisdaron@gmail.com
          </a>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">LinkedIn</p>
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
          <p className="text-sm text-muted-foreground">GitHub</p>
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
