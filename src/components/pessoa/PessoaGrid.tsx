import EmptyState from "@/components/feedback/EmptyState";
import PessoaCard from "@/components/pessoa/PessoaCard";
import PessoaSkeleton from "@/components/pessoa/PessoaSkeleton";
import type { PessoaDTO } from "@/interfaces/IPessoas";
import { enableMocks } from "@/mocks/mockController";
import { FlaskConical, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

type Props<T> = {
  items: T[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  renderItem?: (item: T) => React.ReactNode;
};

export default function PessoaGrid<T extends PessoaDTO>({
  items,
  loading,
  error,
  onRetry,
  renderItem,
}: Props<T>) {
  const handleUseMock = async () => {
    await enableMocks();
    window.location.reload();
  };

  if (error) {
    return (
      <EmptyState
        title="Erro ao carregar os dados"
        action={
          <>
            {onRetry && (
              <Button
                variant="outline"
                onClick={onRetry}
                className="hover:bg-muted rounded-md border px-3 py-1 text-sm"
              >
                <RotateCcw className="inline" />
                Tentar novamente
              </Button>
            )}
            <Button
              onClick={handleUseMock}
              className="rounded-md px-3 py-1 text-sm"
            >
              <FlaskConical className="inline" />
              Usar dados de demonstração
            </Button>
          </>
        }
      />
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <PessoaSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!items?.length) {
    return (
      <EmptyState
        title="Sem resultados"
        subtitle="Nenhuma pessoa encontrada."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p: T) =>
        renderItem ? renderItem(p) : <PessoaCard key={p.id} p={p} />,
      )}
    </div>
  );
}
