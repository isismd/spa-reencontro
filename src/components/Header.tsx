import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  emergencia?: string;
};

export default function Header({
  title = "Pessoas Desaparecidas",
  subtitle = "Governo do Estado de Mato Grosso",
  emergencia = "190",
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-blue-600 bg-white/90 backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200">
            <ShieldAlert className="h-5 w-5" aria-hidden />
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight">
              {title}
            </div>
            <div className="text-xs text-gray-500">{subtitle}</div>
          </div>
        </Link>

        <div className="hidden text-right text-xs text-gray-500 md:block">
          <div>
            <span className="font-medium">Emergência:</span> {emergencia}
          </div>
        </div>
      </div>
    </header>
  );
}
