import { ItemButton, Ellipsis } from "./Pagination.styles";
import type { PaginationItemProps } from "./Pagination.types";

export const PaginationItem = ({
  type,
  page,
  disabled,
  active,
  size,
  variant,
  rounded,
  onClick,
}: PaginationItemProps) => {
  if (type === "ellipsis") {
    return <Ellipsis>…</Ellipsis>;
  }

  const label = {
    first: "<<",
    last: ">>",
    prev: "<",
    next: ">",
    page: String(page),
  }[type];

  return (
    <ItemButton
      $active={active}
      $disabled={disabled}
      $size={size}
      $variant={variant}
      $rounded={rounded}
      onClick={onClick}
    >
      {label}
    </ItemButton>
  );
};
