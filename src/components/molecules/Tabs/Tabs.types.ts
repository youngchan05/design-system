import type { ReactNode } from "react";

export type TabsSize = "sm" | "md" | "lg";
export type TabsVariant = "underline" | "soft" | "solid";

export interface TabsProps {
  /** 현재 선택된 탭 (controlled) */
  value?: string;
  /** defaultValue 사용 시 내부에서 uncontrolled로 관리 */
  defaultValue?: string;
  /** 탭 변경 시 실행되는 콜백 */
  onChange?: (value: string) => void;

  /** 탭 스타일 (underline, soft, solid) */
  variant?: TabsVariant;
  /** 탭 크기 */
  size?: TabsSize;
  /** 탭 버튼을 가로로 꽉 채울지 여부 */
  fullWidth?: boolean;

  /** children = TabList + TabPanel */
  children: ReactNode;
}

export interface TabListProps {
  children: ReactNode;
  fullWidth?: boolean;
}

export interface TabProps {
  /** Tab을 고유하게 식별하는 값 */
  value: string;
  /** 비활성화 */
  disabled?: boolean;

  /** 아이콘 삽입 */
  icon?: ReactNode;
  iconPosition?: "left" | "right";

  children: ReactNode;
}

export interface TabPanelProps {
  /** 어떤 탭일 때 보여줄지 */
  value: string;
  children: ReactNode;
}
