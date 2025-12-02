import {
  Wrapper,
  HiddenInput,
  Track,
  Thumb,
  LabelBox,
  HelperText,
} from "./Switch.styles";
import type { SwitchProps } from "./Switch.types";

export const Switch = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  size = "md",
  disabled = false,
  checked,
  defaultChecked,
  onChange,
  ...props
}: SwitchProps) => {
  return (
    <Wrapper $fullWidth={fullWidth}>
      <HiddenInput
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        role="switch"
        aria-checked={checked}
        {...props}
      />

      <Track
        $checked={checked}
        $disabled={disabled}
        $error={error}
        $size={size}
      >
        <Thumb $checked={checked} $size={size} />
      </Track>

      {(label || helperText) && (
        <LabelBox>
          {label && <span>{label}</span>}
          {helperText && <HelperText $error={error}>{helperText}</HelperText>}
        </LabelBox>
      )}
    </Wrapper>
  );
};
