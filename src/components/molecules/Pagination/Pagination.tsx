import { Container } from "./Pagination.styles";
import { PaginationItem } from "./PaginationItem";
import { usePagination } from "./usePagination";
import type { PaginationProps } from "./Pagination.types";

export const Pagination = ({
  page,
  totalPages,
  onChange,

  siblingCount = 1,
  boundaryCount = 1,

  showFirstButton = false,
  showLastButton = false,
  showPrevNext = true,

  size = "md",
  variant = "outlined",
  rounded = "md",

  disabled = false,
  className,
}: PaginationProps) => {
  const pagination = usePagination({
    page,
    totalPages,
    siblingCount,
    boundaryCount,
  });

  const go = (p: number) => {
    if (!disabled && p >= 1 && p <= totalPages) onChange?.(p);
  };

  return (
    <Container className={className}>
      {/* First */}
      {showFirstButton && (
        <PaginationItem
          type="first"
          size={size}
          variant={variant}
          rounded={rounded}
          disabled={page === 1 || disabled}
          onClick={() => go(1)}
        />
      )}

      {/* Prev */}
      {showPrevNext && (
        <PaginationItem
          type="prev"
          size={size}
          variant={variant}
          rounded={rounded}
          disabled={page === 1 || disabled}
          onClick={() => go(page - 1)}
        />
      )}

      {/* Page list */}
      {pagination.map((p, i) =>
        typeof p === "string" ? (
          <PaginationItem
            key={i}
            type="ellipsis"
            size={size}
            variant={variant}
            rounded={rounded}
          />
        ) : (
          <PaginationItem
            key={p}
            type="page"
            page={p}
            active={p === page}
            size={size}
            variant={variant}
            rounded={rounded}
            disabled={disabled}
            onClick={() => go(p)}
          />
        )
      )}

      {/* Next */}
      {showPrevNext && (
        <PaginationItem
          type="next"
          size={size}
          variant={variant}
          rounded={rounded}
          disabled={page === totalPages || disabled}
          onClick={() => go(page + 1)}
        />
      )}

      {/* Last */}
      {showLastButton && (
        <PaginationItem
          type="last"
          size={size}
          variant={variant}
          rounded={rounded}
          disabled={page === totalPages || disabled}
          onClick={() => go(totalPages)}
        />
      )}
    </Container>
  );
};
