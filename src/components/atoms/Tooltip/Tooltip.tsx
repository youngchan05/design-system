import { useState, useRef } from "react";
import { TooltipBox, Arrow } from "./Tooltip.styles";
import type { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  children,
  content,
  placement = "top",
  showDelay = 300,
  hideDelay = 150,
  arrow = true,
  disabled = false,
}: TooltipProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleShow = () => {
    if (disabled) return;

    if (hideTimer.current) clearTimeout(hideTimer.current);

    showTimer.current = setTimeout(() => {
      setVisible(true);
    }, showDelay);
  };

  const handleHide = () => {
    if (showTimer.current) clearTimeout(showTimer.current);

    hideTimer.current = setTimeout(() => {
      setVisible(false);
    }, hideDelay);
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        onFocus={handleShow}
        onBlur={handleHide}
        style={{ display: "inline-flex", position: "relative" }}
      >
        {children}
        {visible && (
          <TooltipBox $placement={placement}>
            {content}

            {arrow && <Arrow className="arrow" />}
          </TooltipBox>
        )}
      </div>
    </>
  );
};
