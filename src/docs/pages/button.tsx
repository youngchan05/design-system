import { Button } from "@components/atoms";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { FiPlus } from "react-icons/fi";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";

export default function ButtonPage() {
  return (
    <DocsLayout>
      <Heading>Button</Heading>
      <SubTitle>사용자 액션을 트리거하는 주요 인터랙션 요소입니다.</SubTitle>

      <SectionTitle>Variants</SectionTitle>
      <Preview>
        <Button variant="primary-solid">primary</Button>
        <Button variant="success-solid">success</Button>
        <Button variant="warning-solid">warning</Button>
        <Button variant="danger-solid">danger</Button>
        <Button variant="primary-outline">outline</Button>
        <Button variant="primary-ghost">ghost</Button>
        <Button variant="primary-soft">soft</Button>
        <Button variant="primary-link">link</Button>

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
        <Button loading></Button>
        <Button loading variant="success-solid"></Button>
        <Button loading variant="warning-solid"></Button>
        <Button loading variant="danger-solid"></Button>
        <Button loading variant="primary-ghost"></Button>
        <Button loading variant="primary-outline"></Button>
        <Button loading>Loading...</Button>
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

      <SectionTitle>fullWidth</SectionTitle>
      <Preview>
        <Button size="sm" fullWidth>
          Small
        </Button>
        <Button size="md" fullWidth>
          Medium
        </Button>
        <Button size="lg" fullWidth>
          Large
        </Button>
      </Preview>

      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          {
            name: "variant",
            type: `"primary-solid" | "primary-outline" | "primary-ghost" | "primary-soft" | "primary-link" | "success-solid" | "success-outline" | "success-ghost" | "success-soft" | "success-link" | "warning-solid" | "warning-outline" | "warning-ghost" | "warning-soft" | "warning-link" | "danger-solid" | "danger-outline" | "danger-ghost" | "danger-soft" | "danger-link" | "info-solid" | "info-outline" | "info-ghost" | "info-soft" | "info-link" `,
            default: "primary-solid",
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
