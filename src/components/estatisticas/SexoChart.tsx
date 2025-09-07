import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Info } from "lucide-react";
import { useMemo } from "react";
import {
  Cell,
  Pie,
  PieChart as RePieChart,
  ResponsiveContainer,
} from "recharts";

export type SexoChartData = { name: "Feminino" | "Masculino"; value: number }[];

interface SexoChartProps {
  data: SexoChartData;
  loading: boolean;
  onSelect?(sexo: "FEMININO" | "MASCULINO"): void;
}

const COLORS: Record<"Feminino" | "Masculino", string> = {
  Feminino: "var(--chart-1)",
  Masculino: "var(--chart-2)",
};

export default function SexoChart({ data, loading, onSelect }: SexoChartProps) {
  const total = useMemo(
    () => (data ?? []).reduce((acc, d) => acc + (Number(d.value) || 0), 0),
    [data],
  );

  return (
    <Card>
      <CardHeader className="flex items-center justify-between space-y-0">
        <CardTitle>Desaparecidos por sexo</CardTitle>
      </CardHeader>

      <CardContent className="sm:h-80">
        {loading ? (
          <div className="bg-muted/40 h-full animate-pulse rounded-xl" />
        ) : total === 0 ? (
          <div className="text-muted-foreground flex h-full flex-col items-center justify-center gap-2 rounded-xl border">
            <Info className="size-5" />
            <p className="text-sm">Sem dados para exibir.</p>
          </div>
        ) : (
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-5">
            <div className="col-span-3">
              <ChartContainer
                className="h-full w-full"
                config={{ value: { label: "Total" } }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart role="img" aria-label="Distribuição por sexo">
                    <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      innerRadius="60%"
                      outerRadius="85%"
                      paddingAngle={4}
                      startAngle={90}
                      endAngle={-270}
                      isAnimationActive
                      labelLine={false}
                    >
                      {data.map((d, i) => (
                        <Cell
                          key={i}
                          fill={COLORS[d.name]}
                          aria-label={`${d.name}: ${d.value}`}
                        />
                      ))}
                    </Pie>

                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />

                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-foreground"
                      style={{ fontWeight: 700, fontSize: "1rem" }}
                    >
                      {total}
                    </text>
                    <text
                      x="50%"
                      y="50%"
                      dy="18"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-muted-foreground"
                      style={{ fontSize: "0.75rem" }}
                    >
                      total
                    </text>
                  </RePieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            <div className="col-span-2">
              <div className="grid gap-3">
                {data.map((d) => {
                  const pct =
                    total > 0 ? Math.round((Number(d.value) * 100) / total) : 0;
                  return (
                    <button
                      key={d.name}
                      type="button"
                      onClick={() => {
                        if (!onSelect) return;
                        if (d.name === "Feminino") onSelect("FEMININO");
                        if (d.name === "Masculino") onSelect("MASCULINO");
                      }}
                      className="hover:bg-accent/50 flex items-center justify-between rounded-lg border p-3 text-left transition"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block size-3 rounded-full"
                          style={{ background: COLORS[d.name] }}
                          aria-hidden
                        />
                        <span className="text-sm font-medium">{d.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{d.value}</div>
                        <div className="text-muted-foreground text-xs">
                          {pct}%
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
