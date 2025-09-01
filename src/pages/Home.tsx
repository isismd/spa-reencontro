import { useEffect } from "react";
import PessoaGrid from "@/components/pessoa/PessoaGrid";
import PessoaCardSkeleton from "@/components/pessoa/PessoaCardSkeleton";
import PaginationControls from "@/components/pagination/PaginationControls";
import { usePessoasStore } from "@/stores/pessoasStore";
import Filters from "@/components/filters/Filter";
import type { PessoasFiltro } from "@/interfaces/IPessoas";
import Hero from "@/components/layout/Hero";

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
    estatistico,
    fetchEstatistico,
    loadingEstatistico,
  } = usePessoasStore();

  useEffect(() => {
    fetch();
  }, [fetch, filtros, page, perPage]);

  useEffect(() => {
    fetchEstatistico();
  }, []);

  function handleChangeFilters(next: PessoasFiltro) {
    setPage(1);
    setFiltros(next);
  }

  return (
    <section className="space-y-6">
      <Hero
        desaparecidos={estatistico?.quantPessoasDesaparecidas ?? 0}
        encontrados={estatistico?.quantPessoasEncontradas ?? 0}
        loading={loadingEstatistico}
      />

      <h1 className="text-lg font-semibold my-0">
        Juntos podemos Reencontrar.
      </h1>
      <h2 className="text-sm md:text-base text-muted-foreground">
        Cada detalhe conta. Utilize os filtros para refinar a pesquisa.
      </h2>

      <Filters value={filtros} onChange={handleChangeFilters} />
      {loading ? (
        <PessoaCardSkeleton />
      ) : (
        <>
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
        </>
      )}
    </section>
  );
}
