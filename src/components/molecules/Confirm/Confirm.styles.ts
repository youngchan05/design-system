import styled, { keyframes } from "styled-components";

export const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9995;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const Dialog = styled.div`
  background: white;
  width: 360px;
  padding: 24px;
  border-radius: 12px;
  animation: ${fadeIn} 0.2s ease;

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Message = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 24px;
  line-height: 1.5;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const Button = styled.button<{ $variant: "default" | "danger" }>`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;

  background: ${({ $variant, theme }) =>
    $variant === "danger"
      ? theme.colors.danger[500]
      : theme.colors.primary[600]};
  color: white;

  &:hover {
    background: ${({ $variant, theme }) =>
      $variant === "danger"
        ? theme.colors.danger[600]
        : theme.colors.primary[700]};
  }
`;

export const CancelButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.gray[800]};

  &:hover {
    background: ${({ theme }) => theme.colors.gray[400]};
  }
`;
