import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Users } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type EstatisticoCardsProps = {
  desaparecidos: number;
  encontrados: number;
  total: number;
  loading?: boolean;
};

export default function EstatisticoCards({
  desaparecidos,
  encontrados,
  total,
  loading = false,
}: EstatisticoCardsProps) {
  const base =
    "overflow-hidden rounded-2xl border-0 shadow-sm ring-1 ring-black/5 transition  py-2";
  const chip = "grid size-12 place-items-center rounded-xl";
  const number = "text-2xl font-bold leading-none mt-1";

  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-3">
      <Card className={base}>
        <CardContent className="flex items-center gap-4 p-5">
          <div
            className={`${chip} bg-red-50 text-red-600 ring-1 ring-red-100 dark:bg-red-500/10 dark:text-red-300 dark:ring-red-900/40`}
          >
            <AlertTriangle className="size-5" />
          </div>
          <div className="flex-1">
            <span className="text-sm text-muted-foreground">Desaparecidos</span>
            {loading ? (
              <Skeleton className="mt-2 h-7 w-10 rounded-md" />
            ) : (
              <div className={`${number} text-red-600 dark:text-red-400`}>
                {desaparecidos}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className={base}>
        <CardContent className="flex items-center gap-4 p-5">
          <div
            className={`${chip} bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-900/40`}
          >
            <CheckCircle2 className="size-5" />
          </div>
          <div className="flex-1">
            <span className="text-sm text-muted-foreground">Localizados</span>
            {loading ? (
              <Skeleton className="mt-2 h-7 w-10 rounded-md" />
            ) : (
              <div
                className={`${number} text-emerald-600 dark:text-emerald-400`}
              >
                {encontrados}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className={base}>
        <CardContent className="flex items-center gap-4 p-5">
          <div
            className={`${chip} bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-900/40`}
          >
            <Users className="size-5" />
          </div>
          <div className="flex-1">
            <span className="text-sm text-muted-foreground">Total</span>
            {loading ? (
              <Skeleton className="mt-2 h-7 w-10 rounded-md" />
            ) : (
              <div className={`${number} text-indigo-600 dark:text-indigo-400`}>
                {total}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
