import { FiUpload } from "react-icons/fi";
import styled from "styled-components";

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const UploadBox = styled.div<{ $error?: boolean; $disabled?: boolean }>`
  padding: 16px 18px;
  border: 1.5px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.danger[500] : theme.colors.gray[300]};
  border-radius: 10px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.15s ease-in-out;

  &:hover {
    background: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.gray[50] : theme.colors.gray[50]};
  }
`;

export const UploadTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span:first-child {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[800]};
  }

  span:last-child {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const UploadIcon = styled(FiUpload)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const FileListWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.gray[50]};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[800]};
`;

export const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
  padding: 4px;
  display: flex;

  &:hover {
    color: ${({ theme }) => theme.colors.danger[600]};
  }
`;
