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
  const [err, setErr] = useState(false);

  const hasFoto = !!p.urlFoto && !err;

  return (
    <Link to={`/detalhes/${p.id}`}>
      <Card className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition h-96 py-0">
        {hasFoto ? (
          <img
            src={p.urlFoto!}
            alt={p.nome ?? "Sem Nome"}
            className="w-full h-full object-cover object-center transition "
            draggable={false}
            onError={() => {
              setErr(true);
            }}
          />
        ) : (
          <div className="h-72 flex items-center justify-center">
            <ImageOff className="w-16 h-16 opacity-20" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute top-2 right-2">
          {p.ultimaOcorrencia?.dataLocalizacao ? (
            <Badge className="bg-green-500 text-white flex items-center gap-1">
              <Check className="w-4 h-4" /> Localizado
            </Badge>
          ) : (
            <Badge className="bg-red-500 text-white flex items-center gap-1">
              <TriangleAlert className="w-4 h-4" /> Desaparecido
            </Badge>
          )}
        </div>

        <CardContent className="absolute bottom-0 w-full p-4 text-white">
          <CardTitle className="text-lg font-semibold">
            {capitalizeWords(p.nome ?? "Sem Nome")}
          </CardTitle>

          <div className="flex items-center gap-2 text-sm opacity-90">
            <User2 className="w-4 h-4" />
            <span>{p.idade} anos</span>
          </div>

          <div className="flex items-center gap-2 text-sm opacity-90">
            <MapPin className="w-4 h-4" />
            <span>{p.ultimaOcorrencia?.localDesaparecimentoConcat ?? "—"}</span>
          </div>

          {p.ultimaOcorrencia?.dtDesaparecimento && (
            <div className="flex items-center gap-2 text-sm opacity-90">
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
