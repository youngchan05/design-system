import styled, { css, keyframes } from "styled-components";
import type { BadgeColor } from "../Badge/Badge.types";

const slide = keyframes`
  0% { left: -40%; width: 40%; }
  50% { left: 20%; width: 60%; }
  100% { left: 100%; width: 40%; }
`;

const sizeStyles = {
  sm: css`
    height: 4px;
  `,
  md: css`
    height: 6px;
  `,
  lg: css`
    height: 8px;
  `,
};

export const Track = styled.div<{
  $size: "sm" | "md" | "lg";
  $rounded: boolean;
}>`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[200]};
  position: relative;
  overflow: hidden;

  ${({ $size }) => sizeStyles[$size]}

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 999px;
    `}
`;

export const Bar = styled.div<{
  $percent: number;
  $color: BadgeColor;
  $variant: string;
  $indeterminate: boolean;
  $rounded: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  background: ${({ $color, theme }) => theme.colors[$color][500]};
  transition: width 0.22s ease-out;

  ${({ $percent, $indeterminate }) =>
    !$indeterminate &&
    css`
      width: ${$percent}%;
    `}

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: inherit;
    `}

  ${({ $indeterminate }) =>
    $indeterminate &&
    css`
      width: 40%;
      animation: ${slide} 1.2s ease-in-out infinite;
      left: -40%;
    `}

  ${({ $variant, $color, theme }) =>
    $variant === "soft" &&
    css`
      background: ${theme.colors[$color][100]};
    `}

  ${({ $variant, theme, $color }) =>
    $variant === "striped" &&
    css`
      background-image: repeating-linear-gradient(
        45deg,
        ${theme.colors[$color][500]},
        ${theme.colors[$color][500]} 8px,
        ${theme.colors[$color][400]} 8px,
        ${theme.colors[$color][400]} 16px
      );
    `}
`;

export const Label = styled.span`
  margin-top: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: block;
`;
