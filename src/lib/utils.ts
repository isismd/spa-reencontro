import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(iso?: string) {
  if (!iso) return "Não informado";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "Não informado" : d.toLocaleDateString();
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
