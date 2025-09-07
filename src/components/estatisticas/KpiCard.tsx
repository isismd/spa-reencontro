import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type KpiCardProps = {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  hint?: string;
  loading?: boolean;
  variant?: "default" | "success" | "warning";
};

export default function KpiCard({
  title,
  value,
  icon,
  hint,
  loading,
  variant = "default",
}: KpiCardProps) {
  const tone =
    variant === "success"
      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-500/10"
      : variant === "warning"
        ? "text-red-600 dark:text-red-400 bg-red-100/80 dark:bg-red-500/10"
        : "text-primary bg-primary/10";

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm font-medium">
            {title}
          </span>
          <span
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-full",
              "text-lg",
              tone,
            )}
          >
            {icon}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>
        ) : (
          <>
            <div className="text-4xl font-bold tracking-tight">{value}</div>
            {hint ? (
              <p className="text-muted-foreground mt-2 text-sm">{hint}</p>
            ) : null}
          </>
        )}
      </CardContent>
    </Card>
  );
}
