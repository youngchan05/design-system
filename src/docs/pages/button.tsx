import { Button } from "@components/atoms";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

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

export default function ButtonPage() {
  return (
    <DocsLayout>
      <Heading>Button</Heading>
      <SubTitle>사용자 액션을 트리거하는 주요 인터랙션 요소입니다.</SubTitle>

      <SectionTitle>Variants</SectionTitle>
      <Preview>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Delete</Button>

        {/* Icon-only */}
        <Button leftIcon={<FiPlus />} aria-label="Add" />

        <Button rightIcon={<FiPlus />}>rightIcon</Button>
        <Button leftIcon={<FiPlus />}>leftIcon</Button>
      </Preview>

      <p>
        <code>leftIcon</code> 또는 <code>rightIcon</code> props를 사용해 아이콘
        버튼을 구성할 수 있습니다.
        <br /> 텍스트 없이 아이콘만 사용할 경우 반드시 <code>aria-label</code>을
        포함해야 합니다.
      </p>

      <SectionTitle>Loading</SectionTitle>
      <Preview>
        <Button loading>Loading...</Button>
        <Button loading variant="outline">
          Loading
        </Button>
        <Button loading size="lg">
          Custom
        </Button>
      </Preview>

      <p>
        <code>loading</code> 상태에서는 사용자가 중복 클릭하지 않도록 자동으로
        <code> pointer-events: none </code> 처리가 됩니다.
      </p>

      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Preview>

      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          {
            name: "variant",
            type: `"primary" | "secondary" | "outline" | "ghost" | "destructive"`,
            default: "primary",
          },
          { name: "size", type: `"sm" | "md" | "lg"`, default: "md" },
          { name: "fullWidth", type: "boolean", default: "false" },
          { name: "loading", type: "boolean", default: "false" },
          { name: "leftIcon", type: "ReactNode" },
          { name: "rightIcon", type: "ReactNode" },
        ]}
      />
    </DocsLayout>
  );
}
