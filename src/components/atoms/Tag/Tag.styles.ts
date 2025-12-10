import styled, { css } from "styled-components";
import type { TagProps } from "./Tag.types";
import {
  getIntentPalette,
  parseVariant,
  styleVariant,
} from "@components/utils.style";

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

  ${({ $size }) => sizeStyles[$size!]};
  ${({ theme, $variant }) => styleVariant({ theme, variant: $variant })}

  ${({ $selectable, theme, $variant, $selected }) => {
    const { intent } = parseVariant($variant ?? "primary-solid");
    const palette = getIntentPalette(theme, intent);

    return (
      $selectable &&
      css`
        cursor: pointer;
        transition: all 0.15s ease;

        ${$selected &&
        css`
          background: ${palette[900]};
          color: white;
        `}

        &:hover {
          opacity: 0.85;
        }
      `
    );
  }}
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
