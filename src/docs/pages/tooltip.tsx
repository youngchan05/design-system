import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Tooltip } from "@components/atoms/Tooltip/Tooltip";

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

const Box = styled.div`
  padding: 8px 14px;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 6px;
  display: inline-flex;
  cursor: default;
`;

export default function TooltipPage() {
  return (
    <DocsLayout>
      <Heading>Tooltip</Heading>
      <SubTitle>
        요소에 마우스를 올리거나 포커스될 때 간단한 설명을 보여주는 작은
        오버레이 컴포넌트입니다. Portal 기반으로 렌더링되며 다양한 방향, 딜레이,
        화살표 옵션을 지원합니다.
      </SubTitle>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <Tooltip content="Hello Tooltip!">
          <Box>Hover me</Box>
        </Tooltip>
      </Preview>

      {/* Placement */}
      <SectionTitle>Placement</SectionTitle>
      <Preview>
        <Tooltip content="Top" placement="top">
          <Box>Top</Box>
        </Tooltip>
        <Tooltip content="Bottom" placement="bottom">
          <Box>Bottom</Box>
        </Tooltip>
        <Tooltip content="Left" placement="left">
          <Box>Left</Box>
        </Tooltip>
        <Tooltip content="Right" placement="right">
          <Box>Right</Box>
        </Tooltip>
      </Preview>

      {/* Delay */}
      <SectionTitle>Delay</SectionTitle>
      <Preview>
        <Tooltip content="Show delay 500ms" showDelay={500}>
          <Box>Show Delay</Box>
        </Tooltip>
        <Tooltip content="Hide delay 600ms" hideDelay={600}>
          <Box>Hide Delay</Box>
        </Tooltip>
      </Preview>

      {/* Arrow */}
      <SectionTitle>With Arrow</SectionTitle>
      <Preview>
        <Tooltip content="With arrow" arrow>
          <Box>Hover</Box>
        </Tooltip>
        <Tooltip content="No arrow" arrow={false}>
          <Box>Hover (no arrow)</Box>
        </Tooltip>
      </Preview>

      {/* Disabled */}
      <SectionTitle>Disabled</SectionTitle>
      <Preview>
        <Tooltip content="Not showing" disabled>
          <Box>Disabled Tooltip</Box>
        </Tooltip>
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "children", type: "ReactNode" },
          { name: "content", type: "ReactNode" },
          {
            name: "placement",
            type: `"top" | "bottom" | "left" | "right"`,
            default: "top",
          },
          { name: "showDelay", type: "number", default: "300" },
          { name: "hideDelay", type: "number", default: "150" },
          { name: "arrow", type: "boolean", default: "true" },
          { name: "disabled", type: "boolean" },
        ]}
      />
    </DocsLayout>
  );
}
