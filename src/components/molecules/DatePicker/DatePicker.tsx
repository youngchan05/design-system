import React from "react";
import styled from "styled-components";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import type { DatePickerProps } from "./DatePicker.types";
import useDatePicker from "./useDatePicker";

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

  return (
    <Wrapper ref={ref}>
      {label && <Label>{label}</Label>}

      <InputWrapper
        $disabled={disabled}
        onClick={handleToggleOpen}
        aria-disabled={disabled}
      >
        <InputText $hasValue={!!displayText}>
          {displayText || placeholder}
        </InputText>
        <IconWrapper aria-hidden="true">
          <CalendarIcon />
        </IconWrapper>
      </InputWrapper>

      {open && (
        <Popover>
          <StyledDayPicker
            mode={mode}
            selected={mode === "single" ? single : range}
            onSelect={
              mode === "single" ? handleSingleSelect : handleRangeSelect
            }
            captionLayout="dropdown"
            fromYear={fromYear}
            toYear={toYear}
            defaultMonth={
              mode === "single"
                ? single || today
                : range?.from || range?.to || today
            }
            showOutsideDays
            fixedWeeks
          />
        </Popover>
      )}
    </Wrapper>
  );
};

/* ---------------- styled-components ---------------- */

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
`;

const Label = styled.label`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const InputWrapper = styled.button<{ $disabled?: boolean }>`
  width: 240px;
  min-height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  text-align: left;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

const InputText = styled.span<{ $hasValue: boolean }>`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.colors.gray[900] : theme.colors.gray[400]};
`;

const IconWrapper = styled.span`
  display: inline-flex;
  margin-left: 8px;
`;

const Popover = styled.div`
  position: absolute;
  margin-top: 4px;
  z-index: 20;
  background-color: white;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  padding: 12px;
`;

// DayPicker 기본 스타일 커스터마이징
const StyledDayPicker = styled(DayPicker)`
  /* DayPicker root */
  .rdp {
    --rdp-accent-color: ${({ theme }) => theme.colors.primary[600]};
    --rdp-accent-color-dark: ${({ theme }) => theme.colors.primary[700]};
    --rdp-background-color: white;
    --rdp-outline: 1px solid ${({ theme }) => theme.colors.primary[600]};
    --rdp-outline-selected: 1px solid
      ${({ theme }) => theme.colors.primary[600]};
    --rdp-accent-color-light: ${({ theme }) => theme.colors.primary[100]};
    margin: 0;
  }

  .rdp-caption {
    margin-bottom: 8px;
  }

  .rdp-caption_label {
    font-weight: 600;
    font-size: 14px;
  }

  .rdp-head_cell {
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  .rdp-day {
    font-size: 13px;
    height: 32px;
    width: 32px;
  }

  .rdp-day_selected,
  .rdp-day_selected:focus-visible,
  .rdp-day_selected:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    color: white;
  }

  .rdp-day_range_start,
  .rdp-day_range_end {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    color: white;
  }

  .rdp-day_range_middle {
    background-color: ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.primary[700]};
  }

  .rdp-day_today:not(.rdp-day_selected) {
    border: 1px solid ${({ theme }) => theme.colors.primary[400]};
  }

  .rdp-day_disabled {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

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
