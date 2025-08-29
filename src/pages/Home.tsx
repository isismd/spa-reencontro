import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePessoasStore } from "@/stores/pessoasStore";
import PessoaGrid from "@/components/pessoa/PessoaGrid";
import PaginationControls from "@/components/pagination/PaginationControls";

export default function Home() {
  const {
    itens,
    loading,
    error,
    fetch,
    page,
    perPage,
    setPage,
    totalPages,
    setFiltros,
    filtros,
  } = usePessoasStore();

  const [search, setSearch] = useState(filtros.nome ?? "");
  const [status, setStatus] = useState<"DESAPARECIDO" | "LOCALIZADO" | "ALL">(
    filtros.status ?? "ALL",
  );

  useEffect(() => {
    setFiltros({ nome: search, status: status === "ALL" ? undefined : status });
  }, [search, status, setFiltros]);

  useEffect(() => {
    fetch();
  }, [fetch, filtros, page, perPage]);

  return (
    <div>
      <section className="space-y-6">
        <div className="w-full mb-4 flex gap-4">
          <Input
            placeholder="Buscar por nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            value={status}
            onValueChange={(value) =>
              setStatus(value as "DESAPARECIDO" | "LOCALIZADO" | "ALL")
            }
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrar status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todos</SelectItem>
              <SelectItem value="DESAPARECIDO">Desaparecido</SelectItem>
              <SelectItem value="LOCALIZADO">Localizado</SelectItem>
            </SelectContent>
          </Select>
        </div>

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
        />
      </section>
    </div>
  );
}
