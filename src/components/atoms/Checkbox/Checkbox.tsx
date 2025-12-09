import { useEffect, useRef } from "react";

import type { CheckboxProps } from "./Checkbox.types";
import {
  Wrapper,
  HiddenInput,
  Box,
  IndeterminateIcon,
  LabelText,
} from "./Checkbox.styles";
import { CgCheck } from "react-icons/cg";
import { Text } from "../Text/Text.styles";

export const Checkbox = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  size = "md",
  disabled = false,
  indeterminate = false,
  checked,
  defaultChecked,
  onChange,
  ...props
}: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // HTML 체크박스의 indeterminate 프로퍼티는 DOM 직접 제어 필요
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <Wrapper $fullWidth={fullWidth}>
      <HiddenInput
        ref={inputRef}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />

      <Box
        $checked={checked}
        $disabled={disabled}
        $error={error}
        $size={size}
        $indeterminate={indeterminate}
      >
        {indeterminate && <IndeterminateIcon />}
        {!indeterminate && checked && <CgCheck color="#fff" />}
      </Box>

      {(label || helperText) && (
        <LabelText>
          {label && <span>{label}</span>}
          {helperText && <Text.Helper $error={error}>{helperText}</Text.Helper>}
        </LabelText>
      )}
    </Wrapper>
  );
};
