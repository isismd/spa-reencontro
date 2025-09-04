import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/utils";
import { Calendar, FileDown, Info, Paperclip } from "lucide-react";
import { useMemo } from "react";

import type { InformacaoDesaparecidoDTO } from "@/interfaces/IOcorrencia";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  informacoes: InformacaoDesaparecidoDTO[];
  loading?: boolean;
  error?: string;
  className?: string;
};

export default function OcorrenciasTimeline({
  informacoes,
  loading,
  error,
  className,
}: Props) {
  const itens = useMemo(() => {
    return [...(informacoes ?? [])].sort((a, b) => {
      const da = new Date(a.data).getTime();
      const db = new Date(b.data).getTime();
      return db - da;
    });
  }, [informacoes]);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-base">Ocorrências / Avistamentos</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-3">
                <div className="bg-muted mt-1 h-3 w-3 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-destructive text-sm">Erro: {error}</p>
        ) : itens.length === 0 ? (
          <div className="text-muted-foreground flex items-center gap-2 rounded-md border p-3 text-sm">
            <Info className="size-4" />
            Nenhuma ocorrência registrada para este caso.
          </div>
        ) : (
          <div className="relative">
            <ScrollArea>
              <div className="mr-2 max-h-80 space-y-5 pr-2">
                {itens.map((it, i) => (
                  <div
                    key={it.id}
                    className="relative grid grid-cols-[auto_1fr] gap-3"
                  >
                    <div className="bg-primary ring-background relative z-10 mt-1 size-3 rounded-full ring-2" />
                    {i < itens.length - 1 && (
                      <div className="bg-border absolute top-3 bottom-[-20px] left-[6px] w-0.5" />
                    )}
                    <div className="rounded-lg border p-3">
                      <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="size-3" />
                          {formatDate(it.data)}
                        </span>
                        <Badge variant="outline" className="ml-1">
                          #{String(it.id).padStart(4, "0")}
                        </Badge>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed">
                        {it.informacao}
                      </p>

                      {Array.isArray(it.anexos) && it.anexos.length > 0 && (
                        <>
                          <Separator className="my-3" />
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
                              <Paperclip className="size-3" />
                              Anexos:
                            </span>
                            {it.anexos.map((url: any, idx: number) => (
                              <Button
                                key={idx}
                                variant="outline"
                                size="sm"
                                className="h-7 gap-1"
                                onClick={() =>
                                  url &&
                                  window.open(
                                    url,
                                    "_blank",
                                    "noopener,noreferrer",
                                  )
                                }
                              >
                                <FileDown className="size-3" />
                                {`Arquivo ${idx + 1}`}
                              </Button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
