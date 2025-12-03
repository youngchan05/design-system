import styled, { css } from "styled-components";

export const TabListWrapper = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  position: relative;
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};
`;

export const Indicator = styled.div<{ left: number; width: number }>`
  position: absolute;
  bottom: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary[600]};
  transition: all 0.18s ease;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
`;

export const TabButton = styled.button<{
  $active: boolean;
  $disabled: boolean;
  $size: "sm" | "md" | "lg";
  $variant: "underline" | "soft" | "solid";
}>`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  position: relative;
  transition: color 0.18s ease;

  ${({ $size }) =>
    $size === "sm" &&
    css`
      padding: 6px 10px;
      font-size: 13px;
    `}
  ${({ $size }) =>
    $size === "md" &&
    css`
      padding: 8px 12px;
      font-size: 14px;
    `}
  ${({ $size }) =>
    $size === "lg" &&
    css`
      padding: 10px 16px;
      font-size: 15px;
    `}

  ${({ $variant, theme, $active }) =>
    $variant === "underline" &&
    css`
      color: ${$active ? theme.colors.primary[700] : theme.colors.gray[600]};
    `}

  ${({ $variant, theme, $active }) =>
    $variant === "soft" &&
    css`
      border-radius: 8px;
      background: ${$active ? theme.colors.primary[50] : "transparent"};
      color: ${$active ? theme.colors.primary[700] : theme.colors.gray[600]};

      &:hover {
        background: ${theme.colors.primary[50]};
      }
    `}

  ${({ $variant, theme, $active }) =>
    $variant === "solid" &&
    css`
      border-radius: 8px;
      background: ${$active
        ? theme.colors.primary[600]
        : theme.colors.gray[200]};
      color: ${$active ? "white" : theme.colors.gray[700]};

      &:hover {
        background: ${theme.colors.primary[500]};
        color: white;
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`;

export const PanelWrapper = styled.div`
  padding: 12px 0;
`;
