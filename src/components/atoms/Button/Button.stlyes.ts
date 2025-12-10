// Button.styles.ts
import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button.types";
import { styleVariant } from "@components/utils.style";

interface StyledProps {
  $fullWidth?: boolean;
  $loading?: boolean;
}

// size
const buttonSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "sm":
      return css`
        height: 32px;
        font-size: 13px;
        padding: 0 12px;
      `;
    case "lg":
      return css`
        height: 48px;
        font-size: 15px;
        padding: 0 20px;
      `;
    default:
      return css`
        height: 40px;
        font-size: 14px;
        padding: 0 16px;
      `;
  }
};

export const StyledButton = styled.button<ButtonProps & StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all 0.2s ease;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  border: none;

  ${(props) => buttonSize(props.size)}
  ${({ theme, variant }) => styleVariant({ theme, variant })}
  
  ${({ disabled, $loading }) =>
    (disabled || $loading) &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;
