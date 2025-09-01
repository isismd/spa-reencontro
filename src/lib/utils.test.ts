import { describe, it, expect } from "vitest";
import {
  cn,
  formatDate,
  formatTime,
  notInformed,
  capitalizeWords,
  formatYmdLocal,
  parseYmdToLocalDate,
} from "./utils";

describe("utils", () => {
  it("cn() combina e resolve conflitos do tailwind", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-sm", null, { bold: true })).toContain("text-sm");
  });

  it("formatDate() retorna data formatada ou 'Não informado'", () => {
    expect(formatDate()).toBe("Não informado");
    expect(formatDate("data inválida")).toBe("Não informado");
    expect(formatDate("2025-08-15")).toBe(formatDate(new Date(2025, 7, 15)));
  });

  it("formatTime() retorna hora formatada ou '—'", () => {
    expect(formatTime()).toBe("—");
    expect(formatTime("data inválida")).toBe("—");
    expect(formatTime("2025-08-15T08:05:00")).toBe(
      new Date("2025-08-15T08:05:00").toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    );
  });

  it("notInformed() retorna valor ou 'Não informado'", () => {
    expect(notInformed()).toBe("Não informado");
    expect(notInformed("")).toBe("Não informado");
    expect(notInformed("valor")).toBe("valor");
  });

  it("capitalizeWords() capitaliza palavras", () => {
    expect(capitalizeWords()).toBe("");
    expect(capitalizeWords("joao da silva")).toBe("Joao Da Silva");
    expect(capitalizeWords("MISTO CASE")).toBe("Misto Case");
  });

  it("formatYmdLocal() retorna data no formato yyyy-mm-dd", () => {
    const date = new Date(2025, 7, 15);
    expect(formatYmdLocal(date)).toBe("2025-08-15");
  });

  it("parseYmdToLocalDate() converte yyyy-mm-dd para Date ou undefined", () => {
    const d = parseYmdToLocalDate("2025-08-15");
    expect(d).toBeInstanceOf(Date);
    expect(d?.getFullYear()).toBe(2025);
    expect(d?.getMonth()).toBe(7);
    expect(d?.getDate()).toBe(15);
    expect(parseYmdToLocalDate("invalido")).toBeUndefined();
  });
});
