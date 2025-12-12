import { useState } from "react";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";

import { alert, confirm } from "../../components/molecules/Confirm/confirm";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";
import { Button } from "@components/atoms";

export default function ConfirmPage() {
  const [lastResult, setLastResult] = useState<string>("");

  const handleConfirm = async () => {
    const ok = await confirm("정말 삭제하시겠습니까?");
    console.log(ok, "okk");
    setLastResult(ok ? "확인 선택됨" : "취소 선택됨");
  };

  const handleCustomConfirm = async () => {
    const ok = await confirm({
      title: "회원 탈퇴",
      message: (
        <div>
          탈퇴 시 모든 정보가 삭제됩니다.
          <br />
          정말 진행할까요?
        </div>
      ),
      variant: "danger",
      confirmText: "탈퇴",
      cancelText: "취소",
    });

    setLastResult(ok ? "탈퇴 진행" : "탈퇴 취소");
  };

  const handleAlert = async () => {
    await alert("작업이 완료되었습니다.");
    setLastResult("알럿 완료");
  };

  return (
    <DocsLayout>
      <Heading>Confirm & Alert</Heading>
      <SubTitle>
        사용자에게 결정을 요청하거나 간단한 메시지를 보여줄 때 사용하는 전역
        Dialog 컴포넌트입니다. <br />
        <code>alert()</code> 와 <code>confirm()</code> 형태로 어느 곳에서나
        호출할 수 있으며 Promise 기반으로 결과를 반환합니다.
      </SubTitle>

      {/* Alert */}
      <SectionTitle>Alert</SectionTitle>
      <Preview>
        <Button onClick={handleAlert}>Show Alert</Button>
      </Preview>

      {/* Confirm */}
      <SectionTitle>Confirm</SectionTitle>
      <Preview>
        <Button onClick={handleConfirm}>Show Confirm</Button>
      </Preview>

      {/* Danger Variant */}
      <SectionTitle>Danger Variant</SectionTitle>
      <Preview>
        <Button onClick={handleCustomConfirm}>Show Danger Confirm</Button>
      </Preview>

      {/* Result */}
      <SectionTitle>Result</SectionTitle>
      <Preview>{lastResult || "-"}</Preview>

      {/* Props */}
      <SectionTitle>Alert / Confirm Options</SectionTitle>
      <PropsTable
        data={[
          {
            name: "title",
            type: "string",
            description: "Dialog 제목(선택)",
          },
          {
            name: "message",
            type: "string | ReactNode",
            required: true,
            description: "표시할 메시지",
          },
          {
            name: "confirmText",
            type: "string",
            default: `"확인"`,
          },
          {
            name: "cancelText",
            type: "string",
            description: "Confirm에서만 사용됨",
          },
          {
            name: "variant",
            type: `"default" | "danger"`,
            default: `"default"`,
            description: "확인 버튼 스타일",
          },
        ]}
      />

      <SectionTitle>API</SectionTitle>
      <PropsTable
        data={[
          {
            name: "alert(options)",
            type: "Promise<void>",
            description: "확인 버튼 하나만 있는 알럿 다이얼로그",
          },
          {
            name: "confirm(options)",
            type: "Promise<boolean>",
            description: "확인 / 취소를 반환하는 컨펌 다이얼로그",
          },
        ]}
      />
    </DocsLayout>
  );
}
