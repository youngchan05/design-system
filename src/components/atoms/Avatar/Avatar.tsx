import { useState } from "react";
import { AvatarWrapper, AvatarImg } from "./Avatar.styles";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = ({
  src,
  alt,
  name,
  fallback,
  size = "md",
  shape = "circle",
  className,
}: AvatarProps) => {
  const [error, setError] = useState(false);

  const getInitials = () => {
    if (fallback) return fallback;
    if (!name) return "?";

    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
    return (
      parts[0].slice(0, 1).toUpperCase() + parts[1].slice(0, 1).toUpperCase()
    );
  };

  return (
    <AvatarWrapper $size={size} $shape={shape} className={className}>
      {!error && src ? (
        <AvatarImg src={src} alt={alt} onError={() => setError(true)} />
      ) : (
        <span>{getInitials()}</span>
      )}
    </AvatarWrapper>
  );
};
