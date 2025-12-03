export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  children: React.ReactNode; // trigger element
  content: React.ReactNode; // tooltip content
  placement?: TooltipPlacement;
  showDelay?: number;
  hideDelay?: number;
  arrow?: boolean;
  disabled?: boolean;
}
