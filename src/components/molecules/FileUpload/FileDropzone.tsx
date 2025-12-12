import { useState } from "react";
import { useFileUpload } from "./Hooks/useFileUpload";
import type {
  FileUploadCoreOptions,
  FileUploadProps,
} from "./types/FileUpload.type";
import {
  FileListWrapper,
  RemoveBtn,
  UploadWrapper,
} from "./styles/FileUpload.style";
import { Text } from "@components/atoms";
import { DropZoneFile } from "./styles/FileDropzone.style";

export const FileDropzone = (
  props: FileUploadProps & FileUploadCoreOptions
) => {
  const { label, required, helperText, error, disabled, accept, multiple } =
    props;
  const { files, inputRef, open, onDrop, handleChange, removeFile } =
    useFileUpload(props);

  const [dragging, setDragging] = useState(false);

  return (
    <UploadWrapper>
      {label && <Text.Label required={required}>{label}</Text.Label>}

      <DropZoneFile
        $dragging={dragging}
        $error={error}
        $disabled={disabled}
        onClick={open}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          setDragging(false);
          onDrop(e);
        }}
      >
        파일을 드래그하거나 클릭하여 업로드하세요
        <input
          ref={inputRef}
          type="file"
          hidden
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
        />
      </DropZoneFile>

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

      {helperText && <Text.Helper $error={error}>{helperText}</Text.Helper>}
    </UploadWrapper>
  );
};
