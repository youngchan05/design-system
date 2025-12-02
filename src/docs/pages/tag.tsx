import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Tag } from "@components/atoms";

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

export default function TagPage() {
  return (
    <DocsLayout>
      <Heading>Tag</Heading>
      <SubTitle>
        분류, 필터 선택, 라벨 표시 등에 사용되는 컴포넌트입니다. Variant, Color,
        Size, Selectable, Removable 등을 지원합니다.
      </SubTitle>

      {/* Variants */}
      <SectionTitle>Variants</SectionTitle>
      <Preview>
        <Tag variant="solid">Solid</Tag>
        <Tag variant="soft">Soft</Tag>
        <Tag variant="outline">Outline</Tag>
      </Preview>

      {/* Colors */}
      <SectionTitle>Colors</SectionTitle>
      <Preview>
        <Tag color="gray">Gray</Tag>
        <Tag color="primary">Primary</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="danger">Danger</Tag>
        <Tag color="info">Info</Tag>
        <Tag color="accent">Accent</Tag>
      </Preview>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Tag size="sm">Small</Tag>
        <Tag size="md">Medium</Tag>
        <Tag size="lg">Large</Tag>
      </Preview>

      {/* Rounded / Square */}
      <SectionTitle>Shape</SectionTitle>
      <Preview>
        <Tag rounded>Rounded</Tag>
        <Tag rounded={false}>Square</Tag>
      </Preview>

      {/* Selectable */}
      <SectionTitle>Selectable</SectionTitle>
      <Preview>
        <Tag selectable onSelect={() => console.log("selected")}>
          Default
        </Tag>
        <Tag selectable selected>
          Selected
        </Tag>
      </Preview>

      {/* Removable */}
      <SectionTitle>Removable</SectionTitle>
      <Preview>
        <Tag removable onRemove={() => alert("Removed!")}>
          Removable Tag
        </Tag>
      </Preview>

      {/* With Icons */}
      <SectionTitle>With Icon</SectionTitle>
      <Preview>
        <Tag icon="🔥">Hot</Tag>
        <Tag icon="✔" iconRight="→">
          Confirm
        </Tag>
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "children", type: "ReactNode" },
          {
            name: "variant",
            type: `"solid" | "soft" | "outline"`,
            default: "soft",
          },
          {
            name: "color",
            type: `"gray" | "primary" | "success" | "warning" | "danger" | "info" | "accent"`,
            default: "gray",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: "md",
          },
          { name: "rounded", type: "boolean", default: "true" },
          { name: "icon", type: "ReactNode" },
          { name: "iconRight", type: "ReactNode" },
          { name: "removable", type: "boolean" },
          { name: "onRemove", type: "() => void" },
          { name: "selectable", type: "boolean" },
          { name: "selected", type: "boolean" },
          { name: "onSelect", type: "() => void" },
        ]}
      />
    </DocsLayout>
  );
}
