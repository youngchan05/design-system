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
    console.log(resolve, "resolve");
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

export const resolveDialog = (value?: boolean) => {
  if (!resolveFn) return;

  // alert 의 resolve()는 매개변수가 없음
  if (resolveFn.length === 0) {
    (resolveFn as () => void)();
  } else {
    // confirm 의 resolve(value) 는 boolean 필요
    (resolveFn as (v: boolean) => void)(Boolean(value));
  }

  resolveFn = null;
};
