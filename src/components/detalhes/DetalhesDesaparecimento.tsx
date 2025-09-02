import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate, formatTime, notInformed } from "@/lib/utils";
import {
  Calendar,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  Shirt,
  User2,
} from "lucide-react";

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
    <Card>
      <CardHeader className="gap-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">
            Informações do Desaparecimento
          </CardTitle>
        </div>
        <p className="text-muted-foreground text-xs">
          Detalhes registrados pela ocorrência #{ocoId ?? "—"}
        </p>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        <div className="bg-background/60 rounded-lg border p-3">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Calendar className="size-4" />
            Data do Desaparecimento
          </div>
          <p className="mt-1 font-medium">{formatDate(dtDesaparecimento)}</p>
        </div>
        <div className="bg-background/60 rounded-lg border p-3">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Clock className="size-4" />
            Horário
          </div>
          <p className="mt-1 font-medium">
            {formatTime(horarioDesaparecimento)}
          </p>
        </div>
        <div className="bg-background/60 rounded-lg border p-3 sm:col-span-2">
          <div className="text-muted-foreground flex items-center justify-between gap-2 text-sm">
            <div>
              <MapPin className="mr-2 inline size-4" />
              Local
            </div>
            {localDesaparecimento && onAbrirMaps && (
              <Button
                variant="outline"
                size="sm"
                className="ml-2 h-7 px-2 text-xs"
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
        <div className="bg-background/60 rounded-lg border p-3">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Info className="size-4" /> Observações
          </div>
          <p className="mt-1 font-medium">{notInformed(observacoes)}</p>
        </div>
        <div className="bg-background/60 rounded-lg border p-3">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Shirt className="size-4" /> Vestimentas
          </div>
          <p className="mt-1 font-medium">{notInformed(vestimentas)}</p>
        </div>
        {isLocalizado && (
          <>
            <div className="bg-background/60 rounded-lg border p-3">
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <Calendar className="size-4" />
                Data da Localização
              </div>
              <p className="mt-1 font-medium">{formatDate(dataLocalizacao)}</p>
            </div>
            <div className="bg-background/60 rounded-lg border p-3">
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
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
