// Button.styles.ts
import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button.types";
import type { DefaultTheme } from "styled-components";
import type { ColorScale, Intent, VisualStyle } from "@components/types";

interface StyledProps {
  $fullWidth?: boolean;
  $loading?: boolean;
}

// size
const buttonSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "sm":
      return css`
        height: 32px;
        font-size: 13px;
        padding: 0 12px;
      `;
    case "lg":
      return css`
        height: 48px;
        font-size: 15px;
        padding: 0 20px;
      `;
    default:
      return css`
        height: 40px;
        font-size: 14px;
        padding: 0 16px;
      `;
  }
};

/** "primary-soft" → { intent:"primary", style:"soft" } */
export const parseVariant = (variant: string) => {
  const [intent, style] = variant.split("-") as [Intent, VisualStyle];
  return { intent, style };
};

/** intent 기반 컬러 팔레트 얻기 */
const getIntentPalette = (theme: DefaultTheme, intent: Intent) => {
  switch (intent) {
    case "primary":
      return theme.colors.primary;
    case "neutral":
      return theme.colors.neutral;
    case "secondary":
      return theme.colors.secondary;
    case "success":
      return theme.colors.success;
    case "warning":
      return theme.colors.warning;
    case "danger":
      return theme.colors.danger;
    case "info":
      return theme.colors.info;
  }
};

/** style(solid/outline/soft/link/ghost) 별 스타일 */
const visualStyleMap = ({
  palette,
  style,
}: {
  theme: DefaultTheme;
  palette: ColorScale;
  style: VisualStyle;
}) => {
  switch (style) {
    case "solid":
      return css`
        background: ${palette[500]};
        color: white;
        &:hover {
          background: ${palette[600]};
        }
        &:active {
          background: ${palette[700]};
        }
      `;

    case "outline":
      return css`
        background: white;
        color: ${palette[600]};
        border: 1px solid ${palette[500]};
        &:hover {
          background: ${palette[50]};
        }
      `;

    case "ghost":
      return css`
        background: transparent;
        color: ${palette[600]};
        &:hover {
          background: ${palette[50]};
        }
      `;

    case "soft":
      return css`
        background: ${palette[50]};
        color: ${palette[700]};
        &:hover {
          background: ${palette[100]};
        }
      `;

    case "link":
      return css`
        background: transparent;
        color: ${palette[600]};
        padding: 0;
        height: auto;
        font-size: inherit;

        &:hover {
          text-decoration: underline;
        }
      `;
  }
};

/** 전체 variant 생성 */
const buttonVariant = ({
  theme,
  variant,
}: {
  theme: DefaultTheme;
  variant: ButtonProps["variant"];
}) => {
  const { intent, style } = parseVariant(variant ?? "primary-solid");

  const palette = getIntentPalette(theme, intent);

  return visualStyleMap({ theme, palette, style });
};

export const StyledButton = styled.button<ButtonProps & StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all 0.2s ease;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  border: none;

  ${(props) => buttonSize(props.size)}
  ${({ theme, variant }) => buttonVariant({ theme, variant })}
  
  ${({ disabled, $loading }) =>
    (disabled || $loading) &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;
