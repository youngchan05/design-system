import { useState } from "react";
import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Progress } from "@components/atoms";

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

export default function ProgressPage() {
  const [val1] = useState(45);
  const [val2] = useState(70);

  return (
    <DocsLayout>
      <Heading>Progress</Heading>
      <Sub>
        진행 상태를 시각적으로 표현하기 위한 컴포넌트입니다. Determinate /
        Indeterminate 모두 지원하며, size, color, variant 등을 설정할 수
        있습니다.
      </Sub>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <Progress value={45} />
        <Progress value={60} color="success" />
        <Progress value={30} color="danger" />
      </Preview>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Progress value={50} size="sm" />
        <Progress value={50} size="md" />
        <Progress value={50} size="lg" />
      </Preview>

      {/* Variants */}
      <SectionTitle>Variants</SectionTitle>
      <Preview>
        <Progress value={55} variant="solid" />
        <Progress value={55} variant="soft" />
        <Progress value={55} variant="striped" />
      </Preview>

      {/* Indeterminate */}
      <SectionTitle>Indeterminate</SectionTitle>
      <Preview>
        <Progress indeterminate />
        <Progress indeterminate color="success" />
        <Progress indeterminate color="warning" />
      </Preview>

      {/* Show Value */}
      <SectionTitle>Show Value</SectionTitle>
      <Preview>
        <Progress value={val1} showValue />
        <Progress value={val2} showValue color="success" />
      </Preview>

      {/* Props */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          {
            name: "value",
            type: "number",
            description: "진행 상태 값 (0~100). 없으면 indeterminate 모드",
          },
          {
            name: "max",
            type: "number",
            default: "100",
            description: "value가 기준하는 최대값",
          },
          {
            name: "indeterminate",
            type: "boolean",
            default: "false",
            description: "무한 로딩 애니메이션",
          },
          {
            name: "showValue",
            type: "boolean",
            default: "false",
            description: "퍼센트 텍스트 표시 여부",
          },
          {
            name: "color",
            type: `"primary" | "success" | "warning" | "danger" | "gray"`,
            default: "primary",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: "md",
          },
          {
            name: "rounded",
            type: "boolean",
            default: "true",
          },
          {
            name: "variant",
            type: `"solid" | "soft" | "striped"`,
            default: "solid",
          },
        ]}
      />
    </DocsLayout>
  );
}
