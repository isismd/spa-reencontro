import HeroBanner from "@/assets/hero-banner.webp";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

type HeroProps = {
  desaparecidos?: number;
  encontrados?: number;
  className?: string;
  loading?: boolean;
};

export default function Hero({
  desaparecidos,
  encontrados,
  className = "",
  loading = false,
}: HeroProps) {
  return (
    <section
      className={`relative h-80 w-full overflow-hidden rounded-2xl sm:h-96 ${className}`}
      style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      role="img"
      aria-label="Banner ilustrativo da plataforma Reencontro"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent sm:via-black/30" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex h-full w-full items-end">
        <div className="w-full space-y-4 px-6 pb-6 text-white sm:px-8 sm:pb-10">
          <h1 className="text-3xl font-bold drop-shadow-sm md:text-4xl">
            Sua ajuda pode fazer a diferença.
          </h1>

          <p className="text-base leading-relaxed font-light text-white/95 sm:max-w-3xl md:text-lg">
            Use nossa plataforma para consultar registros de pessoas
            desaparecidas ou já localizadas. Qualquer informação pode{" "}
            <strong className="font-semibold">transformar a vida</strong> de uma
            família.
          </p>

          <div className="flex flex-wrap gap-6 pt-1 text-base">
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-destructive size-5" />
              <span className="text-white/90">
                Desaparecidos:{" "}
                {loading ? (
                  <Skeleton className="inline-block h-4 w-10 align-middle" />
                ) : (
                  <strong className="text-destructive">{desaparecidos}</strong>
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-emerald-400" />
              <span className="text-white/90">
                Localizados:{" "}
                {loading ? (
                  <Skeleton className="inline-block h-4 w-10 align-middle" />
                ) : (
                  <strong className="text-emerald-300">{encontrados}</strong>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
