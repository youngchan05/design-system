import { TagWrapper, RemoveButton } from "./Tag.styles";
import type { TagProps } from "./Tag.types";

export const Tag = ({
  children,
  variant = "soft",
  color = "gray",
  size = "md",
  rounded = true,
  icon,
  iconRight,
  removable,
  onRemove,
  selectable,
  selected = false,
  onSelect,
}: TagProps) => {
  const handleClick = () => {
    if (selectable && onSelect) onSelect();
  };

  return (
    <TagWrapper
      $variant={variant}
      $color={color}
      $size={size}
      $rounded={rounded}
      $selectable={!!selectable}
      $selected={selected}
      onClick={handleClick}
    >
      {icon && <span>{icon}</span>}

      {children}

      {iconRight && <span>{iconRight}</span>}

      {removable && (
        <RemoveButton
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
        >
          ×
        </RemoveButton>
      )}
    </TagWrapper>
  );
};
