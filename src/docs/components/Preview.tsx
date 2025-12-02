import styled from "styled-components";

const Box = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding: 20px;
  margin: 16px 0 32px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Preview = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Row>{children}</Row>
    </Box>
  );
};
