import { Button } from "@components/atoms";
import { DocsLayout } from "../components/DocsLayout";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { FiInbox, FiSearch, FiAlertTriangle } from "react-icons/fi";
import { Empty } from "@components/molecules";

export default function EmptyPage() {
  return (
    <DocsLayout>
      <Heading>Empty</Heading>
      <SubTitle>
        데이터가 없거나 검색 결과가 없거나, 오류 등 특정 상태를 사용자에게
        안내하기 위한 UI 컴포넌트입니다. 아이콘, 타이틀, 설명, 액션 버튼 등을
        조합하여 다양하게 활용할 수 있습니다.
      </SubTitle>

      {/* Usage */}
      <SectionTitle>Usage</SectionTitle>
      <Preview.Code>
        {`
import { Empty } from "@components/molecules/Empty";
import { Button } from "@components/atoms";
import { FiInbox } from "react-icons/fi";

export default function Example() {
  return (
    <Empty
      icon={<FiInbox />}
      title="데이터가 없습니다"
      description="새로운 항목을 추가하면 이곳에 표시됩니다."
      action={<Button variant="primary-solid">버튼</Button>}
    />
  );
}`}
      </Preview.Code>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <Empty
          icon={<FiInbox />}
          title="데이터가 없습니다"
          description="새로운 항목을 추가하면 이곳에 표시됩니다."
          action={<Button variant="primary-solid">추가하기</Button>}
        />
      </Preview>

      {/* Examples */}
      <SectionTitle>Examples</SectionTitle>

      <Preview>
        <Empty
          icon={<FiSearch />}
          title="검색 결과가 없습니다"
          description="다른 키워드로 다시 시도해 주세요."
        />
      </Preview>

      <Preview>
        <Empty
          icon={<FiAlertTriangle />}
          title="오류가 발생했습니다"
          description="잠시 후 다시 시도해 주세요."
          action={<Button variant="primary-solid">다시 시도</Button>}
          size="lg"
        />
      </Preview>

      {/* Full height example */}
      <SectionTitle>Full Height</SectionTitle>
      <Preview>
        <Empty
          fullHeight
          icon={<FiInbox />}
          title="아직 아무것도 없어요"
          description="부모 요소 높이를 채워 화면 중앙 정렬 모드입니다."
        />
      </Preview>

      {/* Props */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          {
            name: "icon",
            type: "ReactNode",
            description: "상태를 나타내는 아이콘 또는 이미지",
          },
          {
            name: "title",
            type: "string",
            required: true,
            description: "주요 안내 문구",
          },
          {
            name: "description",
            type: "string",
            description: "보조 설명 문구",
          },
          {
            name: "action",
            type: "ReactNode",
            description: "CTA 버튼 또는 링크",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: `"md"`,
            description: "컴포넌트 전체 크기",
          },
          {
            name: "fullHeight",
            type: "boolean",
            default: "false",
            description: "부모 높이를 모두 채워 화면 중앙에 배치",
          },
        ]}
      />
    </DocsLayout>
  );
}
