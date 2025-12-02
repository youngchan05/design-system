import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button.types";

interface StyledProps {
  $loading?: boolean;
  $fullWidth?: boolean;
}
export const StyledButton = styled.button<ButtonProps & StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  /* size */
  ${({ size = "md" }) => {
    switch (size) {
      case "sm":
        return css`
          height: 32px;
          padding: 0 12px;
          font-size: 13px;
        `;
      case "lg":
        return css`
          height: 48px;
          padding: 0 20px;
          font-size: 15px;
        `;
      default:
        return css`
          height: 40px;
          padding: 0 16px;
          font-size: 14px;
        `;
    }
  }}

  /* variant */
  ${({ theme, variant = "primary" }) => {
    const p = theme.colors.primary;
    const g = theme.colors.gray;

    switch (variant) {
      case "primary":
        return css`
          background: ${p[500]};
          color: white;

          &:hover {
            background: ${p[700]};
          }

          &:active {
            background: ${p[700]};
            opacity: 0.9;
          }
        `;
      case "secondary":
        return css`
          background: ${g[200]};
          color: ${g[800]};

          &:hover {
            background: ${g[300]};
          }
        `;
      case "outline":
        return css`
          background: white;
          border: 1px solid ${p[500]};
          color: ${p[500]};
          &:hover {
            background: ${p[50]};
          }
        `;
      case "ghost":
        return css`
          background: transparent;
          color: ${p[500]};
          &:hover {
            background: ${p[50]};
          }
        `;
      case "destructive":
        return css`
          background: #ff4d4f;
          color: white;

          &:hover {
            background: #d9363e;
          }
        `;
    }
  }}

  /* loading, disabled */
  ${({ $loading, disabled }) =>
    ($loading || disabled) &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;
