import styled from "styled-components";

export const Label = styled.label<{ required?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: ${({ required }) => (required ? '"*"' : '""')};
    color: #e5484d;
    font-size: 14px;
    font-weight: 600;
  }
`;

const Helper = styled.span<{ $error?: boolean }>`
  font-size: 12px;
  color: ${({ theme, $error }) =>
    $error ? "#E5484D" : theme.colors.gray[500]};
`;

export const Text = {
  Label,
  Helper,
};
