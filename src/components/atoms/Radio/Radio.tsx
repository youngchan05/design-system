import React from "react";
import { Wrapper, HiddenInput, Circle, Dot, LabelBox } from "./Radio.styles";
import type { RadioProps } from "./Radio.types";
import { HelperText } from "../HelperText/HelperText";

export const Radio = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  size = "md",
  disabled = false,
  checked,
  defaultChecked,
  onChange,
  name,
  ...props
}: RadioProps) => {
  return (
    <Wrapper $fullWidth={fullWidth}>
      <HiddenInput
        type="radio"
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />

      <Circle
        $checked={checked}
        $error={error}
        $disabled={disabled}
        $size={size}
      >
        <Dot $checked={checked} $size={size} />
      </Circle>

      {(label || helperText) && (
        <LabelBox>
          {label && <span>{label}</span>}
          {helperText && <HelperText error={error}>{helperText}</HelperText>}
        </LabelBox>
      )}
    </Wrapper>
  );
};
