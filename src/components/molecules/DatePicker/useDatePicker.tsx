import { useEffect, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import type { DatePickerProps } from "./DatePicker.types";
import { format } from "date-fns";

const useDatePicker = ({
  value,
  onChange,
  mode,
  disabled,
}: {
  mode: DatePickerProps["mode"];
  value: DatePickerProps["value"];
  onChange: DatePickerProps["onChange"];
  disabled: DatePickerProps["disabled"];
}) => {
  const [open, setOpen] = useState(false);
  const [single, setSingle] = useState<Date | undefined>(
    value instanceof Date ? value : undefined
  );
  const [range, setRange] = useState<DateRange | undefined>(
    !value || value instanceof Date ? undefined : value
  );

  const ref = useRef<HTMLDivElement | null>(null);

  // 바깥 클릭 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSingleSelect = (date: Date | undefined) => {
    setSingle(date);
    onChange?.(date);
    // 단일 선택은 바로 닫기
    if (date) setOpen(false);
  };

  const handleRangeSelect = (next: DateRange | undefined) => {
    setRange(next);
    onChange?.(next);
    // from, to 둘 다 선택된 경우만 닫기
    if (next?.from && next?.to && next.to > next.from) {
      setOpen(false);
    }
  };

  // 인풋에 보여줄 텍스트
  const displayText = (() => {
    if (mode === "single") {
      return single ? format(single, "yyyy-MM-dd") : "";
    }
    if (!range) return "";
    const from = range.from ? format(range.from, "yyyy-MM-dd") : "";
    const to = range.to ? format(range.to, "yyyy-MM-dd") : "";
    if (!from && !to) return "";
    return `${from || "____-__-__"} ~ ${to || "____-__-__"}`;
  })();

  const handleToggleOpen = () => {
    if (disabled) return;
    setOpen((prev) => !prev);
  };

  // 외부에서 value 바뀌었을 때 동기화
  useEffect(() => {
    if (mode === "single") {
      const next = value instanceof Date ? value : undefined;

      if (single?.getTime() !== next?.getTime()) {
        setSingle(next);
      }
    } else {
      const next =
        !value || value instanceof Date ? undefined : (value as DateRange);

      if (JSON.stringify(range) !== JSON.stringify(next)) {
        setRange(next);
      }
    }
  }, [value, mode]);

  return {
    open,
    ref,
    handleToggleOpen,
    handleSingleSelect,
    handleRangeSelect,
    displayText,
    single,
    range,
  };
};

export default useDatePicker;
