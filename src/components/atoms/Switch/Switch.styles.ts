import styled, { css } from "styled-components";
import type { SwitchProps } from "./Switch.types";

export const Wrapper = styled.label<{ $fullWidth?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
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

export const Track = styled.span<{
  $checked?: boolean;
  $disabled?: boolean;
  $error?: boolean;
  $size?: SwitchProps["size"];
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme, $checked, $error }) =>
    $error
      ? "#E5484D"
      : $checked
      ? theme.colors.primary[500]
      : theme.colors.gray[300]};
  transition: background 0.25s;

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          width: 34px;
          height: 18px;
        `;
      case "lg":
        return css`
          width: 50px;
          height: 26px;
        `;
      default:
        return css`
          width: 42px;
          height: 22px;
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

export const Thumb = styled.span<{
  $checked?: boolean;
  $size?: SwitchProps["size"];
}>`
  position: absolute;
  background: white;
  border-radius: 50%;
  transition: transform 0.25s;

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          width: 14px;
          height: 14px;
          left: 2px;
        `;
      case "lg":
        return css`
          width: 22px;
          height: 22px;
          left: 2px;
        `;
      default:
        return css`
          width: 18px;
          height: 18px;
          left: 2px;
        `;
    }
  }}

  ${({ $checked, $size }) => {
    const positions = {
      sm: "16px",
      md: "20px",
      lg: "26px",
    };
    return css`
      transform: translateX(${$checked ? positions[$size || "md"] : "0px"});
    `;
  }}
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HelperText = styled.span<{ $error?: boolean }>`
  font-size: 12px;
  margin-top: 2px;
  color: ${({ theme, $error }) =>
    $error ? "#E5484D" : theme.colors.gray[500]};
`;
