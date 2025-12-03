import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

export const TooltipPortal = ({ children }: PortalProps) => {
  return createPortal(children, document.body);
};
