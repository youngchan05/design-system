import type { DefaultTheme } from "styled-components/dist/types";
import type { ColorScale, Intent, VisualStyle } from "./types";
import { css } from "styled-components";

/** "primary-soft" → { intent:"primary", style:"soft" } */
export const parseVariant = (variant: string) => {
  const [intent, style] = variant.split("-") as [Intent, VisualStyle];
  return { intent, style };
};

/** intent 기반 컬러 팔레트 얻기 */
export const getIntentPalette = (theme: DefaultTheme, intent: Intent) => {
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

/** 전체 variant 생성 */
export const styleVariant = ({
  theme,
  variant,
}: {
  theme: DefaultTheme;
  variant?: `${Intent}-${VisualStyle}`;
}) => {
  const { intent, style } = parseVariant(variant ?? "primary-solid");

  const palette = getIntentPalette(theme, intent);

  return visualStyleMap({ theme, palette, style });
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
