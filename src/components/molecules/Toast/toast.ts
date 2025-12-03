import type { ToastOptions } from "./Toast.types";

let externalAdd: (o: ToastOptions) => void;
let externalRemove: (id: string) => void;

export const setExternalToastHandlers = (
  addFn: (o: ToastOptions) => void,
  removeFn: (id: string) => void
) => {
  externalAdd = addFn;
  externalRemove = removeFn;
};

export const toast = {
  show: (opts: ToastOptions) => externalAdd?.(opts),
  success: (msg: string) => externalAdd?.({ message: msg, variant: "success" }),
  error: (msg: string) => externalAdd?.({ message: msg, variant: "error" }),
  warning: (msg: string) => externalAdd?.({ message: msg, variant: "warning" }),
  info: (msg: string) => externalAdd?.({ message: msg, variant: "info" }),

  dismiss: (id: string) => externalRemove?.(id),
};
