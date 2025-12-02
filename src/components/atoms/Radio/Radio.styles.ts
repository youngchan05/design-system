import styled, { css } from "styled-components";
import type { RadioProps } from "./Radio.types";

export const Wrapper = styled.label<{ $fullWidth?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

export const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  pointer-events: none;
`;

export const Circle = styled.span<{
  $checked?: boolean;
  $error?: boolean;
  $disabled?: boolean;
  $size?: RadioProps["size"];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 2px solid
    ${({ theme, $error }) => ($error ? "#E5484D" : theme.colors.gray[400])};
  border-radius: 50%;
  transition: all 0.2s ease;

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          width: 16px;
          height: 16px;
        `;
      case "lg":
        return css`
          width: 22px;
          height: 22px;
        `;
      default:
        return css`
          width: 18px;
          height: 18px;
        `;
    }
  }}

  ${({ $checked, theme }) =>
    $checked &&
    css`
      border-color: ${theme.colors.primary[500]};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

export const Dot = styled.span<{
  $checked?: boolean;
  $size?: RadioProps["size"];
}>`
  background: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 50%;
  transition: all 0.2s ease;

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          width: 6px;
          height: 6px;
        `;
      case "lg":
        return css`
          width: 10px;
          height: 10px;
        `;
      default:
        return css`
          width: 8px;
          height: 8px;
        `;
    }
  }}

  opacity: ${({ $checked }) => ($checked ? 1 : 0)};
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
`;
