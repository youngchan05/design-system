import type { ComponentSize } from "@components/types";
import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  size?: ComponentSize;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  required?: boolean;
  clearable?: boolean;
  isControlled?: boolean;
}
