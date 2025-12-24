import { Wrapper, Trigger, Menu, Option } from "./Select.styles";
import type { SelectProps } from "./Select.types";
import { Input } from "../Input/Input";
import useSelect from "./useSelect";

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
  const {
    open,
    handleSelect,
    highlightIndex,
    toggleOpen,
    handleKeyDown,
    selectedOption,
    containerRef,
  } = useSelect({
    value,
    defaultValue,
    onChange,
    options,
  });

  return (
    <Wrapper ref={containerRef} $fullWidth={fullWidth}>
      <Trigger>
        <Input
          label={label}
          readOnly
          onClick={toggleOpen}
          disabled={disabled}
          error={error}
          size={size}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          clearable={false}
          helperText={helperText}
          value={selectedOption?.label || ""}
          rightIcon={
            <i
              style={{
                display: "inline-flex",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▼
            </i>
          }
        />
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
    </Wrapper>
  );
};
