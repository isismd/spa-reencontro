import { useEffect } from "react";
import EstatisticoCards from "@/components/pessoa/EstatisticoCards";
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
    estatistico,
    loadingEstatistico,
    fetchEstatistico,
  } = usePessoasStore();

  useEffect(() => {
    fetch();
    fetchEstatistico();
  }, [fetch, filtros, page, perPage]);

  function handleChangeFilters(next: PessoasFiltro) {
    setPage(1);
    setFiltros(next);
  }

  return (
    <section className="space-y-6">
      <EstatisticoCards
        loading={loadingEstatistico}
        desaparecidos={estatistico?.quantPessoasDesaparecidas ?? 0}
        encontrados={estatistico?.quantPessoasEncontradas ?? 0}
        total={
          (estatistico?.quantPessoasDesaparecidas ?? 0) +
          (estatistico?.quantPessoasEncontradas ?? 0)
        }
      />

      <h1 className="text-xl my-0 font-semibold">
        Sua ajuda pode fazer a diferença.
      </h1>
      <h2 className="mb-0 text-gray-600 dark:text-gray-400">
        Use nossa plataforma para consultar registros de pessoas desaparecidas
        ou já localizadas.
      </h2>
      <h2 className="mt-0 text-gray-600 dark:text-gray-400">
        Qualquer informação pode fazer a diferença na vida de uma família.
      </h2>

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
