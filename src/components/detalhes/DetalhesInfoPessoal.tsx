import { Card, CardContent } from "@/components/ui/card";

interface DetalhesInfoPessoalProps {
  idade?: number;
  sexo?: string;
}

export default function DetalhesInfoPessoal({
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
    },
    {
      label: "Gênero",
      value: generoMap[sexo ?? ""] ?? "Não informado",
    },
  ];

  return (
    <Card className="gap-0">
      <CardContent className="p-0">
        <dl className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x">
          {rows.map(({ label, value }, i) => (
            <div key={i} className="p-4">
              <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-1 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
