import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Select } from "@components/atoms/Select/Select";
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

export default function SelectPage() {
  const [isSelected, setIsSelected] = useState("");
  const sampleOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const disabledOptions = [
    { label: "Enabled Option", value: "1" },
    { label: "Disabled Option", value: "2", disabled: true },
    { label: "Another Enabled Option", value: "3" },
  ];

  return (
    <DocsLayout>
      <Heading>Select</Heading>
      <SubTitle>
        드롭다운 형태로 값을 선택할 수 있는 컴포넌트입니다. label, helper,
        error, disabled, size 등을 지원합니다.
      </SubTitle>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Select options={sampleOptions} size="sm" placeholder="Small" />
        <Select options={sampleOptions} size="md" placeholder="Medium" />
        <Select options={sampleOptions} size="lg" placeholder="Large" />
      </Preview>

      {/* Placeholder */}
      <SectionTitle>Placeholder</SectionTitle>
      <Preview>
        <Select options={sampleOptions} placeholder="Select an option" />
      </Preview>

      {/* Label */}
      <SectionTitle>Label</SectionTitle>
      <Preview>
        <Select
          label="Favorite Color"
          options={[
            { label: "Red", value: "red" },
            { label: "Blue", value: "blue" },
            { label: "Green", value: "green" },
          ]}
        />
      </Preview>

      {/* Helper Text */}
      <SectionTitle>Helper Text</SectionTitle>
      <Preview>
        <Select
          label="Category"
          helperText="Choose a category from list"
          options={sampleOptions}
        />
      </Preview>

      {/* Error */}
      <SectionTitle>Error State</SectionTitle>
      <Preview>
        <Select
          label="Service Option"
          error
          helperText="This field is required"
          options={sampleOptions}
        />
      </Preview>

      {/* Disabled */}
      <SectionTitle>Disabled</SectionTitle>
      <Preview>
        <Select
          label="Disabled"
          disabled
          options={sampleOptions}
          placeholder="Disabled Select"
        />
      </Preview>

      {/* Disabled Option */}
      <SectionTitle>Disabled Option</SectionTitle>
      <Preview>
        <Select
          label="With Disabled Option"
          options={disabledOptions}
          placeholder="Some options are disabled"
        />
      </Preview>

      {/* Controlled */}
      <SectionTitle>Controlled Example</SectionTitle>
      <Preview>
        <Select
          label="Controlled Select"
          value={isSelected}
          options={sampleOptions}
          onChange={(v) => setIsSelected(v)}
        />
      </Preview>

      {/* FullWidth */}
      <SectionTitle>FullWidth</SectionTitle>
      <Preview>
        <Select
          fullWidth
          placeholder="Full width select example"
          options={sampleOptions}
        />
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "options", type: "SelectOption[]" },
          { name: "value", type: "string" },
          { name: "defaultValue", type: "string" },
          { name: "placeholder", type: "string" },
          { name: "label", type: "string" },
          { name: "helperText", type: "string" },
          { name: "error", type: "boolean", default: "false" },
          { name: "disabled", type: "boolean", default: "false" },
          { name: "fullWidth", type: "boolean", default: "false" },
          { name: "size", type: `"sm" | "md" | "lg"`, default: "md" },
          { name: "onChange", type: "(value: string) => void" },
        ]}
      />
    </DocsLayout>
  );
}
