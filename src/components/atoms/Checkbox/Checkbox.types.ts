import type { ComponentSize } from "@components/types";
import React from "react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  size?: ComponentSize;

  indeterminate?: boolean; // 부분 체크
}
