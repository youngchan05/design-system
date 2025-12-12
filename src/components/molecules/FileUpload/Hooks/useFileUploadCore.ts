// useFileUploadCore.ts

import { toast } from "@components/molecules/Toast/toast";
import type { FileUploadCoreOptions } from "../types/FileUpload.type";

export const useFileUploadCore = (options: FileUploadCoreOptions = {}) => {
  const {
    maxFiles,
    maxSize,
    maxTotalSize,
    allowedTypes,
    deniedTypes,
    preventDuplicates = true,
  } = options;

  // 확장자 가져오기
  const getExt = (file: File) =>
    file.name.split(".").pop()?.toLowerCase() || "";

  // 1) 파일 타입 검사
  const validateFileType = (file: File): boolean => {
    const ext = getExt(file);

    if (allowedTypes && !allowedTypes.includes(ext)) {
      toast.error(`'${ext}' 파일은 업로드할 수 없습니다.`);
      return false;
    }
    if (deniedTypes && deniedTypes.includes(ext)) {
      toast.error(`'${ext}' 파일은 금지된 파일입니다.`);
      return false;
    }
    return true;
  };

  // 2) 단일 파일 사이즈 검사
  const validateFileSize = (file: File): boolean => {
    if (maxSize && file.size > maxSize) {
      toast.error(
        `${file.name}은(는) 파일 크기 제한(${formatBytes(
          maxSize
        )})을 초과했습니다.`
      );
      return false;
    }
    return true;
  };

  // 3) 전체 파일 사이즈 검사
  const validateTotalSize = (files: File[]): boolean => {
    if (!maxTotalSize) return true;

    const total = files.reduce((sum, f) => sum + f.size, 0);

    if (total > maxTotalSize) {
      toast.error(
        `파일 총 용량이 제한(${formatBytes(maxTotalSize)})을 초과했습니다.`
      );
      return false;
    }
    return true;
  };

  // 4) 중복 제거
  const dedupeFiles = (files: File[]) => {
    const map = new Map();
    files.forEach((f) => {
      const key = `${f.name}-${f.size}-${f.lastModified}`;
      if (!map.has(key)) map.set(key, f);
    });
    return Array.from(map.values());
  };

  // 5) 파일 병합 + 검증
  const mergeFiles = (oldFiles: File[], newFiles: File[]) => {
    const valid = newFiles.filter(
      (f) => validateFileType(f) && validateFileSize(f)
    );

    let merged = [...oldFiles, ...valid];

    // 중복 제거
    if (preventDuplicates) merged = dedupeFiles(merged);

    // 최대 개수 체크
    if (maxFiles && merged.length > maxFiles) {
      toast.error(`최대 ${maxFiles}개까지 업로드할 수 있습니다.`);
      return oldFiles; // 추가 실패 → 기존 파일 유지
    }

    // 전체 용량 체크
    if (!validateTotalSize(merged)) {
      return oldFiles; // 용량 초과 → 추가 실패
    }

    return merged;
  };

  // 6) 파일 삭제
  const removeFile = (files: File[], index: number) => {
    return files.filter((_, i) => i !== index);
  };

  return { merge: mergeFiles, remove: removeFile };
};

// 사이즈 변환 유틸
const formatBytes = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
};
