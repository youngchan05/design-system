import { useTabsContext } from "./TabsContext";
import { TabButton } from "./Tabs.styles";
import type { TabProps } from "./Tabs.types";

export const Tab = ({
  value,
  disabled = false,
  icon,
  iconPosition = "left",
  children,
}: TabProps) => {
  const { value: current, onChange, size, variant } = useTabsContext();
  const active = current === value;

  return (
    <TabButton
      type="button"
      onClick={() => onChange(value)}
      $active={active}
      $disabled={disabled}
      $size={size}
      $variant={variant}
      data-tab-value={value}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </TabButton>
  );
};
