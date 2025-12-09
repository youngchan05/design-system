import styled, { css } from "styled-components";
import type { TextareaProps } from "./Textarea.types";

export const Wrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  gap: 6px;
`;

export const TextareaContainer = styled.div<{
  $error?: boolean;
  $disabled?: boolean;
  $size?: TextareaProps["size"];
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  border: 1px solid
    ${({ theme, $error }) => ($error ? "#E5484D" : theme.colors.gray[300])};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 10px 12px;
  font-size: 14px;
  line-height: 1.5;
  background: white;
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: all 0.2s ease;

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          min-height: 60px;
        `;
      case "lg":
        return css`
          min-height: 140px;
        `;
      default:
        return css`
          min-height: 100px;
        `;
    }
  }}

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      background: ${theme.colors.gray[100]};
      color: ${theme.colors.gray[400]};
      pointer-events: none;
      opacity: 0.6;
    `}

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[100]};
  }
`;

export const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  flex: 1;
  height: 100%;
  resize: none;
  background: transparent;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.gray[900]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
