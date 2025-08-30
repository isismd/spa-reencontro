import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

interface DetalhesFotoProps {
  foto: string;
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
  return (
    <Card className="overflow-hidden py-0">
      <div className="relative">
        <img
          src={foto}
          alt="Pessoa"
          className="block aspect-[3/4] w-full object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-4">
          <div
            className={`rounded-lg px-4 py-2 text-center text-sm text-white shadow-sm backdrop-blur ${isLocalizado ? "bg-emerald-600/90" : "bg-destructive/90"}`}
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
