import styled, { css } from "styled-components";
import type { AvatarShape, AvatarSize } from "./Avatar.types";

const sizeStyles: Record<AvatarSize, string> = {
  xs: "24px",
  sm: "32px",
  md: "40px",
  lg: "48px",
  xl: "56px",
};

export const AvatarWrapper = styled.div<{
  $size: AvatarSize;
  $shape: AvatarShape;
}>`
  width: ${({ $size }) => sizeStyles[$size]};
  height: ${({ $size }) => sizeStyles[$size]};
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 600;
  user-select: none;

  ${({ $shape }) =>
    $shape === "circle" &&
    css`
      border-radius: 50%;
    `}

  ${({ $shape }) =>
    $shape === "rounded" &&
    css`
      border-radius: 12px;
    `}

  ${({ $shape }) =>
    $shape === "square" &&
    css`
      border-radius: 6px;
    `}
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
