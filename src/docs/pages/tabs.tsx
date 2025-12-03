import { useState } from "react";
import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Tab, TabList, TabPanel, Tabs } from "@components/molecules";

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

export default function TabsPage() {
  const [value1, setValue1] = useState("tab1");
  const [value2, setValue2] = useState("tabA");
  const [value3, setValue3] = useState("x");
  const [value4, setValue4] = useState("1");

  return (
    <DocsLayout>
      <Heading>Tabs</Heading>
      <SubTitle>
        여러 영역을 전환하여 보여주기 위한 컴포넌트입니다. TabList, Tab,
        TabPanel로 구성되며, 다양한 variant, size, icon, disabled 등을
        제공합니다.
      </SubTitle>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <Tabs value={value1} onChange={setValue1}>
          <TabList>
            <Tab value="tab1">Tab One</Tab>
            <Tab value="tab2">Tab Two</Tab>
            <Tab value="tab3">Tab Three</Tab>
          </TabList>

          <TabPanel value="tab1">Tab Panel One</TabPanel>
          <TabPanel value="tab2">Tab Panel Two</TabPanel>
          <TabPanel value="tab3">Tab Panel Three</TabPanel>
        </Tabs>
      </Preview>

      {/* Variants */}
      <SectionTitle>Variants</SectionTitle>
      <Preview>
        <Tabs value={value2} onChange={setValue2} variant="underline">
          <TabList>
            <Tab value="tabA">Underline A</Tab>
            <Tab value="tabB">Underline B</Tab>
          </TabList>
          <TabPanel value="tabA">Underline A Panel</TabPanel>
          <TabPanel value="tabB">Underline B Panel</TabPanel>
        </Tabs>

        <Tabs value={value3} onChange={setValue3} variant="soft">
          <TabList>
            <Tab value="x">Soft X</Tab>
            <Tab value="y">Soft Y</Tab>
          </TabList>
          <TabPanel value="x">Soft X Panel</TabPanel>
          <TabPanel value="y">Soft Y Panel</TabPanel>
        </Tabs>

        <Tabs value={value4} onChange={setValue4} variant="solid">
          <TabList>
            <Tab value="1">Solid 1</Tab>
            <Tab value="2">Solid 2</Tab>
          </TabList>
          <TabPanel value="1">Solid 1 Panel</TabPanel>
          <TabPanel value="2">Solid 2 Panel</TabPanel>
        </Tabs>
      </Preview>

      {/* Size */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Tabs value={value1} onChange={setValue1} size="sm">
          <TabList>
            <Tab value="tab1">Small</Tab>
            <Tab value="tab2">Small</Tab>
          </TabList>
          <TabPanel value="tab1">Small 1</TabPanel>
          <TabPanel value="tab2">Small 2</TabPanel>
        </Tabs>

        <Tabs value={value2} onChange={setValue2} size="md">
          <TabList>
            <Tab value="tabA">Medium</Tab>
            <Tab value="tabB">Medium</Tab>
          </TabList>
          <TabPanel value="tabA">Medium A</TabPanel>
          <TabPanel value="tabB">Medium B</TabPanel>
        </Tabs>

        <Tabs value={value3} onChange={setValue3} size="lg">
          <TabList>
            <Tab value="x">Large</Tab>
            <Tab value="y">Large</Tab>
          </TabList>
          <TabPanel value="x">Large X</TabPanel>
          <TabPanel value="y">Large Y</TabPanel>
        </Tabs>
      </Preview>

      {/* Icons */}
      <SectionTitle>With Icons</SectionTitle>
      <Preview>
        <Tabs value={value1} onChange={setValue1}>
          <TabList>
            <Tab value="tab1" icon="🔥">
              Hot
            </Tab>
            <Tab value="tab2" icon="⭐" iconPosition="right">
              Star
            </Tab>
          </TabList>

          <TabPanel value="tab1">Hot Panel</TabPanel>
          <TabPanel value="tab2">Star Panel</TabPanel>
        </Tabs>
      </Preview>

      {/* Disabled */}
      <SectionTitle>Disabled</SectionTitle>
      <Preview>
        <Tabs value={value1} onChange={setValue1}>
          <TabList>
            <Tab value="tab1">Enabled</Tab>
            <Tab value="disabled" disabled>
              Disabled
            </Tab>
          </TabList>

          <TabPanel value="tab1">Enabled Panel</TabPanel>
          <TabPanel value="disabled">Disabled Panel</TabPanel>
        </Tabs>
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>

      <PropsTable
        data={[
          { name: "value", type: "string", description: "현재 선택된 탭 값" },
          { name: "defaultValue", type: "string" },
          {
            name: "onChange",
            type: "(value: string) => void",
            description: "Tab 클릭 시 호출",
          },
          {
            name: "variant",
            type: `"underline" | "soft" | "solid"`,
            default: "underline",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: "md",
          },
          { name: "fullWidth", type: "boolean", default: "false" },
        ]}
      />
    </DocsLayout>
  );
}
