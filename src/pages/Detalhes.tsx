import DetalhesDesaparecimento from "@/components/detalhes/DetalhesDesaparecimento";
import DetalhesFoto from "@/components/detalhes/DetalhesFoto";
import DetalhesHeader from "@/components/detalhes/DetalhesHeader";
import DetalhesInfoPessoal from "@/components/detalhes/DetalhesInfoPessoal";
import DetalhesSkeleton from "@/components/detalhes/DetalhesSkeleton";
import EmptyState from "@/components/feedback/EmptyState";
import AdicionarInformacoesCTA from "@/components/ocorrencias/AdicionarInformacoesCTA";
import OcorrenciasTimeline from "@/components/ocorrencias/OcorrenciasTimeline";
import StatusPessoa from "@/components/status/StatusPessoa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useOcorrenciaStore } from "@/stores/ocorrenciaStore";
import { usePessoasStore } from "@/stores/pessoasStore";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

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
  const navigate = useNavigate();

  const {
    pessoaSelecionada: p,
    loadingById,
    fetchById,
    error: errorPessoa,
  } = usePessoasStore();

  const {
    informacoes,
    loading: loadingOcorrencias,
    error: errorOcorrencias,
    setOcorrenciaId,
    fetch,
    reset,
  } = useOcorrenciaStore();

  useEffect(() => {
    reset();
  }, [id, reset]);

  useEffect(() => {
    if (!id) return;
    fetchById(Number(id));
  }, [id, fetchById]);

  useEffect(() => {
    const ocoId = p?.ultimaOcorrencia?.ocoId;
    if (!ocoId) {
      reset();
      return;
    }
    setOcorrenciaId(ocoId);
    fetch();
  }, [p?.ultimaOcorrencia?.ocoId, setOcorrenciaId, fetch, reset]);

  const dias = useMemo(
    () => diffDays(p?.ultimaOcorrencia?.dtDesaparecimento),
    [p],
  );

  const isLocalizado = !!p?.ultimaOcorrencia?.dataLocalizacao;
  const foto = p?.urlFoto;
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
    } catch (error) {
      toast.error("Erro ao compartilhar");
    }
  }

  function handleBaixarCartaz() {
    if (!cartazUrl) return;
    window.open(cartazUrl, "_blank", "noopener,noreferrer");
  }

  function handleAddInfo() {
    navigate(`/detalhes/${p!.id}/informar`);
  }

  if (loadingById) return <DetalhesSkeleton />;

  if (!loadingById && (errorPessoa || !p)) {
    return (
      <EmptyState
        title="Erro ao carregar os dados da pessoa"
        subtitle="Não foi possível carregar os detalhes da pessoa. Tente novamente mais tarde."
        action={
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="hover:bg-muted rounded-md border px-3 py-1 text-sm"
          >
            Voltar para a página inicial
          </Button>
        }
      />
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl space-y-6 px-4 sm:px-6">
      <Button
        onClick={() => navigate("/")}
        className="mb-4 pt-2"
        variant="link"
      >
        <ArrowLeft />
        Voltar para a página inicial
      </Button>

      <DetalhesHeader
        nome={p?.nome}
        id={p?.ultimaOcorrencia?.ocoId}
        dtDesaparecimento={p?.ultimaOcorrencia?.dtDesaparecimento}
        isLocalizado={isLocalizado}
        onShare={handleShare}
        onBaixarCartaz={handleBaixarCartaz}
        cartazUrl={cartazUrl}
        onAddInfo={handleAddInfo}
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
          <StatusPessoa
            isLocalizado={isLocalizado}
            encontradoVivo={p?.ultimaOcorrencia?.encontradoVivo}
          />

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
              p?.ultimaOcorrencia?.localDesaparecimentoConcat
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

          {!isLocalizado &&
            (errorOcorrencias ? (
              <EmptyState
                title="Erro ao carregar as ocorrências"
                subtitle="Não foi possível carregar as ocorrências. Tente novamente mais tarde."
              />
            ) : (
              <OcorrenciasTimeline
                informacoes={informacoes}
                loading={loadingOcorrencias}
                error={errorOcorrencias}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
