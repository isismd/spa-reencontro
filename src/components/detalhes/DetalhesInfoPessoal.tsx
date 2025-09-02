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
    <Card className="gap-0 py-2">
      <CardContent className="p-0">
        <dl className="grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {rows.map(({ label, value }, i) => (
            <div key={i} className="p-4">
              <dt className="text-muted-foreground flex items-center gap-2 text-sm">
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
