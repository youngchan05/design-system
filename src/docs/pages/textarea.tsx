import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Textarea } from "@components/atoms";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";

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

      {/* label */}
      <SectionTitle>With Label</SectionTitle>
      <Preview>
        <Textarea label="text" placeholder="text..." />
        <Textarea required label="required" placeholder="required..." />
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
          { name: "required", type: "boolean" },
          { name: "clearable", type: "boolean", default: "true" },
          { name: "disabled", type: "boolean" },
        ]}
      />
    </DocsLayout>
  );
}
