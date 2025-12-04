import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { useState } from "react";
import { FileDropzone } from "@components/molecules/FileUpload/FileDropzone";
import { FileThumbnailList } from "@components/molecules/FileUpload/FileThumbnailList";

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

export default function FileDropzonePage() {
  const [files1, setFiles1] = useState<FileList | null>(null);
  const [filesMulti, setFilesMulti] = useState<FileList | null>(null);
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const [previewFiles, setPreviewFiles] = useState<FileList | null>(null);

  return (
    <DocsLayout>
      <Heading>File Dropzone</Heading>
      <Sub>
        파일 업로드를 드래그 앤 드롭 방식으로 제공하는 컴포넌트입니다. 클릭
        업로드, 다중 파일, 확장자 제한, 이미지 미리보기 등 다양한 기능을
        지원합니다.
      </Sub>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <FileDropzone
          label="파일 업로드"
          onChange={(files) => setFiles1(files)}
        />

        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {files1
            ? Array.from(files1)
                .map((f) => f.name)
                .join(", ")
            : "-"}
        </div>
      </Preview>

      {/* Multiple */}
      <SectionTitle>Multiple Files</SectionTitle>
      <Preview>
        <FileDropzone
          label="여러 파일 업로드"
          multiple
          onChange={(files) => setFilesMulti(files)}
        />

        <div style={{ marginTop: 8 }}>
          선택된 파일:{" "}
          {filesMulti
            ? Array.from(filesMulti)
                .map((f) => f.name)
                .join(", ")
            : "-"}
        </div>
      </Preview>

      {/* Accept */}
      <SectionTitle>Accept Types</SectionTitle>
      <Preview>
        <FileDropzone
          label="이미지 파일만 업로드"
          accept="image/*"
          onChange={(files) => setImageFiles(files)}
        />
      </Preview>

      {/* Preview images */}
      <SectionTitle>Image Preview</SectionTitle>
      <Preview>
        <FileDropzone
          label="이미지 업로드"
          accept="image/*"
          onChange={setPreviewFiles}
        />

        {previewFiles && (
          <FileThumbnailList
            files={Array.from(previewFiles)}
            onRemove={() => {}}
          />
        )}
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
            description: "여러 파일 업로드 허용",
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
            description: "에러 상태",
          },
          {
            name: "helperText",
            type: "string",
            description: "에러 또는 설명 텍스트",
          },
          {
            name: "onChange",
            type: "(files: FileList | null) => void",
            description: "파일 변경 시 호출되는 콜백",
          },
        ]}
      />
    </DocsLayout>
  );
}
