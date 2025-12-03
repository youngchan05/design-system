import { useEffect, useState } from "react";
import { ToastBox } from "./Toast.styles";
import type { ToastItem } from "./Toast.types";

interface Props {
  item: ToastItem;
  onRemove: (id: string) => void;
}

export const ToastItemComponent = ({ item, onRemove }: Props) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!item.duration) return;

    const timer = setTimeout(() => {
      setLeaving(true);
      setTimeout(() => onRemove(item.id), 250);
    }, item.duration);

    return () => clearTimeout(timer);
  }, [item, onRemove]);

  return (
    <ToastBox
      $variant={item.variant || "default"}
      $leave={leaving}
      role="alert"
    >
      {item.message}
    </ToastBox>
  );
};
