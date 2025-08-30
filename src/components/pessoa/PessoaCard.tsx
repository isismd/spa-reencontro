import { useState } from "react";
import type { PessoaDTO } from "@/interfaces/IPessoas";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ImageOff,
  TriangleAlert,
  MapPin,
  Calendar,
  User2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { capitalizeWords, formatDate } from "@/lib/utils";

interface PessoaCardProps {
  p: PessoaDTO;
}

export default function PessoaCard({ p }: PessoaCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState(false);

  const hasFoto = !!p.urlFoto && !err;

  return (
    <Link to={`/detalhes/${p.id}`}>
      <Card className="flex flex-col p-0 overflow-hidden gap-2 shadow-sm hover:shadow-lg transition">
        <div className="relative w-full h-72 bg-muted">
          <div className="absolute top-2 right-2">
            {p.ultimaOcorrencia?.dataLocalizacao ? (
              <Badge
                variant="secondary"
                className="bg-green-500 text-white dark:bg-green-600 flex items-center gap-1"
              >
                <Check className="w-4 h-4" />
                Localizado
              </Badge>
            ) : (
              <Badge
                variant="destructive"
                className="dark:bg-red-500 flex items-center gap-1"
              >
                <TriangleAlert className="w-4 h-4" />
                Desaparecido
              </Badge>
            )}
          </div>

          {hasFoto ? (
            <img
              src={p.urlFoto!}
              alt={p.nome ?? "Sem Nome"}
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
              <ImageOff
                className="w-16 h-16 opacity-20"
                aria-label="Sem foto"
              />
            </div>
          )}
        </div>

        <CardContent className="flex flex-col text-left gap-2 py-4 px-3">
          <CardTitle className="text-base font-semibold capitalize">
            {capitalizeWords(p.nome ?? "Sem Nome")}
          </CardTitle>

          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <User2 className="w-4 h-4" />
            <span>
              {capitalizeWords(p.sexo)} • {p.idade} anos
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <MapPin className="w-4 h-4" />
            <span>{p.ultimaOcorrencia?.localDesaparecimentoConcat ?? "—"}</span>
          </div>

          {p.ultimaOcorrencia?.dtDesaparecimento && (
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <Calendar className="w-4 h-4" />
              <span>
                Desde {formatDate(p.ultimaOcorrencia.dtDesaparecimento)}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
