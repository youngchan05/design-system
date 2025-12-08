// types/base.ts
export type Intent =
  | "primary"
  | "secondary"
  | "neutral"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type VisualStyle = "solid" | "outline" | "ghost" | "soft" | "link";

export type ComponentSize = "sm" | "md" | "lg";

export type ColorScale = {
  [key in 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]: string;
};
