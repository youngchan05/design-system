import styled from "styled-components";
import { useRef, useState } from "react";

export interface FileDropzoneProps {
  label?: string;
  required?: boolean;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
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

const DropZone = styled.div<{
  $dragging?: boolean;
  $error?: boolean;
  $disabled?: boolean;
}>`
  border: 2px dashed
    ${({ theme, $error }) =>
      $error ? theme.colors.danger[500] : theme.colors.gray[300]};
  background: ${({ theme, $dragging }) =>
    $dragging ? theme.colors.gray[50] : "white"};
  padding: 32px 20px;
  border-radius: 12px;
  text-align: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  color: ${({ theme }) => theme.colors.gray[600]};
  transition: 0.2s;
`;

const FileListWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[800]};
  }
`;

const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.danger[600]};
  cursor: pointer;
  font-size: 12px;
`;

const HelperText = styled.span<{ $error?: boolean }>`
  font-size: 13px;
  color: ${({ theme, $error }) =>
    $error ? theme.colors.danger[600] : theme.colors.gray[500]};
`;

export const FileDropzone = ({
  label,
  required,
  multiple,
  accept,
  disabled,
  error,
  helperText,
  onChange,
}: FileDropzoneProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [dragging, setDragging] = useState(false);

  const openSelect = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleFiles = (list: FileList | null) => {
    setFiles(list);
    onChange?.(list);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (disabled) return;

    const dtFiles = e.dataTransfer.files;
    handleFiles(dtFiles);
  };

  const removeFile = (idx: number) => {
    if (!files) return;
    const dt = new DataTransfer();

    Array.from(files).forEach((f, i) => {
      if (idx !== i) dt.items.add(f);
    });

    handleFiles(dt.files);
  };

  return (
    <Wrapper>
      {label && (
        <Label>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}

      <DropZone
        $dragging={dragging}
        $error={error}
        $disabled={disabled}
        onClick={openSelect}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
      >
        파일을 드래그하거나 클릭하여 업로드하세요
        <input
          ref={inputRef}
          type="file"
          hidden
          multiple={multiple}
          accept={accept}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </DropZone>

      {files && (
        <FileListWrapper>
          {Array.from(files).map((f, idx) => (
            <div key={idx}>
              {f.name}
              <RemoveBtn onClick={() => removeFile(idx)}>삭제</RemoveBtn>
            </div>
          ))}
        </FileListWrapper>
      )}

      {helperText && <HelperText $error={error}>{helperText}</HelperText>}
    </Wrapper>
  );
};
