import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import HeroBanner from "@/assets/hero-banner.webp";

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
      className={`relative w-full h-80 sm:h-96 overflow-hidden rounded-2xl ${className}`}
      style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      role="img"
      aria-label="Banner ilustrativo da plataforma Reencontro"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 sm:via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex h-full w-full items-end">
        <div className="w-full px-6 sm:px-8 pb-6 sm:pb-10 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-sm">
            Sua ajuda pode fazer a diferença.
          </h1>

          <p className="text-base md:text-lg font-light sm:max-w-3xl leading-relaxed text-white/95">
            Use nossa plataforma para consultar registros de pessoas
            desaparecidas ou já localizadas. Qualquer informação pode{" "}
            <strong className="font-semibold">transformar a vida</strong> de uma
            família.
          </p>

          <div className="flex flex-wrap gap-6 pt-1 text-base">
            <div className="flex items-center gap-2">
              <AlertTriangle className="size-5 text-primary" />
              <span className="text-white/90">
                Desaparecidos:{" "}
                {loading ? (
                  <Skeleton className="w-10 h-4 inline-block align-middle" />
                ) : (
                  <strong className="text-primary">{desaparecidos}</strong>
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-emerald-400" />
              <span className="text-white/90">
                Localizados:{" "}
                {loading ? (
                  <Skeleton className="w-10 h-4 inline-block align-middle" />
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
