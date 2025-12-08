import type { DateRange } from "react-day-picker";

type DatePickerMode = "single" | "range";

export interface DatePickerProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  /** "single" | "range" */
  mode?: DatePickerMode;
  /** single: Date | undefined, range: DateRange | undefined */
  value?: Date | DateRange | undefined;
  onChange?: (value: Date | DateRange | undefined) => void;
  /** 년 범위 (캡션 드롭다운에 사용) */
  fromYear?: number;
  toYear?: number;
}
