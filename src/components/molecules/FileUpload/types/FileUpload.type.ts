export interface FileUploadProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  accept?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (files: File[]) => void;
  value?: File[];
  maxFiles?: number;
  preventDuplicates?: boolean;
}

export interface FileUploadCoreOptions {
  maxFiles?: number;
  maxSize?: number; // 단일 파일 최대 사이즈 (bytes)
  maxTotalSize?: number; // 전체 파일 합산 사이즈 (bytes)
  allowedTypes?: string[]; // 허용 확장자 예: ["jpg", "png", "pdf"]
  deniedTypes?: string[]; // 차단 확장자 예: ["exe"]
  preventDuplicates?: boolean;
}
