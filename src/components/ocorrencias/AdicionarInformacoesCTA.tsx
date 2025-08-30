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
      className={`rounded-2xl border shadow-sm ring-red-200 border-destructive/30 bg-destructive/5 p-5  ${className ?? ""}`}
    >
      <div className="flex items-start gap-4">
        <div className="grid size-12 place-items-center rounded-xl bg-red-500/10 text-red-600 dark:text-red-300">
          <HeartHandshake className="size-6" />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-lg font-semibold leading-tight">
            Viu essa pessoa?
          </h3>
          <p className="text-sm text-muted-foreground">
            Qualquer detalhe pode ajudar. Adicione uma informação agora mesmo.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button size="lg" onClick={onAddInfo} className="font-medium">
              Adicionar informações
              <Plus className="mr-2 size-4" />
            </Button>
          </div>
          <p className="mt-2 text-[12px] text-muted-foreground">
            Em caso de emergência, ligue 190.
          </p>
        </div>
      </div>
    </div>
  );
}
