import type { ComponentSize, Intent } from "@components/types";

export interface ProgressProps {
  value?: number; // determinate
  max?: number; // default 100
  indeterminate?: boolean; // infinite loading
  showValue?: boolean; // 55% 표시 여부
  color?: Intent;
  size?: ComponentSize;
  rounded?: boolean;
  variant?: "solid" | "soft" | "striped";
  className?: string;
}
