import type { ComponentSize, Intent, VisualStyle } from "@components/types";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: `${Intent}-${VisualStyle}`;
  size?: ComponentSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
