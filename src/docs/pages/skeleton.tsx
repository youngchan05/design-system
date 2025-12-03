import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Skeleton } from "@components/atoms";

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;

const Sub = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export default function SkeletonPage() {
  return (
    <DocsLayout>
      <Heading>Skeleton</Heading>
      <Sub>
        실제 콘텐츠가 로딩되는 동안 형태를 미리 보여주는 컴포넌트입니다. Rect /
        Text / Circle 형태를 지원하며, pulse / shimmer 애니메이션을 설정할 수
        있습니다.
      </Sub>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <Skeleton width={200} height={20} />
        <Skeleton width={150} height={16} />
        <Skeleton width="100%" height={14} />
      </Preview>

      {/* Text */}
      <SectionTitle>Text</SectionTitle>
      <Preview>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="90%" />
      </Preview>

      {/* Circle */}
      <SectionTitle>Circle</SectionTitle>
      <Preview>
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="circle" width={60} height={60} />
      </Preview>

      {/* Rounded */}
      <SectionTitle>Rounded</SectionTitle>
      <Preview>
        <Skeleton width={200} height={16} rounded={false} />
        <Skeleton width={200} height={16} rounded />
      </Preview>

      {/* Animation */}
      <SectionTitle>Animation</SectionTitle>
      <Preview>
        <Skeleton width={200} height={16} animation="shimmer" />
        <Skeleton width={200} height={16} animation="pulse" />
        <Skeleton width={200} height={16} animation="none" />
      </Preview>

      {/* Complex Layout Example */}
      <SectionTitle>Complex Example</SectionTitle>
      <Preview>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Skeleton variant="circle" width={48} height={48} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
      </Preview>

      {/* Props */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "width", type: "string | number" },
          { name: "height", type: "string | number" },
          {
            name: "variant",
            type: `"rect" | "text" | "circle"`,
            default: `"rect"`,
          },
          { name: "circle", type: "boolean", default: "false" },
          {
            name: "animation",
            type: `"pulse" | "shimmer" | "none"`,
            default: `"shimmer"`,
          },
          { name: "rounded", type: "boolean", default: "true" },
          { name: "style", type: "React.CSSProperties" },
          { name: "className", type: "string" },
        ]}
      />
    </DocsLayout>
  );
}
