import styled, { keyframes, css } from "styled-components";
import type { ModalSize } from "./Modal.types";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45); /* slate 계열 느낌 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  animation: ${fadeIn} 0.16s ease-out;
`;

const sizeStyles: Record<ModalSize, ReturnType<typeof css>> = {
  sm: css`
    max-width: 360px;
  `,
  md: css`
    max-width: 520px;
  `,
  lg: css`
    max-width: 720px;
  `,
  full: css`
    max-width: 960px;
    width: 100%;
    height: 100%;
    border-radius: 0;
  `,
};

export const Dialog = styled.div<{ $size: ModalSize }>`
  position: relative;
  width: 100%;
  ${({ $size }) => sizeStyles[$size]};
  margin: 0 16px;

  background: ${({ theme }) => theme.colors.gray[50] ?? "#fff"};
  border-radius: 16px;
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.26);
  animation: ${scaleIn} 0.18s ease-out;

  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 80px);
  overflow: hidden;
`;

export const Header = styled.div`
  padding: 18px 20px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 999px;
  line-height: 0;
  color: ${({ theme }) => theme.colors.gray[500]};

  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const Body = styled.div`
  padding: 16px 20px;
  overflow-y: auto;
`;

export const Footer = styled.div`
  padding: 14px 20px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
