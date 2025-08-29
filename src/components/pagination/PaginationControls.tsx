import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { usePaginationRange } from "@/hooks/usePaginationRange";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function PaginationControls({
  page,
  totalPages,
  onChange,
}: Props) {
  if (totalPages <= 1) return null;

  const range = usePaginationRange(page, totalPages, 1);

  const go = (p: number) => {
    if (p < 0 || p >= totalPages || p === page) return;
    onChange(p);
  };

  const isPrevDisabled = page <= 0;
  const isNextDisabled = page + 1 >= totalPages;

  return (
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
  );
}
