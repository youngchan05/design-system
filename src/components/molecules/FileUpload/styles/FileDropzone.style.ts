import styled from "styled-components";

export const DropZoneFile = styled.div<{
  $dragging?: boolean;
  $error?: boolean;
  $disabled?: boolean;
}>`
  padding: 28px 20px;
  border-radius: 12px;
  border: 1.5px dashed
    ${({ theme, $error }) =>
      $error ? theme.colors.danger[500] : theme.colors.gray[300]};
  background: ${({ theme, $dragging }) =>
    $dragging ? theme.colors.info[50] : theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme, $disabled }) =>
      $disabled ? "white" : theme.colors.gray[50]};
  }
`;
