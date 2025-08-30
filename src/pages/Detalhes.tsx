import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { usePessoasStore } from "@/stores/pessoasStore";
import { Separator } from "@/components/ui/separator";
import DetalhesHeader from "@/components/detalhes/DetalhesHeader";
import DetalhesSkeleton from "@/components/detalhes/DetalhesSkeleton";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DetalhesFoto from "@/components/detalhes/DetalhesFoto";
import DetalhesInfoPessoal from "@/components/detalhes/DetalhesInfoPessoal";
import DetalhesDesaparecimento from "@/components/detalhes/DetalhesDesaparecimento";
import OcorrenciasTimeline from "@/components/ocorrencias/OcorrenciasTimeline";
import AdicionarInformacoesCTA from "@/components/ocorrencias/AdicionarInformacoesCTA";
import { ArrowLeft } from "lucide-react";

function diffDays(fromIso?: string) {
  if (!fromIso) return null;
  const from = new Date(fromIso);
  if (Number.isNaN(from.getTime())) return null;
  const today = new Date();
  const ms = today.getTime() - from.getTime();
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
}

export default function Detalhes() {
  const { id } = useParams<{ id: string }>();
  const {
    pessoaSelecionada: p,
    loadingById,
    fetchById,
    error,
  } = usePessoasStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchById(Number(id));
  }, [id]);

  const dias = useMemo(
    () => diffDays(p?.ultimaOcorrencia?.dtDesaparecimento),
    [p],
  );

  const isLocalizado = !!p?.ultimaOcorrencia?.dataLocalizacao;

  const foto = p?.urlFoto || "https://placehold.co/600x800?text=Sem+Foto";
  const cartazUrl = p?.ultimaOcorrencia?.listaCartaz?.[0]?.urlCartaz;

  async function handleShare() {
    const url = window.location.href;
    const title = p?.nome ?? "Pessoa";
    const text = `Informações sobre ${title} no Reencontro`;
    try {
      if (navigator.share) await navigator.share({ title, text, url });
      else {
        await navigator.clipboard.writeText(url);
        toast.success("Link copiado para a área de transferência.");
      }
    } catch {}
  }

  function handleBaixarCartaz() {
    if (!cartazUrl) return;
    window.open(cartazUrl, "_blank", "noopener,noreferrer");
  }

  function handleAddInfo() {
    toast.info("Funcionalidade de adicionar informações não implementada.");
  }

  if (loadingById) {
    return <DetalhesSkeleton />;
  }
  return (
    <section className="mx-auto w-full max-w-6xl space-y-6 p-4 sm:p-6">
      <Button onClick={() => navigate("/")} className="mb-4" variant="link">
        <ArrowLeft />
        Voltar para a página inicial
      </Button>
      <DetalhesHeader
        nome={p?.nome}
        id={p?.id}
        dtDesaparecimento={p?.ultimaOcorrencia?.dtDesaparecimento}
        isLocalizado={isLocalizado}
        onShare={handleShare}
        onBaixarCartaz={handleBaixarCartaz}
        cartazUrl={cartazUrl}
      />
      <Separator />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          <DetalhesFoto
            foto={foto}
            isLocalizado={isLocalizado}
            dias={dias}
            dataLocalizacao={p?.ultimaOcorrencia?.dataLocalizacao}
          />
          <DetalhesInfoPessoal idade={p?.idade} sexo={p?.sexo} />
          {isLocalizado ? null : (
            <AdicionarInformacoesCTA onAddInfo={handleAddInfo} />
          )}
        </div>
        <div className="space-y-6 lg:col-span-2">
          <DetalhesDesaparecimento
            ocoId={p?.ultimaOcorrencia?.ocoId}
            dtDesaparecimento={p?.ultimaOcorrencia?.dtDesaparecimento}
            localDesaparecimento={
              p?.ultimaOcorrencia?.localDesaparecimentoConcat
            }
            horarioDesaparecimento={p?.ultimaOcorrencia?.dtDesaparecimento}
            observacoes={p?.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.informacao?.trim()}
            vestimentas={p?.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido?.trim()}
            isLocalizado={isLocalizado}
            dataLocalizacao={p?.ultimaOcorrencia?.dataLocalizacao}
            encontradoVivo={p?.ultimaOcorrencia?.encontradoVivo}
            onAbrirMaps={
              !loadingById && p?.ultimaOcorrencia?.localDesaparecimentoConcat
                ? () => {
                    const q = encodeURIComponent(
                      p.ultimaOcorrencia!.localDesaparecimentoConcat!,
                    );
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${q}`,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }
                : undefined
            }
          />
          <OcorrenciasTimeline ocoId={p?.ultimaOcorrencia?.ocoId ?? null} />
        </div>
      </div>
      {!!error && (
        <p className="text-sm text-destructive">Erro ao carregar: {error}</p>
      )}
    </section>
  );
}
