import React from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  size?: InputSize;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  required?: boolean;
  clearable?: boolean;
}
