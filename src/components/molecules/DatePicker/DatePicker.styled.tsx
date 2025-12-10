/* ---------------- styled-components ---------------- */

import { DayPicker, type DayPickerProps } from "react-day-picker";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
`;

export const Popover = styled.div`
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
export const StyledDayPicker = styled(DayPicker)<DayPickerProps>`
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
