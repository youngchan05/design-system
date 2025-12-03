import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { toast } from "@components/molecules/Toast/toast";

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

const Button = styled.button`
  padding: 8px 14px;
  background: ${({ theme }) => theme.colors.primary[600]};
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[700]};
  }
`;

export default function ToastPage() {
  return (
    <DocsLayout>
      <Heading>Toast</Heading>
      <Sub>
        화면 상단 또는 하단에 잠시 나타나는 알림 메시지입니다. 성공, 오류, 경고,
        정보 등 다양한 variant를 제공하며, 전역 API <code>toast.*</code> 로
        어디서든 호출 가능합니다.
      </Sub>

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
        <Button onClick={() => toast.success("Success message!")}>
          Success
        </Button>
        <Button onClick={() => toast.error("Error occurred!")}>Error</Button>
        <Button onClick={() => toast.warning("Warning alert!")}>Warning</Button>
        <Button onClick={() => toast.info("Some info")}>Info</Button>
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
