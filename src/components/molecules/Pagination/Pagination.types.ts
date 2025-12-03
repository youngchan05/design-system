export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange?: (page: number) => void;

  siblingCount?: number; // 현재 페이지 양쪽 몇 개
  boundaryCount?: number; // 앞뒤 몇 개 페이지 고정

  showFirstButton?: boolean;
  showLastButton?: boolean;
  showPrevNext?: boolean;

  size?: "sm" | "md" | "lg";
  variant?: "outlined" | "solid" | "soft";
  rounded?: "none" | "md" | "full";

  disabled?: boolean;
  className?: string;
}

export type PaginationItemType =
  | "page"
  | "ellipsis"
  | "first"
  | "last"
  | "prev"
  | "next";

export interface PaginationItemProps {
  type: PaginationItemType;
  page?: number;
  disabled?: boolean;
  active?: boolean;

  size: PaginationProps["size"];
  variant: PaginationProps["variant"];
  rounded: PaginationProps["rounded"];

  onClick?: () => void;
}
