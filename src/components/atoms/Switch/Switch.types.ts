import type { ComponentSize } from "@components/types";
import React from "react";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  size?: ComponentSize;
}
