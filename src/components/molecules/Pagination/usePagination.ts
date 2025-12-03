import type { PaginationProps } from "./Pagination.types";

type PageItem = number | "left-ellipsis" | "right-ellipsis";

export const usePagination = ({
  page,
  totalPages,
  siblingCount = 1,
  boundaryCount = 1,
}: PaginationProps) => {
  const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2;
  const totalBlocks = totalNumbers + 2;

  // 전체가 다 보여질 경우
  if (totalBlocks >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => (i + 1) as PageItem);
  }

  const leftSiblingStart = Math.max(page - siblingCount, boundaryCount + 2);
  const rightSiblingEnd = Math.min(
    page + siblingCount,
    totalPages - boundaryCount - 1
  );

  const hasLeftEllipsis = leftSiblingStart > boundaryCount + 2;
  const hasRightEllipsis = rightSiblingEnd < totalPages - (boundaryCount + 1);

  const pages: PageItem[] = [];

  // Left boundary
  for (let i = 1; i <= boundaryCount; i++) pages.push(i);

  if (hasLeftEllipsis) pages.push("left-ellipsis");

  // Middle pages
  for (let i = leftSiblingStart; i <= rightSiblingEnd; i++) pages.push(i);

  if (hasRightEllipsis) pages.push("right-ellipsis");

  // Right boundary
  for (let i = totalPages - boundaryCount + 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return pages;
};
