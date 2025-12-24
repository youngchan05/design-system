import styled from "styled-components";
import { SectionTitle } from "./DocsStyle";

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

const CodeBox = styled.pre`
  margin: 16px 0 32px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 12px;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre;
  line-height: 1.6;
  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
`;

export const Preview = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <Box>
        <Row>{children}</Row>
      </Box>
    </>
  );
};

Preview.Code = function PreviewCode({ children }: { children: string }) {
  return (
    <CodeBox>
      <code>{children}</code>
    </CodeBox>
  );
};
