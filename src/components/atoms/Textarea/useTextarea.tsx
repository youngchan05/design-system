import React, { useEffect, useId, useRef, useState } from "react";
import type { TextareaProps } from "./Textarea.types";

function useTextarea({ onChange, value, id }: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  const [internalValue, setInternalValue] = useState(value);

  const isControlled = value !== undefined;

  const selectedValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e); // 기존 onChange 호출 유지
  };

  const clearInput = () => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLTextAreaElement>;

    if (!isControlled) {
      setInternalValue("");
    }
    onChange?.(event);
    textareaRef.current?.focus();
  };

  useEffect(() => {
    setInternalValue(value);
  }, [value]);
  return {
    textareaId,
    clearInput,
    handleChange,
    selectedValue,
    textareaRef,
  };
}

export default useTextarea;
