import { useState } from "react";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Modal } from "@components/molecules/Modal/Modal";
import { Button } from "@components/atoms";
import { Heading, SectionTitle, SubTitle } from "../components/DocsStyle";

export default function ModalPage() {
  // 각 Section마다 모달 상태가 필요
  const [openBasic, setOpenBasic] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [openHideClose, setOpenHideClose] = useState(false);

  return (
    <DocsLayout>
      <Heading>Modal</Heading>
      <SubTitle>
        Portal 기반으로 렌더링되는 Overlay 컴포넌트입니다. FocusTrap, ESC 종료,
        Overlay 클릭 종료, 다양한 Size, Header/Body/Footer 구조를 지원합니다.
      </SubTitle>

      {/* Basic */}
      <SectionTitle>Basic</SectionTitle>
      <Preview>
        <Button onClick={() => setOpenBasic(true)}>Open Modal</Button>

        <Modal
          open={openBasic}
          onClose={() => setOpenBasic(false)}
          title="Basic Modal"
          footer={
            <>
              <Button
                variant="primary-ghost"
                onClick={() => setOpenBasic(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setOpenBasic(false)}>Confirm</Button>
            </>
          }
        >
          기본 형태의 모달입니다. 제목, 본문, 푸터 영역으로 구성됩니다.
        </Modal>
      </Preview>

      {/* Size */}
      <SectionTitle>Size Variants</SectionTitle>
      <Preview>
        <Button onClick={() => setOpenSize(true)}>Open Large</Button>

        <Modal
          open={openSize}
          onClose={() => setOpenSize(false)}
          title="Large Modal"
          size="lg"
          footer={
            <>
              <Button
                variant="primary-ghost"
                onClick={() => setOpenSize(false)}
              >
                Close
              </Button>
            </>
          }
        >
          size 속성으로 sm / md / lg / full 크기를 지정할 수 있습니다.
        </Modal>
      </Preview>

      {/* Overlay click */}
      <SectionTitle>Overlay Click</SectionTitle>
      <Preview>
        <Button onClick={() => setOpenOverlay(true)}>
          Open (Overlay disabled)
        </Button>

        <Modal
          open={openOverlay}
          onClose={() => setOpenOverlay(false)}
          title="Overlay disabled"
          closeOnOverlayClick={false}
        >
          Overlay(뒷배경)를 클릭해도 닫히지 않도록 설정된 모달입니다.
        </Modal>
      </Preview>

      {/* Hide close button */}
      <SectionTitle>Hide Close Button</SectionTitle>
      <Preview>
        <Button onClick={() => setOpenHideClose(true)}>Open</Button>

        <Modal
          open={openHideClose}
          onClose={() => setOpenHideClose(false)}
          title="No Close Button"
          hideCloseButton
        >
          우측 상단 닫기 버튼을 숨긴 모달입니다.
        </Modal>
      </Preview>

      {/* Props */}
      <SectionTitle>Props</SectionTitle>

      <PropsTable
        data={[
          {
            name: "open",
            type: "boolean",
            description: "모달 열림/닫힘 상태",
            required: true,
          },
          {
            name: "onClose",
            type: "() => void",
            description: "모달 종료 시 호출되는 콜백",
            required: true,
          },
          {
            name: "title",
            type: "ReactNode",
            description: "모달 헤더 제목",
          },
          {
            name: "children",
            type: "ReactNode",
            description: "모달 본문 내용",
          },
          {
            name: "footer",
            type: "ReactNode",
            description: "하단 버튼 영역",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg" | "full"`,
            default: "md",
          },
          {
            name: "closeOnOverlayClick",
            type: "boolean",
            default: "true",
            description: "오버레이 클릭 시 닫기 여부",
          },
          {
            name: "hideCloseButton",
            type: "boolean",
            description: "우측 상단 닫기 버튼 숨김",
          },
          {
            name: "ariaLabel",
            type: "string",
            description: "접근성 라벨 (title 없을 때 필요)",
          },
        ]}
      />
    </DocsLayout>
  );
}
