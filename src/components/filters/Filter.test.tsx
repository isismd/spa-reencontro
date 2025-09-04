import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "./Filter";

vi.mock("@/components/ui/select", () => {
  const Select = ({ value, onValueChange, children }: any) => (
    <select
      aria-label="select"
      data-testid="select"
      value={value ?? ""}
      onChange={(e) => onValueChange?.(e.target.value)}
    >
      {children}
    </select>
  );
  const SelectTrigger = ({ children, ...p }: any) => (
    <div {...p}>{children}</div>
  );
  const SelectValue = ({ placeholder }: any) => (
    <option value="">{placeholder}</option>
  );
  const SelectContent = ({ children }: any) => <>{children}</>;
  const SelectItem = ({ value, children }: any) => (
    <option value={value}>{children}</option>
  );
  return { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
});

vi.mock("@/components/ui/slider", () => {
  const Slider = ({
    value = [0, 130],
    min = 0,
    max = 130,
    onValueChange,
  }: any) => (
    <div>
      <input
        aria-label="min-idade"
        type="range"
        min={min}
        max={max}
        value={value[0]}
        onChange={(e) => onValueChange?.([Number(e.target.value), value[1]])}
      />
      <input
        aria-label="max-idade"
        type="range"
        min={min}
        max={max}
        value={value[1]}
        onChange={(e) => onValueChange?.([value[0], Number(e.target.value)])}
      />
    </div>
  );
  return { Slider };
});

vi.mock("@/components/ui/collapsible", () => {
  const Collapsible = ({ open, onOpenChange, children }: any) => (
    <div data-open={open}>
      <button
        aria-label="toggle-collapsible"
        onClick={() => onOpenChange?.(!open)}
        style={{ display: "none" }}
      />
      {children}
    </div>
  );
  const CollapsibleContent = ({ children }: any) => <div>{children}</div>;
  return { Collapsible, CollapsibleContent };
});

vi.mock("@/components/ui/tooltip", () => {
  const TooltipProvider = ({ children }: any) => <>{children}</>;
  const Tooltip = ({ children }: any) => <>{children}</>;
  const TooltipTrigger = ({ children }: any) => <>{children}</>;
  const TooltipContent = ({ children }: any) => <>{children}</>;
  return { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
});

const renderFilters = (
  partialValue: Partial<Parameters<typeof Filters>[0]["value"]> = {},
  onChange = vi.fn(),
) => {
  const value = {
    nome: "",
    status: undefined,
    sexo: undefined,
    faixaIdadeInicial: undefined,
    faixaIdadeFinal: undefined,
    pagina: 0,
    ...partialValue,
  };
  const utils = render(<Filters value={value} onChange={onChange} />);
  return { ...utils, onChange, value };
};

describe("Filters", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza input de busca com valor inicial", () => {
    renderFilters({ nome: "Maria" });
    const input = screen.getByPlaceholderText(
      "Buscar por nome…",
    ) as HTMLInputElement;
    expect(input.value).toBe("Maria");
  });

  it("aplica busca ao clicar no botão de pesquisar", async () => {
    const onChange = vi.fn();
    renderFilters({ nome: "" }, onChange);

    const input = screen.getByPlaceholderText(
      "Buscar por nome…",
    ) as HTMLInputElement;
    await userEvent.type(input, "João");
    const btn = screen.getByTitle("Pesquisar");
    await userEvent.click(btn);

    expect(onChange).toHaveBeenCalledTimes(1);
    const payload = onChange.mock.calls[0][0];
    expect(payload.nome).toBe("João");
    expect(payload.faixaIdadeInicial).toBeUndefined();
    expect(payload.faixaIdadeFinal).toBeUndefined();
    expect(payload.pagina).toBe(0);
  });

  it("limpa nome quando busca com string vazia (nome=undefined)", async () => {
    const onChange = vi.fn();
    renderFilters({ nome: "Alguém" }, onChange);

    const input = screen.getByPlaceholderText(
      "Buscar por nome…",
    ) as HTMLInputElement;
    await userEvent.clear(input);
    const btn = screen.getByTitle("Pesquisar");
    await userEvent.click(btn);

    const payload = onChange.mock.calls[0][0];
    expect(payload.nome).toBeUndefined();
  });

  it("abre filtros avançados, aplica status/sexo e faixa de idade customizada", async () => {
    const onChange = vi.fn();
    const { container } = renderFilters({}, onChange);

    const hiddenToggle = container.querySelector(
      '[aria-label="toggle-collapsible"]',
    )!;
    fireEvent.click(hiddenToggle);

    const allSelects = container.querySelectorAll(
      'select[data-testid="select"]',
    );
    const statusSelect = allSelects[0] as HTMLSelectElement;
    await userEvent.selectOptions(statusSelect, "LOCALIZADO");

    const sexoSelect = allSelects[1] as HTMLSelectElement;
    await userEvent.selectOptions(sexoSelect, "FEMININO");

    const minInput = screen.getByLabelText("min-idade") as HTMLInputElement;
    const maxInput = screen.getByLabelText("max-idade") as HTMLInputElement;
    fireEvent.change(minInput, { target: { value: "10" } });
    fireEvent.change(maxInput, { target: { value: "40" } });

    const aplicar = screen.getByRole("button", { name: /aplicar/i });
    await userEvent.click(aplicar);

    expect(onChange).toHaveBeenCalledTimes(1);
    const payload = onChange.mock.calls[0][0];

    expect(payload.status).toBe("LOCALIZADO");
    expect(payload.sexo).toBe("FEMININO");
    expect(payload.faixaIdadeInicial).toBe(10);
    expect(payload.faixaIdadeFinal).toBe(40);
    expect(payload.pagina).toBe(0);
  });

  it("limpa filtros avançados ao clicar em 'Limpar'", async () => {
    const onChange = vi.fn();
    const { container } = renderFilters(
      {
        status: "DESAPARECIDO",
        sexo: "MASCULINO",
        faixaIdadeInicial: 20,
        faixaIdadeFinal: 60,
      },
      onChange,
    );

    const hiddenToggle = container.querySelector(
      '[aria-label="toggle-collapsible"]',
    )!;
    fireEvent.click(hiddenToggle);

    const limpar = screen.getByRole("button", { name: /limpar/i });
    await userEvent.click(limpar);

    expect(onChange).toHaveBeenCalledTimes(1);
    const payload = onChange.mock.calls[0][0];
    expect(payload.status).toBeUndefined();
    expect(payload.sexo).toBeUndefined();
    expect(payload.faixaIdadeInicial).toBeUndefined();
    expect(payload.faixaIdadeFinal).toBeUndefined();
    expect(payload.pagina).toBe(0);
  });

  it("não envia faixa quando range está em 0..130", async () => {
    const onChange = vi.fn();
    const { container } = renderFilters({}, onChange);

    const hiddenToggle = container.querySelector(
      '[aria-label="toggle-collapsible"]',
    )!;
    fireEvent.click(hiddenToggle);

    const aplicar = screen.getByRole("button", { name: /aplicar/i });
    await userEvent.click(aplicar);

    const payload = onChange.mock.calls[0][0];
    expect(payload.faixaIdadeInicial).toBeUndefined();
    expect(payload.faixaIdadeFinal).toBeUndefined();
  });
});
