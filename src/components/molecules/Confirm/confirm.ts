import type {
  AlertOptions,
  ConfirmOptions,
  DialogState,
} from "./Confirm.types";

type OpenDialogHandler = (state: DialogState) => void;

// alert → () => void
// confirm → (value: boolean) => void
type ResolveFn = (() => void) | ((value: boolean) => void) | null;

let openDialog: OpenDialogHandler | null = null;
let resolveFn: ResolveFn = null;

export const setConfirmHandler = (handler: OpenDialogHandler) => {
  openDialog = handler;
};

// ALERT
export const alert = (options: string | AlertOptions): Promise<void> => {
  return new Promise<void>((resolve) => {
    resolveFn = resolve;

    const opts = typeof options === "string" ? { message: options } : options;

    openDialog?.({
      open: true,
      type: "alert",
      title: opts.title,
      message: opts.message,
      confirmText: opts.confirmText ?? "확인",
      cancelText: "",
      variant: "default",
    });
  });
};

// CONFIRM
export const confirm = (options: string | ConfirmOptions): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    resolveFn = resolve;

    const opts = typeof options === "string" ? { message: options } : options;

    openDialog?.({
      open: true,
      type: "confirm",
      title: opts.title,
      message: opts.message,
      confirmText: opts.confirmText ?? "확인",
      cancelText: opts.cancelText ?? "취소",
      variant: opts.variant ?? "default",
    });
  });
};

// Provider에서 호출됨
export const resolveDialog = (value?: boolean) => {
  if (!resolveFn) return;

  // () => void 인 경우 (alert)
  if (resolveFn.length === 0) {
    (resolveFn as () => void)();
  } else {
    // (value: boolean) => void 인 경우 (confirm)
    (resolveFn as (v: boolean) => void)(Boolean(value));
  }

  resolveFn = null;
};
