// src/components/pessoa/StatusPessoa.tsx
import { AlertTriangle, CheckCircle2, Info, Frown } from "lucide-react";

type Props = {
  isLocalizado: boolean;
  encontradoVivo?: boolean | null;
};

export default function StatusPessoa({ isLocalizado, encontradoVivo }: Props) {
  if (!isLocalizado) {
    return (
      <div
        className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-destructive"
        aria-live="polite"
      >
        <AlertTriangle className="mt-0.5 size-5 shrink-0" />
        <div className="text-sm">
          <p className="font-medium leading-tight">Pessoa desaparecida</p>
          <p className="text-muted-foreground">
            Ainda não localizada, qualquer informação pode ajudar.
          </p>
        </div>
      </div>
    );
  }

  if (encontradoVivo === true) {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-emerald-300/40 bg-emerald-50/60 p-3 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
        <div className="text-sm">
          <p className="font-medium leading-tight">Pessoa localizada</p>
          <p className="opacity-90">
            Encontrada em segurança, agradecemos a colaboração de todos.
          </p>
        </div>
      </div>
    );
  }

  if (encontradoVivo === false) {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-red-300/50 bg-red-50/70 p-3 text-red-700 dark:border-red-400/30 dark:bg-red-900/20 dark:text-red-300">
        <Frown className="mt-0.5 size-5 shrink-0" />
        <div className="text-sm">
          <p className="font-medium leading-tight">Pessoa localizada</p>
          <p className="opacity-90">
            Infelizmente localizada sem vida, nossos sentimentos às famílias e
            amigos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-xl border border-muted-foreground/30 bg-muted/10 p-3 text-muted-foreground">
      <Info className="mt-0.5 size-5 shrink-0" />
      <div className="text-sm">
        <p className="font-medium leading-tight">Pessoa localizada</p>
        <p className="opacity-90">
          Localizada, mas sem detalhes confirmados sobre a condição.
        </p>
      </div>
    </div>
  );
}
