import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Badge } from "@components/atoms/Badge/Badge";

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

export default function BadgePage() {
  return (
    <DocsLayout>
      <Heading>Badge</Heading>
      <SubTitle>
        상태 표시나 라벨링에 사용되는 작은 UI 컴포넌트입니다. variant, color,
        size, rounded, icon 등을 지원합니다.
      </SubTitle>

      {/* Variants */}
      <SectionTitle>Variants</SectionTitle>
      <Preview>
        <Badge variant="solid">Solid</Badge>
        <Badge variant="soft">Soft</Badge>
        <Badge variant="outline">Outline</Badge>
      </Preview>

      {/* Colors */}
      <SectionTitle>Colors</SectionTitle>
      <Preview>
        <Badge color="gray">Gray</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="accent">Accent</Badge>
      </Preview>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </Preview>

      {/* Rounded */}
      <SectionTitle>Rounded / Square</SectionTitle>
      <Preview>
        <Badge rounded>Rounded Badge</Badge>
        <Badge rounded={false}>Square Badge</Badge>
      </Preview>

      {/* With Icon */}
      <SectionTitle>With Icons</SectionTitle>
      <Preview>
        <Badge icon={<span>🔥</span>}>Hot</Badge>
        <Badge icon={<span>✔</span>} iconRight={<span>→</span>}>
          Confirm
        </Badge>
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "children", type: "ReactNode" },
          {
            name: "variant",
            type: `"solid" | "soft" | "outline"`,
            default: "solid",
          },
          {
            name: "color",
            type: `"gray" | "primary" | "success" | "warning" | "danger" | "info" | "accent"`,
            default: "primary",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: "md",
          },
          { name: "rounded", type: "boolean", default: "true" },
          { name: "icon", type: "ReactNode" },
          { name: "iconRight", type: "ReactNode" },
        ]}
      />
    </DocsLayout>
  );
}
