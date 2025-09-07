import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Info } from "lucide-react";
import { useMemo } from "react";
import {
  Bar,
  CartesianGrid,
  BarChart as ReBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export type Bucket = { label: string; inicio?: number; fim?: number };

export const BUCKETS: Bucket[] = [
  { label: "0-12", inicio: 0, fim: 12 },
  { label: "13-17", inicio: 13, fim: 17 },
  { label: "18-29", inicio: 18, fim: 29 },
  { label: "30-44", inicio: 30, fim: 44 },
  { label: "45-59", inicio: 45, fim: 59 },
  { label: "60+", inicio: 60 },
];

type Props = {
  data: { label: string; value: number }[];
  loading?: boolean;
  title?: string;
  onSelect?(bucketLabel: string): void;
};

export default function IdadeChart({
  data,
  loading,
  title = "Desaparecidos por faixa etária",
  onSelect,
}: Props) {
  const colorBar = "var(--primary)";

  const total = useMemo(
    () => (data ?? []).reduce((acc, d) => acc + (Number(d.value) || 0), 0),
    [data],
  );

  const formatTick = (t: string) => (t.length > 6 ? t.replace(" ", "\n") : t);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex items-center justify-between space-y-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="h-72 sm:h-80">
        {loading ? (
          <div className="bg-muted/40 h-full animate-pulse rounded-xl" />
        ) : total === 0 ? (
          <div className="text-muted-foreground flex h-full flex-col items-center justify-center gap-2 rounded-xl border">
            <Info className="size-5" />
            <p className="text-sm">Sem dados para exibir.</p>
          </div>
        ) : (
          <ChartContainer
            className="h-full w-full"
            config={{
              value: { label: "Total" },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart
                data={data}
                margin={{ top: 8, right: 10, left: 0, bottom: 8 }}
                barCategoryGap={18}
              >
                <defs>
                  <pattern
                    id="agePattern"
                    patternUnits="userSpaceOnUse"
                    width={6}
                    height={6}
                  >
                    <rect width="6" height="6" fill={colorBar} opacity={0.9} />
                    <path d="M0 6 L6 0" stroke="white" opacity="0.06" />
                  </pattern>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={formatTick}
                />
                <YAxis
                  allowDecimals={false}
                  tickLine={false}
                  axisLine={false}
                />

                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      formatter={(value, _name): [string] => {
                        const v = Number(value) || 0;
                        const pct =
                          total > 0 ? ((v * 100) / total).toFixed(1) : "0.0";
                        return [`Total: ${v} (${pct}%)`];
                      }}
                    />
                  }
                />

                <Bar
                  dataKey="value"
                  radius={[8, 8, 0, 0]}
                  fill="url(#agePattern)"
                  onClick={(item) => {
                    if (!onSelect) return;
                    onSelect((item as any)?.label as string);
                  }}
                />
              </ReBarChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
