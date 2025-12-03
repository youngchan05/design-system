export interface SkeletonProps {
  width?: string | number;
  height?: string | number;

  /** variant="circle" 로 대체 가능 */
  circle?: boolean;

  /** 형태 지정 */
  variant?: "rect" | "text" | "circle";

  /** 애니메이션 */
  animation?: "pulse" | "shimmer" | "none";

  /** radius 여부 (circle 제외) */
  rounded?: boolean;

  style?: React.CSSProperties;
  className?: string;
}
