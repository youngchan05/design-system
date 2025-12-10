import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $fullWidth?: boolean }>`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px;
`;

export const Trigger = styled.button<{
  $disabled?: boolean;
  $error?: boolean;
  $open?: boolean;
}>`
  position: relative;
`;

export const Arrow = styled.span<{ $open?: boolean }>`
  margin-left: 8px;
  display: inline-block;
  transition: transform 0.2s;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`;

export const Placeholder = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Menu = styled.ul<{ $open?: boolean }>`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  max-height: 220px;
  overflow-y: auto;

  background: white;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 4px 0;

  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);

  z-index: 100;
  display: ${({ $open }) => ($open ? "block" : "none")};

  animation: fadeIn 0.12s ease;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const Option = styled.li<{
  $highlight?: boolean;
  $disabled?: boolean;
}>`
  padding: 10px 14px;
  font-size: 14px;
  cursor: pointer;
  text-align: left;

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `}

  ${({ $highlight, theme }) =>
    $highlight &&
    css`
      background: ${theme.colors.gray[100]};
    `}

  &:hover {
    ${({ $disabled, theme }) =>
      !$disabled &&
      css`
        background: ${theme.colors.gray[100]};
      `}
  }
`;
