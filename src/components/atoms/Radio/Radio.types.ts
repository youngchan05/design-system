import React from "react";

export type RadioSize = "sm" | "md" | "lg";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  size?: RadioSize;
}

export interface RadioGroupProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: "vertical" | "horizontal";
  children: React.ReactNode;
}
