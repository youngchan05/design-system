import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { FiMail, FiSearch, FiLock } from "react-icons/fi";
import { Input } from "@components/atoms";

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

export default function InputPage() {
  return (
    <DocsLayout>
      <Heading>Input</Heading>
      <SubTitle>
        텍스트 입력을 위한 기본 필드로 label, helper, error, icon, clear 기능을
        포함합니다.
      </SubTitle>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Input placeholder="Small" size="sm" />
        <Input placeholder="Medium" size="md" />
        <Input placeholder="Large" size="lg" />
      </Preview>

      {/* Label */}
      <SectionTitle>With Label</SectionTitle>
      <Preview>
        <Input label="Email" placeholder="example@mail.com" />
      </Preview>

      {/* Helper */}
      <SectionTitle>With Helper Text</SectionTitle>
      <Preview>
        <Input
          label="Email"
          placeholder="example@mail.com"
          helperText="We will never share your email."
        />
      </Preview>

      {/* Error */}
      <SectionTitle>Error State</SectionTitle>
      <Preview>
        <Input
          label="Password"
          placeholder="Enter password"
          error
          helperText="Incorrect password"
        />
      </Preview>

      {/* Icons */}
      <SectionTitle>With Icons</SectionTitle>
      <Preview>
        <Input leftIcon={<FiMail />} placeholder="Email" />
        <Input rightIcon={<FiSearch />} placeholder="Search" />
        <Input leftIcon={<FiLock />} type="password" placeholder="Password" />
      </Preview>

      {/* Clearable */}
      <SectionTitle>Clearable</SectionTitle>
      <Preview>
        <Input clearable placeholder="Type something..." />
      </Preview>

      {/* Password Toggle */}
      <SectionTitle>Password Toggle</SectionTitle>
      <Preview>
        <Input type="password" label="Password" placeholder="Enter password" />
      </Preview>

      {/* Disabled */}
      <SectionTitle>Disabled</SectionTitle>
      <Preview>
        <Input label="Disabled" placeholder="Not editable" disabled />
      </Preview>

      {/* Full Width */}
      <SectionTitle>Full Width</SectionTitle>
      <Preview>
        <Input fullWidth placeholder="Full width input" />
      </Preview>

      {/* PROPS TABLE */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "label", type: "string" },
          { name: "helperText", type: "string" },
          { name: "error", type: "boolean", default: "false" },
          { name: "fullWidth", type: "boolean", default: "false" },
          { name: "size", type: `"sm" | "md" | "lg"`, default: "md" },
          { name: "leftIcon", type: "ReactNode" },
          { name: "rightIcon", type: "ReactNode" },
          { name: "required", type: "boolean" },
          { name: "clearable", type: "boolean", default: "false" },
          { name: "type", type: "string" },
          { name: "disabled", type: "boolean" },
        ]}
      />
    </DocsLayout>
  );
}
