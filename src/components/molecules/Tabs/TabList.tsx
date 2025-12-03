import { useEffect, useRef, useState } from "react";
import { useTabsContext } from "./TabsContext";
import { TabListWrapper, Indicator } from "./Tabs.styles";
import type { TabListProps } from "./Tabs.types";

export const TabList = ({ children, fullWidth }: TabListProps) => {
  const { value } = useTabsContext();
  const listRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!listRef.current) return;

    const active = listRef.current.querySelector(
      `[data-tab-value="${value}"]`
    ) as HTMLElement | null;

    if (active) {
      const rect = active.getBoundingClientRect();
      const parentRect = listRef.current.getBoundingClientRect();
      setIndicator({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [value]);

  return (
    <TabListWrapper ref={listRef} $fullWidth={!!fullWidth}>
      {children}
      <Indicator left={indicator.left} width={indicator.width} />
    </TabListWrapper>
  );
};
