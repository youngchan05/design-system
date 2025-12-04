import styled from "styled-components";
import { useRef, useState } from "react";

export interface FileUploadProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  accept?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (files: FileList | null) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

const Required = styled.span`
  color: ${({ theme }) => theme.colors.primary[600]};
  margin-left: 4px;
`;

const UploadBox = styled.div<{ $error?: boolean; $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.danger[500] : theme.colors.gray[200]};
  border-radius: 8px;
  background: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[50] : "white"};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${({ theme, $disabled }) =>
      $disabled ? "white" : theme.colors.gray[50]};
  }
`;

const FileListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.danger[600]};
  font-size: 12px;
  cursor: pointer;
`;

const HelperText = styled.span<{ $error?: boolean }>`
  font-size: 13px;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.danger[600] : theme.colors.gray[500]};
`;

export const FileUpload = ({
  label,
  required,
  disabled,
  multiple,
  accept,
  error,
  helperText,
  onChange,
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSelect = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    setFiles(fileList);
    onChange?.(fileList);
  };

  const removeFile = (index: number) => {
    if (!files) return;

    const dt = new DataTransfer();
    Array.from(files).forEach((file, i) => {
      if (i !== index) dt.items.add(file);
    });

    const newFiles = dt.files;
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  return (
    <Wrapper>
      {label && (
        <Label>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}

      <UploadBox $disabled={disabled} $error={error} onClick={handleSelect}>
        <span>{files?.length ? "파일 선택됨" : "파일 선택"}</span>
        <input
          ref={inputRef}
          type="file"
          hidden
          disabled={disabled}
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />
      </UploadBox>

      {files && (
        <FileListWrapper>
          {Array.from(files).map((file, i) => (
            <div key={i}>
              {file.name}
              <RemoveBtn onClick={() => removeFile(i)}>삭제</RemoveBtn>
            </div>
          ))}
        </FileListWrapper>
      )}

      {helperText && <HelperText $error={error}>{helperText}</HelperText>}
    </Wrapper>
  );
};
