import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { ImageOff } from "lucide-react";
import { useState } from "react";

interface DetalhesFotoProps {
  foto: string | undefined;
  isLocalizado: boolean;
  dias: number | null;
  dataLocalizacao?: string;
}

export default function DetalhesFoto({
  foto,
  isLocalizado,
  dias,
  dataLocalizacao,
}: DetalhesFotoProps) {
  const [err, setErr] = useState(false);
  const hasFoto = !!foto && !err;
  return (
    <Card className="overflow-hidden py-0">
      <div className="relative">
        {hasFoto ? (
          <img
            src={foto}
            alt="Pessoa"
            className="block aspect-[3/4] w-full object-cover transition"
            draggable={false}
            onError={() => setErr(true)}
          />
        ) : (
          <div className="flex aspect-[3/4] items-center justify-center">
            <ImageOff className="h-16 w-16 opacity-20" />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-4">
          <div
            className={`rounded-lg px-4 py-2 text-center text-sm text-white shadow-sm backdrop-blur ${isLocalizado ? "bg-emerald-600/90" : "bg-destructive/100"}`}
          >
            {isLocalizado ? (
              <>
                Localizado em{" "}
                <span className="font-semibold">
                  {formatDate(dataLocalizacao)}
                </span>
              </>
            ) : dias !== null ? (
              <>
                Desaparecido há <span className="font-semibold">{dias}</span>{" "}
                dias
              </>
            ) : (
              "Dias desde o desaparecimento: Não informado"
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
