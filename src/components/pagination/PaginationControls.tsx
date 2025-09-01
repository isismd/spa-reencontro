import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { usePaginationRange } from "@/hooks/usePaginationRange";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  perPage?: number;
  perPageOptions?: number[];
  onPerPageChange?: (perPage: number) => void;
};

export default function PaginationControls({
  page,
  totalPages,
  onChange,
  perPage = 12,
  perPageOptions = [12, 24, 36, 48, 60],
  onPerPageChange = () => {},
}: Props) {
  const range = usePaginationRange(page, totalPages, 1);

  const go = (p: number) => {
    if (p < 0 || p >= totalPages || p === page) return;
    onChange(p);
  };

  const isPrevDisabled = page <= 0;
  const isNextDisabled = page + 1 >= totalPages;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <Label htmlFor="per-page" className="whitespace-nowrap text-sm">
          Items por página
        </Label>
        <Select
          value={String(perPage)}
          onValueChange={(v) => onPerPageChange(Number(v))}
        >
          <SelectTrigger id="per-page" className="w-20">
            <SelectValue placeholder="Itens" />
          </SelectTrigger>
          <SelectContent>
            {perPageOptions.map((opt) => (
              <SelectItem key={opt} value={String(opt)}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                go(page - 1);
              }}
              aria-disabled={isPrevDisabled}
              tabIndex={isPrevDisabled ? -1 : 0}
              style={{
                pointerEvents: isPrevDisabled ? "none" : "auto",
                opacity: isPrevDisabled ? 0.5 : 1,
              }}
            />
          </PaginationItem>

          {range.map((entry, idx) => (
            <PaginationItem key={`${entry}-${idx}`}>
              {entry === "…" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href="#"
                  isActive={entry === page}
                  onClick={(e) => {
                    e.preventDefault();
                    go(entry as number);
                  }}
                >
                  {(entry as number) + 1}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                go(page + 1);
              }}
              aria-disabled={isNextDisabled}
              tabIndex={isNextDisabled ? -1 : 0}
              style={{
                pointerEvents: isNextDisabled ? "none" : "auto",
                opacity: isNextDisabled ? 0.5 : 1,
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
