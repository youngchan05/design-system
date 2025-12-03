import { createContext } from "react";
import type { ToastItem, ToastOptions } from "./Toast.types";

export interface ToastContextValue {
  toasts: ToastItem[];
  addToast: (o: ToastOptions) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
