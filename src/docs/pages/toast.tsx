import { Button } from "@components/atoms";
import { DocsLayout } from "../components/DocsLayout";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { toast } from "@components/molecules/Toast/toast";

export default function ToastPage() {
  return (
    <DocsLayout>
      <Heading>Toast</Heading>
      <SubTitle>
        화면 상단 또는 하단에 잠시 나타나는 알림 메시지입니다. 성공, 오류, 경고,
        정보 등 다양한 variant를 제공하며, 전역 API <code>toast.*</code> 로
        어디서든 호출 가능합니다.
      </SubTitle>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <Button onClick={() => toast.show({ message: "Default Toast!" })}>
          Show Default
        </Button>
      </Preview>

      {/* Variants */}
      <SectionTitle>Variants</SectionTitle>
      <Preview>
        <Button
          variant="success-solid"
          onClick={() => toast.success("Success message!")}
        >
          Success
        </Button>
        <Button
          variant="danger-solid"
          onClick={() => toast.error("Error occurred!")}
        >
          Error
        </Button>
        <Button
          variant="warning-solid"
          onClick={() => toast.warning("Warning alert!")}
        >
          Warning
        </Button>
        <Button variant="info-solid" onClick={() => toast.info("Some info")}>
          Info
        </Button>
      </Preview>

      {/* Custom options */}
      <SectionTitle>Custom Options</SectionTitle>
      <Preview>
        <Button
          onClick={() =>
            toast.show({
              message: "Longer duration (5s)",
              duration: 5000,
              variant: "success",
            })
          }
        >
          Long Duration
        </Button>

        <Button
          onClick={() =>
            toast.show({
              message: (
                <div>
                  <strong>React Node Toast</strong>
                  <div style={{ fontSize: "12px" }}>Custom JSX possible</div>
                </div>
              ),
              variant: "info",
            })
          }
        >
          With JSX
        </Button>
      </Preview>

      {/* Props Table */}
      <SectionTitle>Toast Options</SectionTitle>
      <PropsTable
        data={[
          {
            name: "message",
            type: "string | ReactNode",
            required: true,
            description: "표시할 메시지",
          },
          {
            name: "variant",
            type: `"default" | "success" | "error" | "warning" | "info"`,
            default: `"default"`,
          },
          {
            name: "duration",
            type: "number",
            default: "3000",
            description: "자동 닫힘까지의 시간(ms)",
          },
          {
            name: "id",
            type: "string",
            description: "수동 제거를 위한 ID (자동 생성됨)",
          },
        ]}
      />
    </DocsLayout>
  );
}
