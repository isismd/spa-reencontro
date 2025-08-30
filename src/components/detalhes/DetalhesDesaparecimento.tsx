import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Info,
  Shirt,
  User2,
  ExternalLink,
} from "lucide-react";
import { formatDate, formatTime, notInformed } from "@/lib/utils";

interface DetalhesDesaparecimentoProps {
  ocoId?: number;
  dtDesaparecimento?: string;
  localDesaparecimento?: string;
  horarioDesaparecimento?: string;
  observacoes?: string;
  vestimentas?: string;
  isLocalizado: boolean;
  dataLocalizacao?: string;
  encontradoVivo?: boolean | null;
  onAbrirMaps?: () => void;
}

export default function DetalhesDesaparecimento({
  ocoId,
  dtDesaparecimento,
  localDesaparecimento,
  horarioDesaparecimento,
  observacoes,
  vestimentas,
  isLocalizado,
  dataLocalizacao,
  encontradoVivo,
  onAbrirMaps,
}: DetalhesDesaparecimentoProps) {
  return (
    <Card
      className={
        !isLocalizado
          ? "border-destructive/30 bg-destructive/5"
          : "border-emerald-300/40 bg-emerald-50/40 dark:bg-emerald-500/5"
      }
    >
      <CardHeader className="gap-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">
            Informações do Desaparecimento
          </CardTitle>
        </div>
        <p className="text-xs text-muted-foreground">
          Detalhes registrados pela ocorrência #{ocoId ?? "—"}
        </p>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border bg-background/60 p-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="size-4" />
            Data do Desaparecimento
          </div>
          <p className="mt-1 font-medium">{formatDate(dtDesaparecimento)}</p>
        </div>
        <div className="rounded-lg border bg-background/60 p-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4" />
            Horário
          </div>
          <p className="mt-1 font-medium">
            {formatTime(horarioDesaparecimento)}
          </p>
        </div>
        <div className="rounded-lg border bg-background/60 p-3 sm:col-span-2">
          <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
            <div>
              <MapPin className="size-4 inline mr-2" />
              Local
            </div>
            {localDesaparecimento && onAbrirMaps && (
              <Button
                variant="outline"
                size="sm"
                className="h-7 px-2 text-xs ml-2"
                onClick={onAbrirMaps}
                title="Abrir no Google Maps"
              >
                Abrir no Google Maps
                <ExternalLink />
              </Button>
            )}
          </div>
          <p className="mt-1 font-medium">
            {notInformed(localDesaparecimento)}
          </p>
        </div>
        <div className="rounded-lg border bg-background/60 p-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="size-4" /> Observações
          </div>
          <p className="mt-1 font-medium">{notInformed(observacoes)}</p>
        </div>
        <div className="rounded-lg border bg-background/60 p-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shirt className="size-4" /> Vestimentas
          </div>
          <p className="mt-1 font-medium">{notInformed(vestimentas)}</p>
        </div>
        {isLocalizado && (
          <>
            <div className="rounded-lg border bg-background/60 p-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                Data da Localização
              </div>
              <p className="mt-1 font-medium">{formatDate(dataLocalizacao)}</p>
            </div>
            <div className="rounded-lg border bg-background/60 p-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User2 className="size-4" />
                Condição
              </div>
              <p className="mt-1 font-medium">
                {encontradoVivo === true
                  ? "Vivo"
                  : encontradoVivo === false
                    ? "Óbito"
                    : "Não informado"}
              </p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
