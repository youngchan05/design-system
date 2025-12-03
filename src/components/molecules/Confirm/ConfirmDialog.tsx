import {
  Buttons,
  CancelButton,
  Dialog,
  Dim,
  Message,
  Title,
} from "./Confirm.styles";
import type { DialogState } from "./Confirm.types";

// src/components/feedback/Confirm/ConfirmDialog.tsx
interface Props {
  state: DialogState;
  close: (value?: boolean) => void;
}

export const ConfirmDialog = ({ state, close }: Props) => {
  if (!state.open) return null;

  const isAlert = state.type === "alert";

  const handleConfirm = () => {
    close(true); // 닫고 resolve(true)
  };

  const handleCancel = () => {
    close(false); // 닫고 resolve(false)
  };

  return (
    <Dim>
      <Dialog>
        {state.title && <Title>{state.title}</Title>}
        <Message>{state.message}</Message>

        <Buttons>
          {!isAlert && (
            <CancelButton $variant="default" onClick={handleCancel}>
              {state.cancelText}
            </CancelButton>
          )}

          <CancelButton
            $variant={state.variant || "default"}
            onClick={handleConfirm}
          >
            {state.confirmText}
          </CancelButton>
        </Buttons>
      </Dialog>
    </Dim>
  );
};
