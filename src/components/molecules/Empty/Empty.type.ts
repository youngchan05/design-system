import type { ComponentSize } from "@components/types";

export type EmptyProps = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  size?: ComponentSize;
  fullHeight?: boolean;
};
