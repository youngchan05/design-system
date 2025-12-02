import styled, { css } from "styled-components";
import type { BadgeColor, BadgeProps } from "./Badge.types";

const variantStyles = {
  solid: css<{ $color: BadgeColor }>`
    background: ${({ theme, $color }) => theme.colors[$color][500]};
    color: white;
  `,
  soft: css<{ $color: BadgeColor }>`
    background: ${({ theme, $color }) => theme.colors[$color][100]};
    color: ${({ theme, $color }) => theme.colors[$color][700]};
  `,
  outline: css<{ $color: BadgeColor }>`
    background: white;
    border: 1px solid ${({ theme, $color }) => theme.colors[$color][400]};
    color: ${({ theme, $color }) => theme.colors[$color][700]};
  `,
};

const sizeStyles = {
  sm: css`
    font-size: 12px;
    padding: 2px 8px;
  `,
  md: css`
    font-size: 13px;
    padding: 4px 10px;
  `,
  lg: css`
    font-size: 14px;
    padding: 6px 12px;
  `,
};

export const BadgeWrapper = styled.span<{
  $variant: BadgeProps["variant"];
  $color: BadgeColor;
  $size: BadgeProps["size"];
  $rounded?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  border-radius: ${({ $rounded }) => ($rounded ? "999px" : "6px")};
  white-space: nowrap;
  user-select: none;

  ${({ $variant }) => variantStyles[$variant!]};
  ${({ $size }) => sizeStyles[$size!]};
`;
