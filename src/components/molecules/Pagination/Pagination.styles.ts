import styled, { css } from "styled-components";
import type { PaginationProps } from "./Pagination.types";

export const Container = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

export const ItemButton = styled.button<{
  $active?: boolean;
  $disabled?: boolean;
  $size: PaginationProps["size"];
  $variant: PaginationProps["variant"];
  $rounded: PaginationProps["rounded"];
}>`
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.15s ease;
  font-size: 14px;

  ${({ $size }) =>
    $size === "sm" &&
    css`
      width: 28px;
      height: 28px;
    `}
  ${({ $size }) =>
    $size === "md" &&
    css`
      width: 32px;
      height: 32px;
    `}
  ${({ $size }) =>
    $size === "lg" &&
    css`
      width: 38px;
      height: 38px;
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $rounded }) =>
    $rounded === "none" &&
    css`
      border-radius: 4px;
    `}
  ${({ $rounded }) =>
    $rounded === "md" &&
    css`
      border-radius: 6px;
    `}
  ${({ $rounded }) =>
    $rounded === "full" &&
    css`
      border-radius: 999px;
    `}

  ${({ $variant, theme, $active }) =>
    $variant === "outlined" &&
    css`
      border: 1px solid
        ${$active ? theme.colors.primary[600] : theme.colors.gray[300]};
      background: white;
      color: ${$active ? theme.colors.primary[700] : theme.colors.gray[700]};

      &:hover {
        border-color: ${theme.colors.primary[500]};
        color: ${theme.colors.primary[600]};
      }
    `}

  ${({ $variant, theme, $active }) =>
    $variant === "solid" &&
    css`
      background: ${$active
        ? theme.colors.primary[600]
        : theme.colors.gray[200]};
      color: ${$active ? "white" : theme.colors.gray[700]};

      &:hover {
        background: ${theme.colors.primary[500]};
        color: white;
      }
    `}

  ${({ $variant, theme, $active }) =>
    $variant === "soft" &&
    css`
      background: ${$active
        ? theme.colors.primary[100]
        : theme.colors.gray[100]};
      color: ${$active ? theme.colors.primary[700] : theme.colors.gray[700]};

      &:hover {
        background: ${theme.colors.primary[200]};
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export const Ellipsis = styled.span`
  padding: 0 6px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;
