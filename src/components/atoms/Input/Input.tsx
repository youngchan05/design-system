import {
  Wrapper,
  InputContainer,
  StyledInput,
  IconButton,
} from "./Input.styles";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import type { InputProps } from "./Input.types";
import { Text } from "../Text/Text.styles";
import useInput from "./useInput";

export const Input = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  size = "md",
  leftIcon,
  rightIcon,
  clearable = true,
  required = false,
  type = "text",
  id,
  value,
  ...props
}: InputProps) => {
  const {
    selectedValue,
    inputId,
    clearInput,
    handleChange,
    isPassword,
    showPassword,
    setShowPassword,
    inputRef,
  } = useInput({
    onChange: props.onChange,
    value,
    type,
    id,
  });

  return (
    <Wrapper $fullWidth={fullWidth}>
      {label && (
        <Text.Label htmlFor={inputId} required={required}>
          {label}
        </Text.Label>
      )}

      <InputContainer $error={error} $disabled={props.disabled} $size={size}>
        {leftIcon && <span>{leftIcon}</span>}

        <StyledInput
          ref={inputRef}
          id={inputId}
          {...props}
          value={selectedValue}
          onChange={handleChange}
          type={isPassword && showPassword ? "text" : type}
        />

        {/* clear button */}
        {clearable && selectedValue && (
          <IconButton type="button" onClick={clearInput}>
            <FiX size={16} />
          </IconButton>
        )}

        {/* rightIcon이 있다면 표시 */}
        {rightIcon && <span>{rightIcon}</span>}

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

      {helperText && <Text.Helper $error={error}>{helperText}</Text.Helper>}
    </Wrapper>
  );
};
