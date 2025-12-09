import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Radio } from "@components/atoms";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";

export default function RadioPage() {
  return (
    <DocsLayout>
      <Heading>Radio</Heading>
      <SubTitle>
        단일 선택을 제공하는 선택 컴포넌트입니다. label, helper, error, disabled
        구성을 지원합니다.
      </SubTitle>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Radio label="Small" size="sm" />
        <Radio label="Medium" size="md" />
        <Radio label="Large" size="lg" />
      </Preview>

      {/* Label */}
      <SectionTitle>Label</SectionTitle>
      <Preview>
        <Radio label="Select this option" />
      </Preview>

      {/* Helper */}
      <SectionTitle>Helper Text</SectionTitle>
      <Preview>
        <Radio
          label="Newsletter"
          helperText="You will receive updates weekly"
        />
      </Preview>

      {/* Error */}
      <SectionTitle>Error State</SectionTitle>
      <Preview>
        <Radio
          label="Agreement"
          error
          helperText="You must select this option"
        />
      </Preview>

      {/* Disabled */}
      <SectionTitle>Disabled</SectionTitle>
      <Preview>
        <Radio label="Option A" disabled />
        <Radio label="Option B" checked disabled />
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "label", type: "string" },
          { name: "helperText", type: "string" },
          { name: "error", type: "boolean", default: "false" },
          { name: "fullWidth", type: "boolean", default: "false" },
          { name: "size", type: `"sm" | "md" | "lg"`, default: "md" },
          { name: "disabled", type: "boolean" },
          { name: "checked", type: "boolean" },
          { name: "defaultChecked", type: "boolean" },
          { name: "value", type: "string" },
          { name: "onChange", type: "(e) => void" },
        ]}
      />
    </DocsLayout>
  );
}
