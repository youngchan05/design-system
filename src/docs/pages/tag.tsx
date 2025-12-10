import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Tag } from "@components/atoms";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";

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
        <Tag variant="primary-solid">Solid</Tag>
        <Tag variant="secondary-soft">Soft</Tag>
        <Tag variant="neutral-outline">Outline</Tag>
      </Preview>

      {/* Colors */}
      <SectionTitle>Colors</SectionTitle>
      <Preview>
        <Tag variant="primary-solid">Primary</Tag>
        <Tag variant="secondary-solid">secondary</Tag>
        <Tag variant="neutral-solid">neutral</Tag>
        <Tag variant="success-solid">Success</Tag>
        <Tag variant="warning-solid">Warning</Tag>
        <Tag variant="danger-solid">Danger</Tag>
        <Tag variant="info-solid">Info</Tag>
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
