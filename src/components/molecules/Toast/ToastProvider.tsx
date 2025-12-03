import { useCallback, useEffect, useState } from "react";
import { ToastContext } from "./ToastContext";
import type {
  ToastItem,
  ToastOptions,
  ToastProviderProps,
} from "./Toast.types";
import { ToastContainer } from "./ToastContainer";
import { setExternalToastHandlers } from "./toast"; // 🔥 import만

export const ToastProvider = ({
  children,
  position = "top-right",
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((opts: ToastOptions) => {
    const id = opts.id ?? `${Date.now()}-${Math.random()}`;
    const item: ToastItem = {
      id,
      message: opts.message,
      variant: opts.variant || "default",
      duration: opts.duration || 3000,
    };

    setToasts((prev) => [...prev, item]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    // 외부에 핸들러 주입
    setExternalToastHandlers(addToast, removeToast);
  }, [addToast, removeToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer position={position} />
    </ToastContext.Provider>
  );
};
