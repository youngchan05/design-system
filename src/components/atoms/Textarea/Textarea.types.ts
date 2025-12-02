import React from "react";

export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  size?: TextareaSize;

  autoSize?: boolean; // ★ 자동 높이 조절
}
