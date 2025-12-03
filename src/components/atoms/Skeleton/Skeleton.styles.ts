import styled, { css, keyframes } from "styled-components";

const shimmerKeyframes = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const pulseKeyframes = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const StyledSkeleton = styled.div<{
  $width?: number | string;
  $height?: number | string;
  $circle: boolean;
  $variant: "rect" | "text" | "circle";
  $animation: "pulse" | "shimmer" | "none";
  $rounded: boolean;
}>`
  background: ${({ theme }) => theme.colors.gray[200]};
  position: relative;
  overflow: hidden;

  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width || "100%"};

  ${({ $variant, $height }) => {
    if ($variant === "text") {
      return css`
        height: ${typeof $height === "number"
          ? `${$height}px`
          : $height || "12px"};
        margin-bottom: 8px;
      `;
    }
    return css`
      height: ${typeof $height === "number"
        ? `${$height}px`
        : $height || "16px"};
    `;
  }}

  ${({ $circle, $width, $height }) =>
    $circle &&
    css`
      border-radius: 50%;
      width: ${typeof $width === "number" ? `${$width}px` : $width || "40px"};
      height: ${typeof $height === "number"
        ? `${$height}px`
        : $height || "40px"};
    `}

  ${({ $rounded, $circle }) =>
    $rounded && !$circle
      ? css`
          border-radius: 8px;
        `
      : css``}

  ${({ $animation }) =>
    $animation === "pulse" &&
    css`
      animation: ${pulseKeyframes} 1.4s ease-in-out infinite;
    `}

  ${({ $animation, theme }) =>
    $animation === "shimmer" &&
    css`
      background: linear-gradient(
        90deg,
        ${theme.colors.gray[200]} 0%,
        ${theme.colors.gray[100]} 50%,
        ${theme.colors.gray[200]} 100%
      );
      background-size: 200% 100%;
      animation: ${shimmerKeyframes} 1.4s ease-in-out infinite;
    `}
`;
