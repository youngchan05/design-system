import { colors } from "./colors";

export const theme = {
  colors,
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  spacing: (value: number) => `${value * 4}px`,
  typography: {
    body: {
      fontSize: "14px",
      lineHeight: "20px",
    },
    label: {
      fontSize: "13px",
      fontWeight: 500,
    },
  },
} as const;

export type Theme = typeof theme;
