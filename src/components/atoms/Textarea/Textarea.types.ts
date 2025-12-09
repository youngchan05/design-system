import type { ComponentSize } from "@components/types";
import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  clearable?: boolean;
  size?: ComponentSize;
}
