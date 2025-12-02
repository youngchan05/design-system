import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Switch } from "@components/atoms";
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

export default function SwitchPage() {
  const [isSwitch, setIsSwitch] = useState(false);
  return (
    <DocsLayout>
      <Heading>Switch</Heading>
      <SubTitle>
        ON / OFF 상태를 전환하는 토글 컴포넌트로 size, error, disabled,
        helperText 등을 지원합니다.
      </SubTitle>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Switch label="Small" size="sm" />
        <Switch label="Medium" size="md" />
        <Switch label="Large" size="lg" />
      </Preview>

      {/* Label */}
      <SectionTitle>Label</SectionTitle>
      <Preview>
        <Switch label="Enable notifications" />
      </Preview>

      {/* Helper Text */}
      <SectionTitle>Helper Text</SectionTitle>
      <Preview>
        <Switch
          label="Auto backup"
          helperText="Your data will be saved automatically"
        />
      </Preview>

      {/* Error */}
      <SectionTitle>Error State</SectionTitle>
      <Preview>
        <Switch
          label="Service Access"
          error
          helperText="You must enable this option"
        />
      </Preview>

      {/* Disabled */}
      <SectionTitle>Disabled</SectionTitle>
      <Preview>
        <Switch label="Notifications" disabled />
        <Switch label="Auto Sync" checked disabled />
      </Preview>

      {/* Controlled */}
      <SectionTitle>Controlled Example</SectionTitle>
      <Preview>
        <Switch
          label="Toggle Me!"
          checked={isSwitch}
          onChange={() => setIsSwitch(!isSwitch)}
        />
      </Preview>

      {/* FullWidth */}
      <SectionTitle>Full Width</SectionTitle>
      <Preview>
        <Switch
          fullWidth
          label="This is a very long switch label that wraps into multiple lines when fullWidth is applied."
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
          { name: "disabled", type: "boolean" },
          { name: "checked", type: "boolean" },
          { name: "defaultChecked", type: "boolean" },
          { name: "onChange", type: "(e) => void" },
        ]}
      />
    </DocsLayout>
  );
}
