import { useEffect, useCallback } from "react";
import { usePessoasStore } from "@/stores/pessoasStore";
import PessoaGrid from "@/components/pessoa/PessoaGrid";
import PaginationControls from "@/components/pagination/PaginationControls";

export default function Home() {
  const { itens, loading, error, fetch, page, perPage, setPage, totalPages } =
    usePessoasStore();

  const load = useCallback(() => fetch(), [fetch, page, perPage]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <section className="space-y-6">
        <PessoaGrid
          items={itens}
          loading={loading}
          error={error}
          onRetry={load}
        />

        <PaginationControls
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </section>
    </div>
  );
}
