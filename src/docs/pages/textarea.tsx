import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Textarea } from "@components/atoms";

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;
const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 24px;
`;
const SectionTitle = styled.h2`
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export default function TextareaPage() {
  return (
    <DocsLayout>
      <Heading>Textarea</Heading>
      <SubTitle>
        여러 줄 텍스트 입력을 위한 컴포넌트로 autoSize, error, helper, disabled
        등을 포함합니다.
      </SubTitle>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Textarea placeholder="Small..." size="sm" />
        <Textarea placeholder="Medium..." size="md" />
        <Textarea placeholder="Large..." size="lg" />
      </Preview>

      {/* autoSize */}
      <SectionTitle>Auto Size</SectionTitle>
      <Preview>
        <Textarea autoSize placeholder="Type..." />
      </Preview>

      {/* Error */}
      <SectionTitle>Error State</SectionTitle>
      <Preview>
        <Textarea error helperText="Please check again" />
      </Preview>

      {/* Disabled */}
      <SectionTitle>Disabled</SectionTitle>
      <Preview>
        <Textarea placeholder="Not editable" disabled />
      </Preview>

      {/* Full Width */}
      <SectionTitle>Full Width</SectionTitle>
      <Preview>
        <Textarea fullWidth placeholder="Full width textarea" />
      </Preview>

      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "label", type: "string" },
          { name: "helperText", type: "string" },
          { name: "error", type: "boolean", default: "false" },
          { name: "fullWidth", type: "boolean", default: "false" },
          { name: "size", type: `"sm" | "md" | "lg"`, default: "md" },
          { name: "autoSize", type: "boolean", default: "false" },
          { name: "disabled", type: "boolean" },
        ]}
      />
    </DocsLayout>
  );
}
