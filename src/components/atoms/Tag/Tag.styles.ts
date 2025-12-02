import styled, { css } from "styled-components";
import type { TagProps } from "./Tag.types";
import type { BadgeColor } from "../Badge/Badge.types";

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
    border: 1px solid ${({ theme, $color }) => theme.colors[$color][400]};
    background: white;
    color: ${({ theme, $color }) => theme.colors[$color][700]};
  `,
};

const sizeStyles = {
  sm: css`
    padding: 2px 8px;
    font-size: 12px;
  `,
  md: css`
    padding: 4px 10px;
    font-size: 13px;
  `,
  lg: css`
    padding: 6px 12px;
    font-size: 14px;
  `,
};

export const TagWrapper = styled.span<{
  $variant: TagProps["variant"];
  $color: BadgeColor;
  $size: TagProps["size"];
  $rounded: boolean;
  $selectable: boolean;
  $selected: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: default;
  user-select: none;

  ${({ $rounded }) =>
    $rounded
      ? css`
          border-radius: 999px;
        `
      : css`
          border-radius: 6px;
        `}

  ${({ $variant }) => variantStyles[$variant!]};
  ${({ $size }) => sizeStyles[$size!]};

  ${({ $selectable, theme, $color, $selected }) =>
    $selectable &&
    css`
      cursor: pointer;
      transition: all 0.15s ease;

      ${$selected &&
      css`
        background: ${theme.colors[$color][500]};
        color: white;
      `}

      &:hover {
        opacity: 0.85;
      }
    `}
`;

export const RemoveButton = styled.button`
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: 12px;

  &:hover {
    opacity: 0.8;
  }
`;
