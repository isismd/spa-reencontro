import { Button } from "@/components/ui/button";
import { Share2, Download, Plus } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface DetalhesHeaderProps {
  nome?: string;
  id?: number;
  dtDesaparecimento?: string;
  isLocalizado?: boolean;
  onShare: () => void;
  onBaixarCartaz: () => void;
  onAddInfo: () => void;
  cartazUrl?: string;
}

export default function DetalhesHeader({
  nome,
  id,
  dtDesaparecimento,
  isLocalizado,
  onShare,
  onBaixarCartaz,
  onAddInfo,
  cartazUrl,
}: DetalhesHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          {nome ?? "Detalhes da Pessoa"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {id ? `Ocorrência #${String(id)}` : "—"} • Registrado em{" "}
          {formatDate(dtDesaparecimento)}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <Button
          className="w-full sm:w-auto gap-2"
          size="sm"
          variant="outline"
          onClick={onShare}
        >
          <Share2 className="size-4" />
          Compartilhar
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="w-full sm:w-auto gap-2"
          onClick={onBaixarCartaz}
          disabled={!cartazUrl}
        >
          <Download className="size-4" />
          Baixar cartaz
        </Button>
        {!isLocalizado && (
          <Button
            className="w-full sm:w-auto gap-2"
            size="sm"
            variant="default"
            onClick={onAddInfo}
          >
            <Plus className="size-4" />
            Adicionar Informações
          </Button>
        )}
      </div>
    </div>
  );
}
