import type { ReactNode } from "react";

export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastOptions {
  id?: string;
  message: string | ReactNode;
  variant?: ToastVariant;
  duration?: number; // ms
}

export interface ToastItem extends ToastOptions {
  id: string;
}

export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
}
