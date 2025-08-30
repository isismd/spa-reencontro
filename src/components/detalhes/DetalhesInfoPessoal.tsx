import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

interface DetalhesInfoPessoalProps {
  loading: boolean;
  idade?: number;
  sexo?: string;
}

export default function DetalhesInfoPessoal({
  loading,
  idade,
  sexo,
}: DetalhesInfoPessoalProps) {
  const generoMap: Record<string, string> = {
    MASCULINO: "Masculino",
    FEMININO: "Feminino",
  };

  const rows = [
    {
      label: "Idade",
      value: idade ? `${idade} anos` : "Não informado",
      skelW: "w-20",
    },
    {
      label: "Gênero",
      value: generoMap[sexo ?? ""] ?? "Não informado",
      skelW: "w-28",
    },
  ];

  return (
    <Card className="gap-0">
      <CardContent className="p-0">
        <dl className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x">
          {rows.map(({ label, value, skelW }, i) => (
            <div key={i} className="p-4">
              <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-1 font-medium">
                {loading ? <Skeleton className={`h-5 ${skelW}`} /> : value}
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
