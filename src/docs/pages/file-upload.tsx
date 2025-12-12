import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { useState } from "react";
import { FileUpload, FileDropzone } from "@components/molecules";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";

export default function FileUploadPage() {
  const [basicFiles, setBasicFiles] = useState<File[]>([]);
  const [multiFiles, setMultiFiles] = useState<File[]>([]);
  const [maxFiles, setMaxFiles] = useState<File[]>([]);
  const [dzBasicFiles, setDzBasicFiles] = useState<File[]>([]);
  const [dzMultiFiles, setDzMultiFiles] = useState<File[]>([]);
  const [dzMaxFiles, setDzMaxFiles] = useState<File[]>([]);

  return (
    <DocsLayout>
      {/* Header */}
      <Heading>File Upload & Dropzone</Heading>
      <SubTitle>
        파일을 업로드할 수 있는 컴포넌트입니다. 클릭 업로드(FileUpload)와 드래그
        앤 드랍(FileDropzone) 방식을 모두 지원하며, 파일 제한, 에러 상태,
        미리보기 확장 등이 가능합니다.
      </SubTitle>

      {/* ============================= */}
      {/* FileUpload */}
      {/* ============================= */}
      <SectionTitle>FileUpload (클릭 업로드)</SectionTitle>

      {/* Basic */}
      <Preview title="기본 업로드">
        <FileUpload
          label="첨부 파일"
          onChange={(files) => setBasicFiles(files)}
        />
        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {basicFiles.length ? basicFiles.map((f) => f.name).join(", ") : "-"}
        </div>
      </Preview>

      {/* Multiple */}
      <Preview title="여러 파일 업로드">
        <FileUpload
          label="여러 파일 업로드"
          multiple
          onChange={(files) => setMultiFiles(files)}
        />
        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {multiFiles.length ? multiFiles.map((f) => f.name).join(", ") : "-"}
        </div>
      </Preview>

      {/* MaxFiles */}
      <Preview title="최대 업로드 개수 제한">
        <FileUpload
          label="최대 2개 업로드"
          multiple
          maxFiles={2}
          value={maxFiles}
          onChange={(files) => setMaxFiles(files)}
        />
        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {maxFiles.length ? maxFiles.map((f) => f.name).join(", ") : "-"}
        </div>
      </Preview>

      {/* Accept */}
      <Preview title="파일 확장자 제한 (accept)">
        <FileUpload
          label="이미지 파일만 업로드"
          accept="image/*"
          allowedTypes={["jpg", "png", "jpge"]}
        />
      </Preview>

      {/* Error */}
      <Preview title="에러 상태">
        <FileUpload
          label="첨부 파일"
          error
          helperText="파일을 업로드해주세요."
        />
      </Preview>

      {/* ============================= */}
      {/* Dropzone */}
      {/* ============================= */}
      <SectionTitle>FileDropzone (드래그 & 클릭 업로드)</SectionTitle>

      {/* Basic */}
      <Preview title="기본 드랍존 업로드">
        <FileDropzone
          label="파일 드롭존"
          onChange={(files) => setDzBasicFiles(files)}
        />
        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {dzBasicFiles.length
            ? dzBasicFiles.map((f) => f.name).join(", ")
            : "-"}
        </div>
      </Preview>

      {/* Multiple */}
      <Preview title="여러 파일 드랍존 업로드">
        <FileDropzone
          label="여러 파일 드롭"
          multiple
          onChange={(files) => setDzMultiFiles(files)}
        />
        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {dzMultiFiles.length
            ? dzMultiFiles.map((f) => f.name).join(", ")
            : "-"}
        </div>
      </Preview>

      {/* MaxFiles */}
      <Preview title="최대 업로드 개수 제한 (Dropzone)">
        <FileDropzone
          label="최대 2개 업로드"
          multiple
          maxFiles={2}
          value={dzMaxFiles}
          onChange={(files) => setDzMaxFiles(files)}
        />
        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {dzMaxFiles.length ? dzMaxFiles.map((f) => f.name).join(", ") : "-"}
        </div>
      </Preview>

      {/* Accept */}
      <Preview title="확장자 제한 (Dropzone)">
        <FileDropzone
          label="이미지 파일만"
          accept="image/*"
          allowedTypes={["jpg", "png", "jpge"]}
        />
      </Preview>

      {/* Error */}
      <Preview title="에러 상태 (Dropzone)">
        <FileDropzone
          label="파일 업로드"
          error
          helperText="파일을 업로드해주세요."
        />
      </Preview>

      {/* Props */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          {
            name: "label",
            type: "string",
            description: "필드 라벨 텍스트",
          },
          {
            name: "required",
            type: "boolean",
            default: "false",
          },
          {
            name: "multiple",
            type: "boolean",
            default: "false",
            description: "여러 개의 파일 업로드 허용",
          },
          {
            name: "maxFiles",
            type: "number",
            description: "최대 업로드 개수 제한",
          },
          {
            name: "accept",
            type: "string",
            description: "파일 확장자 제한 (예: 'image/*')",
          },
          {
            name: "maxSize",
            type: "number",
            description: "단일 파일 최대 용량(bytes)",
          },
          {
            name: "maxTotalSize",
            type: "number",
            description: "전체 파일 용량 제한(bytes)",
          },
          {
            name: "error",
            type: "boolean",
            description: "에러 상태 표시",
          },
          {
            name: "helperText",
            type: "string",
          },
          {
            name: "onChange",
            type: "(files: File[]) => void",
            description: "파일 변경 시 호출",
          },
        ]}
      />
    </DocsLayout>
  );
}
