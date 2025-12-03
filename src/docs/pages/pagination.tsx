import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Pagination } from "@components/molecules";
import { useState } from "react";

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

export default function PaginationPage() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(1);
  const [page4, setPage4] = useState(8);

  return (
    <DocsLayout>
      <Heading>Pagination</Heading>
      <Sub>
        길게 나열된 리스트를 여러 페이지로 나누어 표시할 때 사용하는
        컴포넌트입니다. 앞으로/뒤로 이동, 첫/마지막 페이지, ellipsis 등 다양한
        옵션을 제공합니다.
      </Sub>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <Pagination page={page1} totalPages={10} onChange={setPage1} />
      </Preview>

      {/* Variants */}
      <SectionTitle>Variants</SectionTitle>
      <Preview>
        <Pagination
          page={page2}
          totalPages={10}
          variant="outlined"
          onChange={setPage2}
        />
        <Pagination
          page={page2}
          totalPages={10}
          variant="solid"
          onChange={setPage2}
        />
        <Pagination
          page={page2}
          totalPages={10}
          variant="soft"
          onChange={setPage2}
        />
      </Preview>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Pagination
          page={page3}
          totalPages={10}
          size="sm"
          onChange={setPage3}
        />
        <Pagination
          page={page3}
          totalPages={10}
          size="md"
          onChange={setPage3}
        />
        <Pagination
          page={page3}
          totalPages={10}
          size="lg"
          onChange={setPage3}
        />
      </Preview>

      {/* Rounded */}
      <SectionTitle>Rounded</SectionTitle>
      <Preview>
        <Pagination
          page={page3}
          totalPages={10}
          rounded="none"
          onChange={setPage3}
        />
        <Pagination
          page={page3}
          totalPages={10}
          rounded="md"
          onChange={setPage3}
        />
        <Pagination
          page={page3}
          totalPages={10}
          rounded="full"
          onChange={setPage3}
        />
      </Preview>

      {/* Ellipsis Example */}
      <SectionTitle>With Ellipsis</SectionTitle>
      <Preview>
        <Pagination
          page={page4}
          totalPages={20}
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
          onChange={setPage4}
        />
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          {
            name: "page",
            type: "number",
            required: true,
            description: "현재 페이지",
          },
          {
            name: "totalPages",
            type: "number",
            required: true,
            description: "전체 페이지 수",
          },
          {
            name: "onChange",
            type: "(page: number) => void",
            required: true,
            description: "페이지 변경 핸들러",
          },
          {
            name: "siblingCount",
            type: "number",
            default: "1",
            description: "현재 페이지 양옆에 표시할 페이지 수",
          },
          {
            name: "boundaryCount",
            type: "number",
            default: "1",
            description: "앞/뒤 고정 페이지 수",
          },
          {
            name: "showFirstButton",
            type: "boolean",
            default: "false",
          },
          {
            name: "showLastButton",
            type: "boolean",
            default: "false",
          },
          {
            name: "showPrevNext",
            type: "boolean",
            default: "true",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: `"md"`,
          },
          {
            name: "variant",
            type: `"outlined" | "solid" | "soft"`,
            default: `"outlined"`,
          },
          {
            name: "rounded",
            type: `"none" | "md" | "full"`,
            default: `"md"`,
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
          },
        ]}
      />
    </DocsLayout>
  );
}
