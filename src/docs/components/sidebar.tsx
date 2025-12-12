import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.aside`
  width: 240px;
  padding: 24px 20px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: white;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 18px 0 8px;
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 6px 8px;
  margin-bottom: 4px;
  border-radius: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-decoration: none;

  &.active {
    background: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.colors.primary[700]};
    font-weight: 500;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const Sidebar = () => {
  return (
    <Wrapper>
      <Logo>Design System</Logo>

      <SectionTitle>Overview</SectionTitle>
      <NavItem to="/">Getting started</NavItem>

      <SectionTitle>Components</SectionTitle>
      <NavItem to="/docs/color">color</NavItem>
      <NavItem to="/docs/button">Button</NavItem>

      <NavItem to="/docs/input">Input</NavItem>
      <NavItem to="/docs/textarea">Textarea</NavItem>

      <NavItem to="/docs/checkbox">Checkbox</NavItem>
      <NavItem to="/docs/radio">radio</NavItem>
      <NavItem to="/docs/switch">switch</NavItem>
      <NavItem to="/docs/select">select</NavItem>
      <NavItem to="/docs/datepicker">datepicker</NavItem>
      {/* <NavItem to="/docs/badge">badge</NavItem> */}
      <NavItem to="/docs/avatar">avatar</NavItem>
      <NavItem to="/docs/tag">tag</NavItem>
      <NavItem to="/docs/tooltip">tooltip</NavItem>
      <NavItem to="/docs/modal">modal</NavItem>
      <NavItem to="/docs/tabs">tabs</NavItem>
      <NavItem to="/docs/progress">progress</NavItem>
      <NavItem to="/docs/skeleton">skeleton</NavItem>
      <NavItem to="/docs/toast">toast</NavItem>
      <NavItem to="/docs/pagination">pagination</NavItem>
      <NavItem to="/docs/confirm">confirm</NavItem>
      <NavItem to="/docs/fileUpload">fileUpload</NavItem>
      <NavItem to="/docs/fileDropzone">FileDropzone</NavItem>
      <NavItem to="/docs/empty">Empty</NavItem>
    </Wrapper>
  );
};
