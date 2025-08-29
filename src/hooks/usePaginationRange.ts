import { useMemo } from "react";

export function usePaginationRange(
  page: number,
  totalPages: number,
  siblingCount = 1,
) {
  return useMemo<(number | string)[]>(() => {
    if (totalPages <= 0) return [];
    const firstPage = 0;
    const lastPage = totalPages - 1;

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    const leftSibling = Math.max(page - siblingCount, firstPage + 1);
    const rightSibling = Math.min(page + siblingCount, lastPage - 1);

    const showLeftEllipsis = leftSibling > firstPage + 1;
    const showRightEllipsis = rightSibling < lastPage - 1;

    const range: (number | string)[] = [firstPage];

    if (showLeftEllipsis) range.push("…");

    for (let i = leftSibling; i <= rightSibling; i++) range.push(i);

    if (showRightEllipsis) range.push("…");

    range.push(lastPage);
    return range;
  }, [page, totalPages, siblingCount]);
}
