import styled from "styled-components";
import { Sidebar } from "./sidebar";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 32px 48px;
  max-width: 1120px;
  margin: 0 auto;
`;

export const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Sidebar />
      <Content>{children}</Content>
    </Layout>
  );
};
