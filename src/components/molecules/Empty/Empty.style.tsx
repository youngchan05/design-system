import styled from "styled-components";

/* ---------------- styled ---------------- */

export const EmptyWrapper = styled.div<{ $fullHeight: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $fullHeight }) =>
    $fullHeight ? "center" : "flex-start"};
  text-align: center;
  width: 100%;
  height: ${({ $fullHeight }) => ($fullHeight ? "100%" : "auto")};
`;

export const EmptyIcon = styled.div<{ $size: string }>`
  svg {
    width: ${({ $size }) =>
      $size === "lg" ? "64px" : $size === "sm" ? "32px" : "48px"};
    height: auto;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const EmptyTitle = styled.h3<{ $size: string }>``;

export const EmptyDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};

  max-width: 340px;
`;

export const EmptyAction = styled.div``;
