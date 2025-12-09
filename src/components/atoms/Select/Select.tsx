import React, { useEffect, useState, useRef } from "react";
import {
  Wrapper,
  Trigger,
  Menu,
  Option,
  Placeholder,
  Arrow,
} from "./Select.styles";
import type { SelectProps } from "./Select.types";
import { Text } from "../Text/Text.styles";

export const Select = ({
  options,
  value,
  defaultValue,
  placeholder = "Select...",
  label,
  helperText,
  error,
  disabled,
  fullWidth,
  size = "md",
  onChange,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;

  const selectedValue = isControlled ? value : internalValue;
  const selectedOption = options.find((o) => o.value === selectedValue);

  const toggleOpen = () => {
    if (!disabled) setOpen(!open);
  };

  const handleSelect = (v: string) => {
    if (isControlled) onChange?.(v);
    else {
      setInternalValue(v);
      onChange?.(v);
    }
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter") setOpen(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => {
        if (i === null) return 0;
        return Math.min(options.length - 1, i + 1);
      });
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => {
        if (i === null) return options.length - 1;
        return Math.max(0, i - 1);
      });
    }

    if (e.key === "Enter") {
      if (highlightIndex !== null) {
        handleSelect(options[highlightIndex].value);
      }
    }

    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // 바깥 클릭 감지
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <Wrapper ref={containerRef} $fullWidth={fullWidth}>
      {label && <label>{label}</label>}

      <Trigger
        $disabled={disabled}
        $error={error}
        $size={size}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        type="button"
      >
        {selectedOption ? (
          <span>{selectedOption.label}</span>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}

        <Arrow $open={open}>▼</Arrow>
        <Menu $open={open}>
          {options.map((opt, idx) => (
            <Option
              key={opt.value}
              $disabled={opt.disabled}
              $highlight={highlightIndex === idx}
              onClick={() => !opt.disabled && handleSelect(opt.value)}
            >
              {opt.label}
            </Option>
          ))}
        </Menu>
      </Trigger>

      {helperText && <Text.Helper $error={error}>{helperText}</Text.Helper>}
    </Wrapper>
  );
};
