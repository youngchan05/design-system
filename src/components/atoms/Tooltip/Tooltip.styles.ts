import styled, { css } from "styled-components";

export const TooltipBox = styled.div<{ $placement: string }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.gray[800]};
  color: white;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 6px;
  white-space: nowrap;
  z-index: 9999;
  transition: opacity 0.2s;
  pointer-events: none;

  ${({ $placement }) =>
    $placement === "top" &&
    css`
      top: 0;
      left: 50%;
      transform: translate(-50%, -100%);
    `}
  ${({ $placement }) =>
    $placement === "bottom" &&
    css`
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      .arrow {
        left: 50%;
        top: 0;
        transform: translate(-40%, -50%) rotate(45deg);
      }
    `}
  ${({ $placement }) =>
    $placement === "left" &&
    css`
      top: 50%;
      left: 0;
      transform: translate(-100%, -50%);
      .arrow {
        right: 0;
        top: 50%;
        transform: translate(40%, -50%) rotate(45deg);
      }
    `}
  ${({ $placement }) =>
    $placement === "right" &&
    css`
      top: 50%;
      right: 0;
      transform: translate(100%, -50%);
      .arrow {
        left: 0;
        top: 50%;
        transform: translate(-40%, -50%) rotate(45deg);
      }
    `}
`;

export const Arrow = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.gray[800]};
  transform: rotate(45deg);
  z-index: -1;
`;
