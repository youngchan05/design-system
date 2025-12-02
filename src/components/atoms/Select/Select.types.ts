export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;

  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: SelectSize;

  onChange?: (value: string) => void;
}
