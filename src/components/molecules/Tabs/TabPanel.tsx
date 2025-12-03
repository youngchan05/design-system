import { useTabsContext } from "./TabsContext";
import { PanelWrapper } from "./Tabs.styles";
import type { TabPanelProps } from "./Tabs.types";

export const TabPanel = ({ value, children }: TabPanelProps) => {
  const { value: current } = useTabsContext();

  if (current !== value) return null;

  return <PanelWrapper>{children}</PanelWrapper>;
};
