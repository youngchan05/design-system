import styled, { css } from "styled-components";
import type { CheckboxProps } from "./Checkbox.types";

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
  margin: 0;
  position: absolute;
  pointer-events: none;
`;

export const Box = styled.span<{
  $checked?: boolean;
  $indeterminate?: boolean;
  $error?: boolean;
  $disabled?: boolean;
  $size?: CheckboxProps["size"];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 2px solid
    ${({ theme, $error }) => ($error ? "#E5484D" : theme.colors.gray[400])};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme, $checked, $indeterminate }) =>
    $checked || $indeterminate ? theme.colors.primary[500] : "white"};

  transition: all 0.2s ease;

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          width: 16px;
          height: 16px;
          + .labelText {
            line-height: 16px;
          }
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

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

export const CheckIcon = styled.span`
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 2px;
`;

export const IndeterminateIcon = styled.span`
  width: 10px;
  height: 2px;
  background: white;
  border-radius: 1px;
`;

export const LabelText = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 14px;
`;
