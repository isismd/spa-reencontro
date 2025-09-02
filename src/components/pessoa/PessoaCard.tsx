import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { PessoaDTO } from "@/interfaces/IPessoas";
import { capitalizeWords, formatDate } from "@/lib/utils";
import {
  CalendarCheck,
  CalendarSearch,
  ImageOff,
  MapPin,
  User2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StatusBadge } from "../status/StatusBadge";

interface PessoaCardProps {
  p: PessoaDTO;
}

export default function PessoaCard({ p }: PessoaCardProps) {
  const [err, setErr] = useState(false);

  const hasFoto = !!p.urlFoto && !err;

  return (
    <Link to={`/detalhes/${p.id}`}>
      <Card className="relative h-96 overflow-hidden rounded-2xl py-0 shadow-sm transition hover:scale-95 hover:shadow-lg">
        {hasFoto ? (
          <img
            src={p.urlFoto!}
            alt={p.nome ?? "Sem Nome"}
            loading="lazy"
            className="h-full w-full object-cover object-center transition"
            draggable={false}
            onError={() => {
              setErr(true);
            }}
          />
        ) : (
          <div className="flex h-72 items-center justify-center">
            <ImageOff className="h-16 w-16 opacity-20" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute top-2 right-2">
          <StatusBadge localizado={!!p.ultimaOcorrencia?.dataLocalizacao} />
        </div>

        <CardContent className="absolute bottom-0 w-full p-4 text-white">
          <CardTitle className="text-lg font-semibold">
            {capitalizeWords(p.nome ?? "Sem Nome")}
          </CardTitle>

          <div className="flex items-center gap-2 text-sm opacity-90">
            <User2 className="h-4 w-4" />
            <span>{p.idade} anos</span>
          </div>

          <div className="flex items-center gap-2 text-sm opacity-90">
            <MapPin className="h-4 w-4" />
            <span>{p.ultimaOcorrencia?.localDesaparecimentoConcat ?? "—"}</span>
          </div>

          {p.ultimaOcorrencia?.dtDesaparecimento && (
            <div className="flex items-center gap-2 text-sm opacity-90">
              {p.ultimaOcorrencia?.dataLocalizacao ? (
                <>
                  <CalendarCheck className="h-4 w-4" />
                  Localizado em {formatDate(p.ultimaOcorrencia.dataLocalizacao)}
                </>
              ) : (
                <>
                  <CalendarSearch className="h-4 w-4" />
                  Desde {formatDate(p.ultimaOcorrencia.dtDesaparecimento)}
                </>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
