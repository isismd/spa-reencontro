import { useState } from "react";
import type { PessoaDTO } from "@/interfaces/IPessoas";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ImageOff, TriangleAlert } from "lucide-react";

interface PessoaCardProps {
  p: PessoaDTO;
}

export default function PessoaCard({ p }: PessoaCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState(false);

  const fotoUrl = p.urlFoto ?? "";
  const nome = p.nome ?? "Sem Nome";
  const sexoIdade = `${p.sexo} • ${p.idade} anos`;
  const localDesaparecimento =
    p.ultimaOcorrencia?.localDesaparecimentoConcat ?? "—";

  const hasFoto = !!p.urlFoto && !err;

  return (
    <Card className="flex flex-col p-0 overflow-hidden gap-2">
      <div className="relative w-full h-80 bg-muted">
        <div className="absolute top-2 right-2">
          {p.ultimaOcorrencia?.dataLocalizacao ? (
            <Badge
              variant="secondary"
              className="bg-green-500 text-white dark:bg-green-600"
            >
              <Check />
              Localizado
            </Badge>
          ) : (
            <Badge variant="destructive" className="dark:bg-red-500">
              <TriangleAlert />
              Desaparecido
            </Badge>
          )}
        </div>
        {hasFoto ? (
          <img
            src={fotoUrl}
            alt={nome}
            className={`w-full h-full object-cover object-center ${loaded ? "" : "hidden"}`}
            draggable={false}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setErr(true);
              setLoaded(true);
            }}
          />
        ) : (
          <div className="h-full absolute inset-0 flex items-center justify-center">
            <ImageOff className="w-16 h-16 opacity-20" aria-label="Sem foto" />
          </div>
        )}
      </div>
      <CardContent className="flex flex-col text-left gap-1 py-4 px-2">
        <CardTitle className="text-lg font-semibold text-left w-full mb-1 capitalize">
          {nome}
        </CardTitle>
        <p className="text-sm opacity-75 text-left">{sexoIdade}</p>
        <p className="text-sm text-left">{localDesaparecimento}</p>
      </CardContent>
    </Card>
  );
}
