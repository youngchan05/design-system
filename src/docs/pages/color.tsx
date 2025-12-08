import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { colors } from "@foundations/colors";

const PageTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin: 32px 0 12px;
`;

const PaletteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 16px;
`;

const ColorBox = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const Swatch = styled.div<{ bg: string }>`
  height: 60px;
  background: ${(p) => p.bg};
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const Info = styled.div`
  padding: 8px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TokenName = styled.span`
  font-weight: 600;
`;

export default function ColorsPage() {
  return (
    <DocsLayout>
      <PageTitle>Colors</PageTitle>
      <p>디자인시스템에서 사용하는 색상 토큰 목록입니다.</p>

      {Object.entries(colors).map(([groupName, palette]) => (
        <div key={groupName}>
          <SectionTitle>{groupName}</SectionTitle>

          <PaletteGrid>
            {Object.entries(palette).map(([key, value]) => (
              <ColorBox key={key}>
                <Swatch bg={value} />
                <Info>
                  <TokenName>
                    {groupName}.{key}
                  </TokenName>
                  <span>{value}</span>
                </Info>
              </ColorBox>
            ))}
          </PaletteGrid>
        </div>
      ))}
    </DocsLayout>
  );
}
