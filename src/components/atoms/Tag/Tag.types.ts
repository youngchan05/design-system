import type { BadgeColor } from "../Badge/Badge.types";

export type TagVariant = "solid" | "soft" | "outline";
export type TagSize = "sm" | "md" | "lg";

export interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  color?: BadgeColor;
  size?: TagSize;
  rounded?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}
