import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  Camera,
  CheckCircle2,
  Eye,
  FilePlus2,
  HeartHandshake,
  MapPin,
  Phone,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ComoAjudar() {
  return (
    <section className="space-y-10">
      <div className="ring-border from-primary/10 relative overflow-hidden rounded-2xl bg-gradient-to-b to-transparent p-6 ring-1 sm:p-10">
        <div className="relative z-10 flex flex-col gap-4">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <HeartHandshake
              aria-hidden
              className="text-primary mr-2 inline size-6"
            />
            Como Ajudar
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Toda informação pode ser decisiva. Siga as orientações abaixo para
            enviar relatos úteis e divulgar com responsabilidade. Sua atitude
            pode encurtar o caminho de volta de alguém.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <Link to="/">Buscar uma pessoa para enviar informação</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/sobre">Saiba mais sobre o projeto</Link>
            </Button>
          </div>
        </div>
        <div
          aria-hidden
          className="bg-primary/15 pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 aria-hidden className="text-primary size-5" />
            <span className="tracking-tight">
              Antes de enviar uma informação
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/90 grid gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary/80 mt-1 inline-block size-2 rounded-full" />
            <p>Verifique a data, local aproximado e horário do avistamento.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-primary/80 mt-1 inline-block size-2 rounded-full" />
            <p>
              Descreva pontos de referência (ruas, estabelecimentos, linhas de
              ônibus).
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-primary/80 mt-1 inline-block size-2 rounded-full" />
            <p>
              Inclua características visuais (roupas, mochila, tatuagens,
              cicatrizes).
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-primary/80 mt-1 inline-block size-2 rounded-full" />
            <p>
              Se tiver imagens, anexe-as (quanto mais nítidas e recentes,
              melhor).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FilePlus2 aria-hidden className="text-primary size-5" />
            <span className="tracking-tight">
              Passo a passo para registrar uma informação
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/90 space-y-4">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Acesse a{" "}
              <Link to="/" className="font-medium underline">
                página inicial
              </Link>{" "}
              e pesquise pelo nome ou use os filtros.
            </li>
            <li>
              Abra o cartão da pessoa e clique em{" "}
              <Badge variant="secondary">Enviar informação</Badge>.
            </li>
            <li>
              Preencha <strong>o que foi visto</strong>, <strong>onde</strong> e{" "}
              <strong>quando</strong>. Anexe fotos, se tiver.
            </li>
            <li>
              Revise e confirme o envio. Você pode acompanhar atualizações pelo
              cartão da pessoa.
            </li>
          </ol>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye aria-hidden className="text-primary size-5" />
              <span className="tracking-tight">
                O que observar (detalhes que ajudam)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/90 grid gap-2">
            <div className="flex items-start gap-2">
              <MapPin aria-hidden className="size-4" />
              <p>
                <strong>Local:</strong> bairro, ponto de referência, sentido de
                deslocamento.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Camera aria-hidden className="size-4" />
              <p>
                <strong>Aparência:</strong> roupas, acessórios, marcas, altura
                aproximada.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Share2 aria-hidden className="size-4" />
              <p>
                <strong>Companhia/Interações:</strong> estava com alguém?
                veículo? placa, cor, modelo.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck aria-hidden className="text-primary size-5" />
              <span className="tracking-tight">Segurança e conduta</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/90 grid gap-2">
            <p>
              Priorize sua segurança e a da pessoa.{" "}
              <strong>Não confronte</strong>, não interpele e não exponha
              terceiros.
            </p>
            <p>
              Evite boatos. Informe <strong>apenas o que você viu</strong>, sem
              inferências.
            </p>
            <p>
              Se for situação de risco imediato, acione <strong>190</strong>{" "}
              (emergência).
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera aria-hidden className="text-primary size-5" />
            <span className="tracking-tight">Fotos e anexos</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/90 space-y-2">
          <ul className="list-disc space-y-1 pl-5">
            <li>Prefira imagens nítidas, sem zoom digital excessivo.</li>
            <li>
              Inclua contexto (placas de rua, lojas, pontos de ônibus) quando
              possível.
            </li>
            <li>
              Evite filtros/edições fortes. Se possível, anexe o arquivo
              original.
            </li>
            <li>
              Se houver vídeo, informe a duração e o momento exato do registro.
            </li>
          </ul>
          <div className="rounded-lg border bg-amber-100 p-3 text-sm text-amber-950 dark:bg-amber-900/30 dark:text-amber-50">
            <AlertTriangle aria-hidden className="mr-2 inline size-4" />
            Respeite a privacidade de crianças e terceiros. Não compartilhe
            dados sensíveis nos anexos.
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 aria-hidden className="text-primary size-5" />
            <span className="tracking-tight">Divulgação responsável</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/90 space-y-2">
          <p>
            Compartilhe <strong>cartazes oficiais</strong> e evite alterar
            textos/fotos.
          </p>
          <p>
            Atualize a postagem se houver <strong>nova informação</strong> (ex.:
            pessoa localizada).
          </p>
          <p>
            Prefira redes e grupos locais (bairro, transporte, trabalho,
            universidade).
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone aria-hidden className="text-primary size-5" />
            <span className="tracking-tight">Canais úteis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/90 space-y-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="shrink-0">
                190
              </Badge>
              <span>Emergências (Polícia Militar)</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="shrink-0">
                197
              </Badge>
              <span>Disque-Denúncia (Polícia Civil)</span>
            </div>
          </div>
          <Separator className="my-2" />
          <p>
            Em caso de informação relevante e imediata, priorize contato
            telefônico e, quando seguro, registre também pelo sistema para
            rastreabilidade.
          </p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="text-foreground">
            Posso enviar uma informação mesmo sem foto?
          </AccordionTrigger>
          <AccordionContent className="text-foreground/90">
            Sim. Descrições objetivas (local, horário, roupas, direção) já
            ajudam bastante.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger className="text-foreground">
            Vi a pessoa, devo abordá-la?
          </AccordionTrigger>
          <AccordionContent className="text-foreground/90">
            Não. Priorize sua segurança e a da pessoa. Registre o máximo de
            detalhes e acione os canais oficiais.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger className="text-foreground">
            Enviei uma informação errada. E agora?
          </AccordionTrigger>
          <AccordionContent className="text-foreground/90">
            Se perceber um erro, envie uma nova informação corrigindo os dados.
            Se for grave, contate 197 para orientação.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
