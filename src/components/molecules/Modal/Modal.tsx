import type { KeyboardEvent } from "react";
import React, { useEffect, useLayoutEffect, useRef } from "react";
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

const FOCUSABLE_SELECTORS =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

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
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // body scroll lock
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // focus trap + esc
  useLayoutEffect(() => {
    if (!open || !dialogRef.current) return;

    const dialogEl = dialogRef.current;

    const focusable =
      dialogEl.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // 첫 focus 이동
    if (first) {
      first.focus();
    } else {
      dialogEl.focus();
    }

    const handleKeyDown = (event: KeyboardEvent | KeyboardEventInit | any) => {
      if ("key" in event === false) return;

      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key === "Tab" && focusable.length > 0) {
        const e = event as KeyboardEvent;
        if (e.shiftKey) {
          // reverse
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          // forward
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    dialogEl.addEventListener("keydown", handleKeyDown);

    return () => {
      dialogEl.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const handleDialogClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.stopPropagation();
  };

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
