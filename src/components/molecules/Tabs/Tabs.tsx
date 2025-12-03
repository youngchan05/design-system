import { useState } from "react";
import { TabsContext } from "./TabsContext";
import type { TabsProps } from "./Tabs.types";

export const Tabs = ({
  value,
  defaultValue,
  onChange,
  children,
  size = "md",
  variant = "underline",
  fullWidth = false,
}: TabsProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);

  const currentValue = isControlled ? value : internalValue;

  const handleChange = (v: string) => {
    if (!isControlled) setInternalValue(v);
    onChange?.(v);
  };

  return (
    <TabsContext.Provider
      value={{
        value: currentValue,
        onChange: handleChange,
        size,
        variant,
        fullWidth,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
