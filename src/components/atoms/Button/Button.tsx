// Button.tsx
import type { Intent, VisualStyle } from "@components/types";
import { StyledButton } from "./Button.stlyes";
import type { ButtonProps } from "./Button.types";
import { colors } from "@foundations/colors";

export const Button = ({
  children,
  variant = "primary-solid",
  size = "md",
  fullWidth,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner intent={variant} />
          {children}
        </>
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </StyledButton>
  );
};

const Spinner = ({ intent }: { intent: string }) => {
  const color = getSpinnerColor(intent);

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 50 50"
      style={{ animation: "spin 1s linear infinite" }}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="100"
        strokeDashoffset="60"
      />
      <style>
        {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
      </style>
    </svg>
  );
};

const getSpinnerColor = (variant: string) => {
  const [intent, style] = variant.split("-") as [Intent, VisualStyle];

  const color = colors[intent];
  // outline / ghost → intent 색의 메인 컬러
  if (style === "outline" || style === "ghost") {
    return color[500]; // primary or intent-based 색상 가능
  }

  // solid → white
  return "#fff";
};
