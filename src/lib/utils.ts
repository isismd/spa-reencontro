import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(v?: string | Date) {
  if (!v) return "Não informado";

  let d: Date | undefined;
  if (v instanceof Date) {
    d = v;
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
    d = parseYmdToLocalDate(v);
  } else {
    d = new Date(v);
  }

  return !d || Number.isNaN(d.getTime())
    ? "Não informado"
    : d.toLocaleDateString();
}

export function formatTime(iso?: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? "—"
    : d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
}

export function notInformed(v?: string | null) {
  if (!v || v.trim() === "") return "Não informado";
  return v;
}

export function capitalizeWords(str?: string) {
  if (!str) return "";
  return str
    .toLocaleLowerCase("pt-BR")
    .replace(/(^|\s)\S/g, (c) => c.toLocaleUpperCase("pt-BR"));
}

export function formatYmdLocal(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function parseYmdToLocalDate(ymd: string): Date | undefined {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd);
  if (!m) return undefined;
  const [, y, mm, dd] = m;
  const d = new Date(Number(y), Number(mm) - 1, Number(dd));
  return Number.isNaN(d.getTime()) ? undefined : d;
}
