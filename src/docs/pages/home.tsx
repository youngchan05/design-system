import { Link } from "react-router-dom";
import { DocsLayout } from "../components/DocsLayout";
import styled from "styled-components";

const Hero = styled.div`
  padding: 80px 0 60px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 560px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-top: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1.6;
  max-width: 700px;
`;

const Cards = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

const Card = styled(Link)`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: white;
  transition: 0.2s;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }

  h3 {
    font-size: 18px;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export default function HomePage() {
  return (
    <DocsLayout>
      <Hero>
        <Title>디자인 시스템</Title>
        <Subtitle>
          일관된 사용자 경험과 효율적인 개발을 위한 컴포넌트 기반 디자인
          시스템입니다. React + TypeScript 기반으로 구축되어 재사용성과 확장성이
          뛰어납니다.
        </Subtitle>
      </Hero>

      {/* Intro */}
      <Section>
        <SectionTitle>시작하기</SectionTitle>
        <Text>
          디자인 시스템은 React + TypeScript + Vite로 구성된 UI 컴포넌트
          라이브러리입니다. 문서 사이트에서는 컴포넌트 사용법, 프롭 타입, 예시
          코드 등을 확인할 수 있습니다.
        </Text>
      </Section>

      {/* Components Quick Access */}
      <Section>
        <SectionTitle>컴포넌트 빠른 이동</SectionTitle>
        <Cards>
          <Card to="/docs/color">
            <h3>Color</h3>
            <p>색상 토큰</p>
          </Card>
          <Card to="/docs/button">
            <h3>Button</h3>
            <p>가장 기본적인 액션 요소</p>
          </Card>

          <Card to="/docs/input">
            <h3>Input</h3>
            <p>텍스트 입력 필드</p>
          </Card>

          <Card to="/docs/select">
            <h3>Select</h3>
            <p>값을 선택하는 드롭다운 UI</p>
          </Card>

          <Card to="/docs/checkbox">
            <h3>Checkbox</h3>
            <p>단일 또는 다중 선택</p>
          </Card>

          <Card to="/docs/radio">
            <h3>Radio</h3>
            <p>하나만 선택할 때 사용</p>
          </Card>

          <Card to="/docs/modal">
            <h3>Modal</h3>
            <p>오버레이 대화 상자</p>
          </Card>

          <Card to="/docs/toast">
            <h3>Toast</h3>
            <p>피드백 알림 UI</p>
          </Card>

          <Card to="/docs/confirm">
            <h3>Confirm / Alert</h3>
            <p>사용자 확인을 받는 대화 상자</p>
          </Card>

          <Card to="/docs/badge">
            <h3>Badge</h3>
            <p>숫자 / 상태 표시 요소</p>
          </Card>

          <Card to="/docs/avatar">
            <h3>Avatar</h3>
            <p>이미지 / 사용자 대표 아이콘</p>
          </Card>

          <Card to="/docs/skeleton">
            <h3>Skeleton</h3>
            <p>로딩 중 사용자에게 구조를 보여줌</p>
          </Card>

          <Card to="/docs/pagination">
            <h3>Pagination</h3>
            <p>페이지 이동 네비게이션</p>
          </Card>
        </Cards>
      </Section>

      {/* Principles */}
      <Section>
        <SectionTitle>디자인 원칙</SectionTitle>
        <Text>
          디자인 시스템은 일관성, 접근성, 재사용성을 중심 가치로 삼습니다.
          컴포넌트와 토큰은 Atomic Design 기반 설계를 따르며, 모든 UI 요소는
          직관적이고 사용하기 쉽도록 구성되었습니다.
        </Text>
      </Section>
    </DocsLayout>
  );
}
