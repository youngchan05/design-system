import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { useState } from "react";
import { FileUpload } from "@components/molecules";

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;

const Sub = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export default function FileUploadPage() {
  const [basicFiles, setBasicFiles] = useState<FileList | null>(null);
  const [multiFiles, setMultiFiles] = useState<FileList | null>(null);
  const [errorFiles, setErrorFiles] = useState<FileList | null>(null);

  return (
    <DocsLayout>
      <Heading>File Upload</Heading>
      <Sub>
        파일을 업로드할 수 있는 입력 컴포넌트입니다. 단일 업로드, 다중 업로드,
        확장자 제한, 에러 상태, 삭제 기능 등을 지원합니다.
      </Sub>

      {/* 기본 */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <FileUpload
          label="첨부 파일"
          onChange={(files) => setBasicFiles(files)}
        />
        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {basicFiles
            ? Array.from(basicFiles)
                .map((f) => f.name)
                .join(", ")
            : "-"}
        </div>
      </Preview>

      {/* Multiple */}
      <SectionTitle>Multiple Upload</SectionTitle>
      <Preview>
        <FileUpload
          label="여러 파일 업로드"
          multiple
          onChange={(files) => setMultiFiles(files)}
        />
        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {multiFiles
            ? Array.from(multiFiles)
                .map((f) => f.name)
                .join(", ")
            : "-"}
        </div>
      </Preview>

      {/* Accept */}
      <SectionTitle>Accept (파일 형식 제한)</SectionTitle>
      <Preview>
        <FileUpload label="이미지 파일만" accept="image/*" />
      </Preview>

      {/* Error */}
      <SectionTitle>Error State</SectionTitle>
      <Preview>
        <FileUpload
          label="첨부 파일"
          error
          helperText="파일을 업로드해주세요."
          onChange={(files) => setErrorFiles(files)}
        />
      </Preview>

      {/* Props Table */}
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
            description: "필수 표시",
          },
          {
            name: "disabled",
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
            name: "accept",
            type: "string",
            description: "파일 확장자 제한 (예: 'image/*')",
          },
          {
            name: "error",
            type: "boolean",
            default: "false",
            description: "에러 상태 표시",
          },
          {
            name: "helperText",
            type: "string",
            description: "에러/설명 텍스트",
          },
          {
            name: "onChange",
            type: "(files: FileList | null) => void",
            description: "파일 변경 시 호출",
          },
        ]}
      />
    </DocsLayout>
  );
}
