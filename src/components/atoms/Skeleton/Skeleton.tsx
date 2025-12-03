import { StyledSkeleton } from "./Skeleton.styles";
import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton = ({
  width,
  height,
  circle = false,
  variant = "rect",
  animation = "shimmer",
  rounded = true,
  style,
  className,
}: SkeletonProps) => {
  const isCircle = variant === "circle" || circle;
  const isText = variant === "text";

  return (
    <StyledSkeleton
      className={className}
      style={style}
      $width={width}
      $height={height}
      $circle={isCircle}
      $variant={isText ? "text" : isCircle ? "circle" : "rect"}
      $animation={animation}
      $rounded={rounded}
    />
  );
};
