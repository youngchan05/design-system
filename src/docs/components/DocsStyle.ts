import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 8px;
`;
