import { type ReactNode } from "react";
import styled from "styled-components";

export const HelperText = ({
  error,
  children,
}: {
  error?: boolean;
  children: ReactNode;
}) => {
  return <HelperTextWrapper $error={error}>{children}</HelperTextWrapper>;
};

const HelperTextWrapper = styled.span<{ $error?: boolean }>`
  font-size: 12px;
  color: ${({ theme, $error }) =>
    $error ? "#E5484D" : theme.colors.gray[500]};
`;
