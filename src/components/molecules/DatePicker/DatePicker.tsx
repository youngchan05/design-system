import React from "react";
import "react-day-picker/dist/style.css";
import type { DatePickerProps } from "./DatePicker.types";
import useDatePicker from "./useDatePicker";
import { Input } from "@components/atoms";
import { Popover, StyledDayPicker, Wrapper } from "./DatePicker.styled";

/**
 * 공통 DatePicker
 * - mode="single" (기본) 단일 날짜 선택
 * - mode="range" 범위 선택
 */
export const DatePicker = ({
  label,
  placeholder = "날짜를 선택하세요",
  disabled,
  mode = "single",
  value,
  onChange,
  fromYear = 2000,
  toYear = new Date().getFullYear() + 5,
}: DatePickerProps) => {
  const {
    open,
    ref,
    handleToggleOpen,
    handleSingleSelect,
    handleRangeSelect,
    displayText,
    single,
    range,
  } = useDatePicker({
    value,
    onChange,
    mode,
    disabled,
  });

  const today = new Date();

  const commonProps = {
    captionLayout: "dropdown" as const,
    fromYear,
    toYear,
    defaultMonth:
      mode === "single" ? single || today : range?.from || range?.to || today,
    showOutsideDays: true,
    fixedWeeks: true as const,
  };

  return (
    <Wrapper ref={ref}>
      <Input
        readOnly
        label={label}
        placeholder={placeholder}
        onClick={handleToggleOpen}
        rightIcon={<CalendarIcon />}
        value={displayText}
        onChange={() => handleSingleSelect(undefined)}
      />

      {open && (
        <Popover>
          {mode === "single" ? (
            <StyledDayPicker
              mode="single"
              selected={single}
              onSelect={handleSingleSelect}
              {...commonProps}
            />
          ) : (
            <StyledDayPicker
              mode="range"
              selected={range}
              onSelect={handleRangeSelect}
              {...commonProps}
            />
          )}
        </Popover>
      )}
    </Wrapper>
  );
};

/** 심플 캘린더 아이콘 */
const CalendarIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="16"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <line
      x1="3"
      y1="9"
      x2="21"
      y2="9"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <line
      x1="9"
      y1="3"
      x2="9"
      y2="7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <line
      x1="15"
      y1="3"
      x2="15"
      y2="7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
