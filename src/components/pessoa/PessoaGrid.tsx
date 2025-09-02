import EmptyState from "@/components/feedback/EmptyState";
import PessoaCard from "@/components/pessoa/PessoaCard";
import PessoaSkeleton from "@/components/pessoa/PessoaSkeleton";
import { Button } from "../ui/button";

type Props<T> = {
  items: T[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  renderItem?: (item: T) => React.ReactNode;
};

export default function PessoaGrid<T extends { id: number | string }>({
  items,
  loading,
  error,
  onRetry,
  renderItem,
}: Props<T>) {
  if (error) {
    return (
      <EmptyState
        title="Erro ao carregar os dados"
        action={
          onRetry ? (
            <Button
              variant="outline"
              onClick={onRetry}
              className="hover:bg-muted rounded-md border px-3 py-1 text-sm"
            >
              Tentar novamente
            </Button>
          ) : null
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
      {items.map((p: any) =>
        renderItem ? renderItem(p) : <PessoaCard key={p.id} p={p} />,
      )}
    </div>
  );
}
