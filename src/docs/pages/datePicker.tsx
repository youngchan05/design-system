import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { DatePicker } from "@components/molecules/DatePicker/DatePicker";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";

export default function DatePickerPage() {
  const [single, setSingle] = useState<Date | undefined>();
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <DocsLayout>
      <Heading>DatePicker</Heading>
      <SubTitle>
        날짜를 선택하기 위한 컴포넌트입니다. 단일 날짜 선택과 범위 선택을 모두
        지원하며, 월·연도 드롭다운 선택 기능과 디자인시스템 인풋 스타일을 그대로
        사용할 수 있습니다.
      </SubTitle>

      {/* Single Picker */}
      <SectionTitle>Single Date Picker</SectionTitle>
      <Preview>
        <DatePicker
          label="날짜 선택"
          mode="single"
          value={single}
          onChange={(v) => {
            if (v instanceof Date || v === undefined) setSingle(v);
          }}
        />
      </Preview>

      {/* Range Picker */}
      <SectionTitle>Range Date Picker</SectionTitle>
      <Preview>
        <DatePicker
          label="기간 선택"
          mode="range"
          value={range}
          placeholder="기간을 선택하세요"
          onChange={(v) => {
            if (!v || v instanceof Date) {
              setRange(undefined);
              return;
            }
            setRange(v);
          }}
        />
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          {
            name: "mode",
            type: `"single" | "range"`,
            default: `"single"`,
            description: "날짜 선택 모드를 설정합니다.",
            required: false,
          },
          {
            name: "value",
            type: "Date | DateRange | undefined",
            description:
              "선택된 날짜 또는 날짜 범위입니다. 외부에서 제어할 수 있습니다.",
            required: false,
          },
          {
            name: "onChange",
            type: "(value: Date | DateRange | undefined) => void",
            description:
              "날짜가 선택되거나 변경될 때 호출됩니다. 단일 또는 범위에 따라 전달 값이 달라집니다.",
            required: false,
          },
          {
            name: "label",
            type: "string",
            description: "인풋 위에 표시되는 라벨 텍스트입니다.",
            required: false,
          },
          {
            name: "placeholder",
            type: "string",
            default: `"날짜를 선택하세요"`,
            description: "값이 없을 때 인풋에 표시되는 문구입니다.",
            required: false,
          },
          {
            name: "disabled",
            type: "boolean",
            description: "비활성화 상태로 만들 때 사용합니다.",
            required: false,
          },
          {
            name: "fromYear",
            type: "number",
            default: "2000",
            description: "드롭다운에서 선택 가능한 최소 연도입니다.",
            required: false,
          },
          {
            name: "toYear",
            type: "number",
            default: "현재 연도 + 5",
            description: "드롭다운에서 선택 가능한 최대 연도입니다.",
            required: false,
          },
        ]}
      />
    </DocsLayout>
  );
}
