import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Checkbox } from "@components/atoms";
import { useState } from "react";

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

export default function CheckboxPage() {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <DocsLayout>
      <Heading>Checkbox</Heading>
      <SubTitle>
        선택 기능을 제공하는 체크박스로 label, helper, error, indeterminate,
        다양한 상태를 지원합니다.
      </SubTitle>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Checkbox label="Small" size="sm" />
        <Checkbox label="Medium" size="md" />
        <Checkbox label="Large" size="lg" />
      </Preview>

      {/* Label */}
      <SectionTitle>Label</SectionTitle>
      <Preview>
        <Checkbox label="I agree to the terms" />
      </Preview>

      {/* Helper */}
      <SectionTitle>Helper Text</SectionTitle>
      <Preview>
        <Checkbox
          label="Newsletter"
          helperText="Receive weekly updates via email"
        />
      </Preview>

      {/* Error */}
      <SectionTitle>Error State</SectionTitle>
      <Preview>
        <Checkbox
          label="Agreement"
          error
          helperText="You must agree before continuing"
        />
      </Preview>

      {/* Disabled */}
      <SectionTitle>Disabled</SectionTitle>
      <Preview>
        <Checkbox label="Option A" disabled />
        <Checkbox label="Option B" checked disabled />
      </Preview>

      {/* Indeterminate */}
      <SectionTitle>Indeterminate</SectionTitle>
      <Preview>
        <Checkbox label="Select All" indeterminate />
      </Preview>

      {/* Controlled */}
      <SectionTitle>Controlled Checkbox</SectionTitle>
      <Preview>
        <Checkbox
          label="Click Me!"
          checked={isCheck}
          onChange={() => setIsCheck(!isCheck)}
        />
      </Preview>

      {/* Full Width */}
      <SectionTitle>Full Width</SectionTitle>
      <Preview>
        <Checkbox
          fullWidth
          label="This is a very long checkbox label that wraps into multiple lines when fullWidth is enabled."
        />
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
          { name: "indeterminate", type: "boolean", default: "false" },
          { name: "disabled", type: "boolean" },
          { name: "checked", type: "boolean" },
          { name: "defaultChecked", type: "boolean" },
          { name: "onChange", type: "(e) => void" },
        ]}
      />
    </DocsLayout>
  );
}
