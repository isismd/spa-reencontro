import { Button } from "@/components/ui/button";
import { HeartHandshake, Plus } from "lucide-react";

type Props = {
  className?: string;
  onAddInfo?: () => void;
};

export default function AdicionarInformacoesCTA({
  className,
  onAddInfo,
}: Props) {
  return (
    <div
      className={`border-amber/30 rounded-2xl border bg-amber-50 p-5 shadow-sm ring-amber-200 dark:bg-amber-500/10 ${className ?? ""}`}
    >
      <div className="flex items-start gap-4">
        <div className="grid size-12 place-items-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-300">
          <HeartHandshake className="size-6" />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-lg leading-tight font-semibold">
            Viu essa pessoa?
          </h3>
          <p className="text-muted-foreground text-sm">
            Qualquer detalhe pode ajudar. Adicione uma informação agora mesmo.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button size="lg" onClick={onAddInfo} className="font-medium">
              Adicionar informações
              <Plus className="mr-2 size-4" />
            </Button>
          </div>
          <p className="text-muted-foreground mt-2 text-[12px]">
            Em caso de emergência, ligue 190.
          </p>
        </div>
      </div>
    </div>
  );
}
