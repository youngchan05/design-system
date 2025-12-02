export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "rounded" | "square";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string; // fallback initials 자동 생성용
  fallback?: string; // 직접 fallback 텍스트 전달 가능
  size?: AvatarSize;
  shape?: AvatarShape;
  className?: string;
}
