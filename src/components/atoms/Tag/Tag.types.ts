import type { ComponentSize, Intent, VisualStyle } from "@components/types";

export interface TagProps {
  children: React.ReactNode;
  variant?: `${Intent}-${VisualStyle}`;
  size?: ComponentSize;
  rounded?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}
