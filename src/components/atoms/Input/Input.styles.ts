import styled, { css } from "styled-components";
import type { InputProps } from "./Input.types";

export const Wrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  gap: 6px;
`;

export const InputContainer = styled.div<{
  $error?: boolean;
  $disabled?: boolean;
  $size?: InputProps["size"];
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  background: white;
  border: 1px solid
    ${({ theme, $error }) => ($error ? "#E5484D" : theme.colors.gray[300])};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 0 12px;
  transition: all 0.2s ease;

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          height: 32px;
        `;
      case "lg":
        return css`
          height: 48px;
        `;
      default:
        return css`
          height: 40px;
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

export const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  background: transparent;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.gray[900]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const IconButton = styled.button`
  /* position: absolute;
  right: 10px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.gray[500]};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;
