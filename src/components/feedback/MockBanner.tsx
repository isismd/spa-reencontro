import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { disableMocks, isMockEnabled } from "@/mocks/mockController";
import { Power } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MockFooterStrip() {
  const [on, setOn] = useState(isMockEnabled());
  const navigate = useNavigate();

  useEffect(() => {
    const handleChange = (e: Event) => {
      if (e instanceof CustomEvent) setOn(Boolean(e.detail));
    };
    const handleStorage = () => setOn(isMockEnabled());

    window.addEventListener("mock:changed", handleChange as EventListener);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("mock:changed", handleChange as EventListener);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  if (!on) return null;

  const handleDisable = () => {
    navigate("/");
    disableMocks();
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-muted/60 supports-[backdrop-filter]:bg-primary/10 z-40 w-full border-t backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Badge variant="outline" className="rounded-full px-2 py-0.5">
            <span
              className="inline-block size-1.5 rounded-full bg-amber-500"
              aria-hidden
            />
            Dados Fictícios
          </Badge>
          <span className="hidden sm:inline">Ambiente de demonstração</span>
        </div>

        <Button
          onClick={handleDisable}
          size="sm"
          variant="link"
          className="text-xs"
        >
          <Power className="mr-1 size-3.5" />
          Desativar
        </Button>
      </div>
    </div>
  );
}
