// src/components/feedback/Confirm/ConfirmProvider.tsx
import { useEffect, useState } from "react";
import { ConfirmDialog } from "./ConfirmDialog";
import { setConfirmHandler, resolveDialog } from "./confirm";
import type { DialogState } from "./Confirm.types";

export const ConfirmProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, setState] = useState<DialogState>({
    open: false,
    type: "alert",
    title: "",
    message: "",
    confirmText: "확인",
    cancelText: "취소",
    variant: "default",
  });

  // Provider 내부에서 resolveDialog를 훅킹해서
  // 호출되는 즉시 state를 닫아주는 래퍼 함수 만들기
  const closeAndResolve = (value?: boolean) => {
    setState((prev) => ({ ...prev, open: false }));
    resolveDialog(value);
  };

  useEffect(() => {
    // openDialog 호출 → 상태 열기
    setConfirmHandler((dialogState: DialogState) => {
      setState(dialogState);
    });
  }, []);

  return (
    <>
      {children}
      <ConfirmDialog state={state} close={closeAndResolve} />
    </>
  );
};
