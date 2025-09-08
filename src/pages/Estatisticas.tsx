import IdadeChart, { BUCKETS } from "@/components/estatisticas/IdadeChart";
import KpiCard from "@/components/estatisticas/KpiCard";
import SexoChart from "@/components/estatisticas/SexoChart";
import { Button } from "@/components/ui/button";
import type { PessoasFiltro } from "@/interfaces/IPessoas";
import { getPessoas } from "@/services/pessoasService";
import { usePessoasStore } from "@/stores/pessoasStore";
import {
  BarChart3,
  CheckCircle2,
  HeartHandshake,
  TriangleAlert,
  Users2,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Estatisticas() {
  const { fetch, estatistico, fetchEstatistico, loadingEstatistico } =
    usePessoasStore();

  const INITIAL_SEXO_DATA: { name: "Feminino" | "Masculino"; value: number }[] =
    [
      { name: "Feminino", value: 0 },
      { name: "Masculino", value: 0 },
    ];

  const [sexoData, setSexoData] =
    useState<{ name: "Feminino" | "Masculino"; value: number }[]>(
      INITIAL_SEXO_DATA,
    );
  const [loadingSexo, setLoadingSexo] = useState(true);

  const [idadeData, setIdadeData] = useState<
    { label: string; value: number }[]
  >([]);
  const [loadingIdade, setLoadingIdade] = useState(true);

  async function getTotal(filtro: PessoasFiltro) {
    const res = await getPessoas({ ...filtro, pagina: 0, porPagina: 1 });
    return res.totalElements ?? 0;
  }

  const fetchSexoTotals = async () => {
    setLoadingSexo(true);
    try {
      const [femResp, mascResp] = await Promise.all([
        getPessoas({
          sexo: "FEMININO",
          status: "DESAPARECIDO",
          pagina: 0,
          porPagina: 1,
        }),
        getPessoas({
          sexo: "MASCULINO",
          status: "DESAPARECIDO",
          pagina: 0,
          porPagina: 1,
        }),
      ]);
      setSexoData([
        { name: "Feminino", value: femResp.totalElements },
        { name: "Masculino", value: mascResp.totalElements },
      ]);
    } catch {
      setSexoData(INITIAL_SEXO_DATA);
    }
    setLoadingSexo(false);
  };

  async function fetchIdadeBuckets() {
    setLoadingIdade(true);
    try {
      const totals = await Promise.all(
        BUCKETS.map((b) =>
          getTotal({
            faixaIdadeInicial: b.inicio,
            faixaIdadeFinal: b.fim,
            status: "DESAPARECIDO",
          }),
        ),
      );
      setIdadeData(
        BUCKETS.map((b, i) => ({ label: b.label, value: totals[i] })),
      );
    } finally {
      setLoadingIdade(false);
    }
  }

  const localizadas = estatistico?.quantPessoasEncontradas ?? 0;
  const desaparecidas = estatistico?.quantPessoasDesaparecidas ?? 0;
  const total = useMemo(
    () => (localizadas || 0) + (desaparecidas || 0),
    [localizadas, desaparecidas],
  );

  useEffect(() => {
    fetchEstatistico();
    fetch();
    fetchSexoTotals();
    fetchIdadeBuckets();
  }, []);

  return (
    <section className="space-y-10">
      <div className="ring-border from-primary/10 relative overflow-hidden rounded-2xl bg-gradient-to-b to-transparent p-6 ring-1 sm:p-10">
        <div className="relative z-10 flex flex-col gap-4">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <BarChart3
              aria-hidden
              className="text-primary mr-2 inline size-6"
            />
            Estatísticas
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Acompanhe <strong>estatísticas consolidadas</strong> sobre pessoas
            desaparecidas e localizadas no sistema. Além dos totais, você
            encontrará <em>indicadores adicionais</em> que ajudam a compreender
            a dimensão do problema e o impacto das ações de busca.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="outline" asChild>
              <Link to="/como-ajudar">
                <HeartHandshake className="mr-2 inline size-4" />
                Como ajudar
              </Link>
            </Button>
          </div>
        </div>
        <div
          aria-hidden
          className="bg-primary/15 pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <KpiCard
          title="Localizadas"
          value={localizadas}
          icon={<CheckCircle2 className="size-5" />}
          hint="Pessoas já encontradas"
          loading={loadingEstatistico}
          variant="success"
        />
        <KpiCard
          title="Desaparecidas"
          value={desaparecidas}
          icon={<TriangleAlert className="size-5" />}
          hint="Registros ativos em apuração"
          loading={loadingEstatistico}
          variant="warning"
        />
        <KpiCard
          title="Total"
          value={total}
          icon={<Users2 className="size-5" />}
          hint="Soma de desaparecidas + localizadas"
          loading={loadingEstatistico}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SexoChart data={sexoData} loading={loadingSexo} />
        <IdadeChart data={idadeData} loading={loadingIdade} />
      </div>
    </section>
  );
}
