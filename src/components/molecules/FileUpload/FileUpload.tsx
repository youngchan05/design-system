// FileUpload.tsx
import { FiX } from "react-icons/fi";
import { useFileUpload } from "./Hooks/useFileUpload";
import type {
  FileUploadCoreOptions,
  FileUploadProps,
} from "./types/FileUpload.type";
import {
  UploadWrapper,
  UploadBox,
  UploadTextBox,
  UploadIcon,
  FileListWrapper,
  FileItem,
  RemoveBtn,
} from "./styles/FileUpload.style";
import { Text } from "@components/atoms";

export const FileUpload = (props: FileUploadProps & FileUploadCoreOptions) => {
  const { label, required, helperText, error, disabled, accept, multiple } =
    props;

  const { files, inputRef, open, onDrop, handleChange, removeFile } =
    useFileUpload(props);

  return (
    <UploadWrapper>
      {label && <Text.Label required={required}>{label}</Text.Label>}

      <UploadBox
        $error={error}
        $disabled={disabled}
        onClick={open}
        onDrop={onDrop}
      >
        <UploadTextBox>
          <span>
            {files?.length ? `${files?.length}개의 파일 선택됨` : "파일 업로드"}
          </span>
          <span>{multiple ? "여러 파일 선택 가능" : "1개 선택 가능"}</span>
        </UploadTextBox>

        <UploadIcon />

        <input
          ref={inputRef}
          type="file"
          hidden
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
        />
      </UploadBox>

      {files?.length > 0 && (
        <FileListWrapper>
          {files.map((f, i) => (
            <FileItem key={i}>
              {f.name}
              <RemoveBtn onClick={() => removeFile(i)}>
                <FiX size={14} />
              </RemoveBtn>
            </FileItem>
          ))}
        </FileListWrapper>
      )}

      {helperText && <Text.Helper>{helperText}</Text.Helper>}
    </UploadWrapper>
  );
};
