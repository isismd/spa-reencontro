import { useEffect } from "react";
import PessoaGrid from "@/components/pessoa/PessoaGrid";
import PaginationControls from "@/components/pagination/PaginationControls";
import { usePessoasStore } from "@/stores/pessoasStore";
import Filters from "@/components/filters/Filter";
import type { PessoasFiltro } from "@/interfaces/IPessoas";

export default function Home() {
  const {
    itens,
    loading,
    error,
    fetch,
    page,
    perPage,
    setPage,
    setPerPage,
    totalPages,
    filtros,
    setFiltros,
  } = usePessoasStore();

  useEffect(() => {
    fetch();
  }, [fetch, filtros, page, perPage]);

  function handleChangeFilters(next: PessoasFiltro) {
    setPage(1);
    setFiltros(next);
  }

  return (
    <section className="space-y-6">
      <Filters value={filtros} onChange={handleChangeFilters} />

      <PessoaGrid
        items={itens}
        loading={loading}
        error={error}
        onRetry={fetch}
      />

      <PaginationControls
        page={page}
        totalPages={totalPages}
        onChange={setPage}
        perPage={perPage}
        perPageOptions={[12, 24, 36, 48, 60]}
        onPerPageChange={(n) => {
          setPerPage(n);
          setPage(0);
        }}
      />
    </section>
  );
}
