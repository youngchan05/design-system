import React from "react";
import type { ButtonProps, ButtonVariant } from "./Button.types";
import { StyledButton } from "./Button.stlyes";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  ...rest
}) => {
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
        <Spinner color={getSpinnerColor(variant)} />
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

const Spinner = ({ color = "#fff" }) => (
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
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </svg>
);

const getSpinnerColor = (variant: ButtonVariant) => {
  switch (variant) {
    case "outline":
    case "ghost":
    case "secondary":
      return "#4A63FF"; // primary color
    case "destructive":
      return "#fff";
    default: // primary
      return "#fff";
  }
};
