import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { Download, Plus, Share2 } from "lucide-react";

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
        <p className="text-muted-foreground text-sm">
          {id ? `Ocorrência #${String(id)}` : "—"} • Registrado em{" "}
          {formatDate(dtDesaparecimento)}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <Button
          className="w-full gap-2 sm:w-auto"
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
          className="w-full gap-2 sm:w-auto"
          onClick={onBaixarCartaz}
          disabled={!cartazUrl}
        >
          <Download className="size-4" />
          Baixar cartaz
        </Button>
        {!isLocalizado && (
          <Button
            className="w-full gap-2 sm:w-auto"
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
