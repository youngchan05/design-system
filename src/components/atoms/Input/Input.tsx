import React, { useId, useState } from "react";
import {
  Wrapper,
  InputContainer,
  StyledInput,
  Label,
  IconButton,
} from "./Input.styles";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import type { InputProps } from "./Input.types";
import { HelperText } from "../HelperText/HelperText";

export const Input = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  size = "md",
  leftIcon,
  rightIcon,
  clearable = false,
  required = false,
  type = "text",
  id,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [value, setValue] = useState(props.value ?? "");
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e); // 기존 onChange 호출 유지
  };

  const clearInput = () => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;

    setValue("");
    props.onChange?.(event);
  };

  return (
    <Wrapper $fullWidth={fullWidth}>
      {label && <Label required={required}>{label}</Label>}

      <InputContainer $error={error} $disabled={props.disabled} $size={size}>
        {leftIcon && <span>{leftIcon}</span>}

        <StyledInput
          id={inputId}
          {...props}
          value={value}
          onChange={handleChange}
          type={isPassword && showPassword ? "text" : type}
        />

        {/* rightIcon이 있다면 표시 */}
        {rightIcon && <span>{rightIcon}</span>}

        {/* clear button */}
        {clearable && value && !isPassword && (
          <IconButton type="button" onClick={clearInput}>
            <FiX size={16} />
          </IconButton>
        )}

        {/* password toggle */}
        {isPassword && (
          <IconButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </IconButton>
        )}
      </InputContainer>

      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </Wrapper>
  );
};
