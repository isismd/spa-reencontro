import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Calendar, FileDown, Info, Paperclip } from "lucide-react";
import { formatDate } from "@/lib/utils";

import type { InformacaoDesaparecidoDTO } from "@/interfaces/IOcorrencia";

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
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const itens = useMemo(() => {
    return [...(informacoes ?? [])].sort((a, b) => {
      const da = new Date(a.data).getTime();
      const db = new Date(b.data).getTime();
      return db - da;
    });
  }, [informacoes]);

  const itensVisiveis = mostrarTodos ? itens : itens.slice(0, 3);

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
                <div className="mt-1 h-3 w-3 rounded-full bg-muted" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-sm text-destructive">Erro: {error}</p>
        ) : itens.length === 0 ? (
          <div className="flex items-center gap-2 rounded-md border p-3 text-sm text-muted-foreground">
            <Info className="size-4" />
            Nenhuma ocorrência registrada para este caso.
          </div>
        ) : (
          <div className="relative">
            <div className="space-y-5">
              {itensVisiveis.map((it, i) => (
                <div
                  key={it.id}
                  className="grid grid-cols-[auto_1fr] gap-3 relative"
                >
                  <div className="relative z-10 mt-1 size-3 rounded-full bg-primary ring-2 ring-background" />
                  {i < itensVisiveis.length - 1 && (
                    <div className="absolute left-[6px] top-3 bottom-[-20px] w-0.5 bg-border" />
                  )}
                  <div className="rounded-lg border p-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
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
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
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

            {itens.length > 3 && (
              <div className="mt-4 flex justify-center">
                {mostrarTodos ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMostrarTodos(false)}
                  >
                    Ver menos
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMostrarTodos(true)}
                  >
                    Ver todas
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
