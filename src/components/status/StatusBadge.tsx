import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  localizado: boolean;
};

export function StatusBadge({ localizado }: StatusBadgeProps) {
  return (
    <Badge
      role="status"
      aria-label={localizado ? "Status: Localizado" : "Status: Desaparecido"}
      className={cn(
        "flex items-center gap-2 rounded-full px-3 py-0.5 text-xs font-medium",
        localizado ? "bg-green-700 text-green-100" : "bg-red-700 text-red-100",
      )}
    >
      {!localizado && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </span>
      )}
      {localizado ? "Localizado" : "Desaparecido"}
    </Badge>
  );
}
