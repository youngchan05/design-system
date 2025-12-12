import type { EmptyProps } from "./Empty.type";
import {
  EmptyAction,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
  EmptyWrapper,
} from "./Empty.style";

export const Empty = ({
  icon,
  title,
  description,
  action,
  size = "md",
  fullHeight = false,
}: EmptyProps) => {
  return (
    <EmptyWrapper $fullHeight={fullHeight}>
      {icon && <EmptyIcon $size={size}>{icon}</EmptyIcon>}
      <EmptyTitle $size={size}>{title}</EmptyTitle>
      {description && <EmptyDescription>{description}</EmptyDescription>}
      {action && <EmptyAction>{action}</EmptyAction>}
    </EmptyWrapper>
  );
};
