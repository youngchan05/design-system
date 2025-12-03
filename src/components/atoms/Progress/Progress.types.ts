export type ProgressColor =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "gray";

export type ProgressSize = "sm" | "md" | "lg";

export interface ProgressProps {
  value?: number; // determinate
  max?: number; // default 100
  indeterminate?: boolean; // infinite loading
  showValue?: boolean; // 55% 표시 여부
  color?: ProgressColor;
  size?: ProgressSize;
  rounded?: boolean;
  variant?: "solid" | "soft" | "striped";
  className?: string;
}
