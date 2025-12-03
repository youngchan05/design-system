import { useContext } from "react";
import { ToastWrapper } from "./Toast.styles";
import { ToastContext } from "./ToastContext";
import { ToastItemComponent } from "./ToastItem";
import type { ToastPosition } from "./Toast.types";

export const ToastContainer = ({ position }: { position: ToastPosition }) => {
  const ctx = useContext(ToastContext);
  if (!ctx) return null;

  return (
    <ToastWrapper $position={position}>
      {ctx.toasts.map((t) => (
        <ToastItemComponent key={t.id} item={t} onRemove={ctx.removeToast} />
      ))}
    </ToastWrapper>
  );
};
