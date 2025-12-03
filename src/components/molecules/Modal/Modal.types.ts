import type { ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg" | "full";

export interface ModalProps {
  /** 모달 열림 여부 (컨트롤드) */
  open: boolean;
  /** 닫기 콜백 (ESC, X 버튼, 오버레이 클릭 등에서 호출) */
  onClose: () => void;

  /** 모달 제목 (aria 접근성 + 상단에 표시) */
  title?: ReactNode;
  /** 모달 본문 */
  children?: ReactNode;
  /** 하단 액션 영역 (버튼 등) */
  footer?: ReactNode;

  /** 모달 크기 */
  size?: ModalSize;
  /** 오버레이 클릭 시 닫을지 여부 (기본 true) */
  closeOnOverlayClick?: boolean;
  /** 우측 상단 닫기 버튼 숨기기 */
  hideCloseButton?: boolean;
  /** 접근성용 라벨 (title 없을 때 사용) */
  ariaLabel?: string;
}
