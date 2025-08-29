import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { FunnelPlus, FunnelX, Search } from "lucide-react";
import { useState, useMemo } from "react";
import type { PessoasFiltro, Sexo } from "@/interfaces/IPessoas";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  value: PessoasFiltro;
  onChange: (next: PessoasFiltro) => void;
};

const IDADE_MAX = 130;

export default function Filters({ value, onChange }: Props) {
  const [openAdv, setOpenAdv] = useState(false);
  const [searchText, setSearchText] = useState(value.nome ?? "");

  const idadeRange: [number, number] = useMemo(() => [0, IDADE_MAX], []);

  function update<K extends keyof PessoasFiltro>(
    key: K,
    val: PessoasFiltro[K],
  ) {
    onChange({ ...value, [key]: val, pagina: 0 });
  }

  function applySearch() {
    onChange({ ...value, nome: searchText || undefined, pagina: 0 });
  }

  function applyAdvanced() {
    onChange({
      ...value,
      faixaIdadeInicial: idadeRange[0] > 0 ? idadeRange[0] : undefined,
      faixaIdadeFinal: idadeRange[1] < IDADE_MAX ? idadeRange[1] : undefined,
      pagina: 0,
    });
  }

  function clearAdvanced() {
    onChange({
      ...value,
      status: undefined,
      sexo: undefined,
      vivo: undefined,
      faixaIdadeInicial: undefined,
      faixaIdadeFinal: undefined,
      pagina: 0,
    });
  }

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Buscar por nome…"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1"
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="default"
                size="icon"
                onClick={applySearch}
                aria-label="Pesquisar"
              >
                <Search className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pesquisar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setOpenAdv((v) => !v)}
                aria-label="Filtros avançados"
              >
                {openAdv ? (
                  <FunnelX className="h-5 w-5" />
                ) : (
                  <FunnelPlus className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Filtros avançados</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Collapsible open={openAdv} onOpenChange={setOpenAdv}>
        <CollapsibleContent className="mt-3 space-y-6 rounded-xl border p-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div>
              <Label className="mb-2 block">Status</Label>
              <Select
                value={value.status ?? ""}
                onValueChange={(v) =>
                  update("status", (v || undefined) as PessoasFiltro["status"])
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecionar…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DESAPARECIDO">Desaparecido</SelectItem>
                  <SelectItem value="LOCALIZADO">Localizado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">Sexo</Label>
              <Select
                value={value.sexo ?? ""}
                onValueChange={(v) =>
                  update("sexo", (v || undefined) as Sexo | undefined)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecionar…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MASCULINO">Masculino</SelectItem>
                  <SelectItem value="FEMININO">Feminino</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">Vivo</Label>
              <Select
                value={
                  typeof value.vivo === "boolean" ? String(value.vivo) : ""
                }
                onValueChange={(v) =>
                  update("vivo", v === "" ? undefined : v === "true")
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecionar…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Sim</SelectItem>
                  <SelectItem value="false">Não</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">Faixa de idade</Label>
              <div className="mb-2 flex justify-between text-sm opacity-80">
                <span>{idadeRange[0]} anos</span>
                <span>{idadeRange[1]} anos</span>
              </div>
              <Slider
                value={idadeRange}
                min={0}
                max={IDADE_MAX}
                step={1}
                onValueChange={([min, max]) =>
                  onChange({
                    ...value,
                    faixaIdadeInicial: min === 0 ? undefined : min,
                    faixaIdadeFinal: max === IDADE_MAX ? undefined : max,
                  })
                }
              />
            </div>
          </div>

          <Separator className="my-4" />
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={clearAdvanced}>
              Limpar
            </Button>
            <Button className="gap-2" onClick={applyAdvanced}>
              <Search className="h-4 w-4" /> Aplicar
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
