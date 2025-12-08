import { ModalPortal } from "./ModalPortal";
import {
  Overlay,
  Dialog,
  Header,
  Title,
  CloseButton,
  Body,
  Footer,
} from "./Modal.styles";
import type { ModalProps } from "./Modal.types";
import useModal from "./useModal";

export const Modal = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeOnOverlayClick = true,
  hideCloseButton = false,
  ariaLabel,
}: ModalProps) => {
  const modalHandlers = useModal({ open, closeOnOverlayClick, onClose });

  if (!modalHandlers) return null;

  const { handleOverlayClick, handleDialogClick, dialogRef } = modalHandlers;

  const labelId = title ? "modal-title" : undefined;

  return (
    <ModalPortal>
      <Overlay onClick={handleOverlayClick}>
        <Dialog
          $size={size}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          aria-label={ariaLabel}
          tabIndex={-1}
          onClick={handleDialogClick}
        >
          {(title || !hideCloseButton) && (
            <Header>
              {title && <Title id={labelId}>{title}</Title>}
              {!hideCloseButton && (
                <CloseButton
                  type="button"
                  aria-label="Close modal"
                  onClick={onClose}
                >
                  ✕
                </CloseButton>
              )}
            </Header>
          )}

          {children && <Body>{children}</Body>}

          {footer && <Footer>{footer}</Footer>}
        </Dialog>
      </Overlay>
    </ModalPortal>
  );
};
