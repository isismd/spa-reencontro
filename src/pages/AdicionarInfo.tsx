import BackLinkButton from "@/components/layout/BackLinkButton";
import AdicionarInformacoesForm, {
  type FormData,
} from "@/components/ocorrencias/AdicionarInformacoesForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useOcorrenciaStore } from "@/stores/ocorrenciaStore";
import { usePessoasStore } from "@/stores/pessoasStore";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function AdicionarInfoPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { pessoaSelecionada: p, fetchById } = usePessoasStore();
  const { postInformacao } = useOcorrenciaStore();

  useEffect(() => {
    if (!id) return;
    fetchById(Number(id));
  }, [id, fetchById]);

  async function onSubmit(values: FormData) {
    try {
      await postInformacao({
        ocoId: Number(p?.ultimaOcorrencia?.ocoId),
        informacao: values.informacao.trim(),
        data: values.data,
        descricao: values.descricao?.trim() || "",
        files: values.files,
      });

      toast.success("Informação enviada. Obrigado por ajudar!");
      navigate(`/detalhes/${id}`);
    } catch (e: any) {
      toast.error(e?.message ?? "Erro ao enviar informação.");
      throw e;
    }
  }

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <section className="mx-auto w-full max-w-6xl space-y-6 px-4 sm:px-6">
      <BackLinkButton to={`/detalhes/${id}`}>
        Voltar para Página de Detalhes
      </BackLinkButton>

      <Card>
        <CardHeader>
          <CardTitle>Adicionar informações</CardTitle>
        </CardHeader>
        <CardContent>
          <AdicionarInformacoesForm
            onSubmit={onSubmit}
            onCancel={handleCancel}
          />
        </CardContent>
      </Card>
    </section>
  );
}
