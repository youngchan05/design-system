import React from "react";
import type { DefaultTheme } from "styled-components/dist/types";

export type BadgeVariant = "solid" | "soft" | "outline";
export type BadgeColor = keyof DefaultTheme["colors"];
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  rounded?: boolean; // pill 형태
  icon?: React.ReactNode; // leading icon
  iconRight?: React.ReactNode; // trailing icon
}
