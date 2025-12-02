import { BadgeWrapper } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

export const Badge = ({
  children,
  variant = "solid",
  color = "primary",
  size = "md",
  rounded = true,
  icon,
  iconRight,
}: BadgeProps) => {
  return (
    <BadgeWrapper
      $variant={variant}
      $color={color}
      $size={size}
      $rounded={rounded}
    >
      {icon && <span>{icon}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </BadgeWrapper>
  );
};
