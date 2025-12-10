import React, { useEffect, useId, useRef, useState } from "react";
import type { InputProps } from "./Input.types";

function useInput({ onChange, value, type, id }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const [internalValue, setInternalValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const isControlled = value !== undefined;

  const selectedValue = isControlled ? value : internalValue;

  const isPassword = type === "password";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e); // 기존 onChange 호출 유지
  };

  const clearInput = () => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;

    if (!isControlled) {
      setInternalValue("");
    }
    onChange?.(event);
    inputRef.current?.focus();
  };

  useEffect(() => {
    setInternalValue(value);
  }, [value]);
  return {
    inputId,
    clearInput,
    handleChange,
    isPassword,
    showPassword,
    setShowPassword,
    selectedValue,
    inputRef,
  };
}

export default useInput;
