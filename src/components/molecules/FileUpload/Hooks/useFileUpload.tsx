// useFileUpload.ts
import { useState, useRef } from "react";
import type { FileUploadProps } from "../types/FileUpload.type";
import { useFileUploadCore } from "./useFileUploadCore";

export const useFileUpload = ({
  value,
  onChange,
  disabled,
  ...props
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;

  const [internalFiles, setInternalFiles] = useState<File[]>([]);
  const files = isControlled ? value! : internalFiles;

  const { merge, remove } = useFileUploadCore({
    ...props,
  });

  const update = (next: File[]) => {
    if (!isControlled) setInternalFiles(next);
    onChange?.(next);
  };

  const open = () => {
    if (!disabled) inputRef.current?.click();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (disabled) return;

    const dropped = Array.from(e.dataTransfer.files);
    update(merge(files, dropped));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const picked = Array.from(e.target.files || []);
    update(merge(files, picked));
  };

  const removeFile = (index: number) => {
    update(remove(files, index));
  };

  return {
    files,
    inputRef,
    open,
    onDrop,
    handleChange,
    removeFile,
  };
};
