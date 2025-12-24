import styled, { css, keyframes } from "styled-components";
import type { ToastOptions, ToastPosition } from "./Toast.types";
import { getIntentPalette } from "@components/utils.style";

const fadeSlideIn = keyframes`
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeSlideOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-8px); }
`;

export const ToastWrapper = styled.div<{
  $position: ToastPosition;
}>`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;

  ${({ $position }) => {
    const [vertical, horizontal] = $position.split("-");
    return css`
      ${vertical === "top" ? "top: 20px;" : "bottom: 20px;"}
      ${horizontal === "left" && "left: 20px;"}
      ${horizontal === "center" &&
      `
        left: 50%;
        transform: translateX(-50%);
      `}
      ${horizontal === "right" && "right: 20px;"}
    `;
  }}
`;

export const ToastBox = styled.div<{
  $variant: ToastOptions["variant"];
  $leave: boolean;
}>`
  pointer-events: auto;
  min-width: 240px;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  background: ${({ theme, $variant }) => {
    return $variant
      ? getIntentPalette(theme, $variant)[600]
      : theme.colors.gray[700];
    // switch ($variant) {
    //   case "success":
    //     return theme.colors.success[600];
    //   case "danger":
    //     return theme.colors.danger[600];
    //   case "warning":
    //     return theme.colors.warning[600];
    //   case "info":
    //     return theme.colors.primary[600];
    //   default:
    //     return theme.colors.gray[700];
    // }
  }};

  animation: ${({ $leave }) =>
    $leave
      ? css`
          ${fadeSlideOut} 0.25s forwards
        `
      : css`
          ${fadeSlideIn} 0.25s ease-out
        `};
`;
