import type { ReactNode } from "react";

export type ConfirmVariant = "default" | "danger";

export interface AlertOptions {
  title?: string;
  message: ReactNode;
  confirmText?: string;
}

export interface ConfirmOptions {
  title?: string;
  message: ReactNode;
  confirmText?: string;
  cancelText?: string;
  variant?: ConfirmVariant;
}

export interface DialogState {
  open: boolean;
  type: "alert" | "confirm";
  title?: string;
  message: ReactNode;
  confirmText?: string;
  cancelText?: string;
  variant?: ConfirmVariant;
}
