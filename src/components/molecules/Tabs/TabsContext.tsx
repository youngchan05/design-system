import { createContext, useContext } from "react";

interface TabsContextValue {
  value: string | undefined;
  onChange: (v: string) => void;
  size: "sm" | "md" | "lg";
  variant: "underline" | "soft" | "solid";
  fullWidth: boolean;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs components must be used inside <Tabs />");
  }
  return ctx;
};
