import React, { useEffect, useLayoutEffect, useRef } from "react";
import type { ModalProps } from "./Modal.types";

const useModal = ({
  open,
  closeOnOverlayClick,
  onClose,
}: {
  open: ModalProps["open"];
  closeOnOverlayClick: ModalProps["closeOnOverlayClick"];
  onClose: ModalProps["onClose"];
}) => {
  const FOCUSABLE_SELECTORS =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key === "Tab" && focusable.length > 0) {
        if (event.shiftKey) {
          // reverse
          if (document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
        } else {
          // forward
          if (document.activeElement === last) {
            event.preventDefault();
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

  return {
    handleOverlayClick,
    handleDialogClick,
    dialogRef,
  };
};

export default useModal;
