import styled from "styled-components";
import { DocsLayout } from "../components/DocsLayout";
import { Preview } from "../components/Preview";
import { PropsTable } from "../components/PropsTable";
import { Avatar } from "@components/atoms";

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export default function AvatarPage() {
  return (
    <DocsLayout>
      <Heading>Avatar</Heading>
      <SubTitle>
        사용자 프로필 이미지를 표시하거나 이미지 로드 실패 시 이니셜을 표시하는
        컴포넌트입니다. size, shape, fallback, name 등을 지원합니다.
      </SubTitle>

      {/* Sizes */}
      <SectionTitle>Sizes</SectionTitle>
      <Preview>
        <Avatar size="xs" name="Chris Evans" />
        <Avatar size="sm" name="Chris Evans" />
        <Avatar size="md" name="Chris Evans" />
        <Avatar size="lg" name="Chris Evans" />
        <Avatar size="xl" name="Chris Evans" />
      </Preview>

      {/* Shapes */}
      <SectionTitle>Shapes</SectionTitle>
      <Preview>
        <Avatar shape="circle" name="Tony Stark" />
        <Avatar shape="rounded" name="Tony Stark" />
        <Avatar shape="square" name="Tony Stark" />
      </Preview>

      {/* Image Example */}
      <SectionTitle>With Image</SectionTitle>
      <Preview>
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="Profile" size="md" />
        <Avatar src="https://i.pravatar.cc/150?img=2" alt="Profile" size="lg" />
      </Preview>

      {/* Fallback from name */}
      <SectionTitle>Initials from name</SectionTitle>
      <Preview>
        <Avatar name="Jennifer Collins" size="lg" />
        <Avatar name="Kyle" size="lg" />
      </Preview>

      {/* Custom fallback text */}
      <SectionTitle>Custom Fallback</SectionTitle>
      <Preview>
        <Avatar fallback="?" size="md" />
        <Avatar fallback="🙂" size="md" />
      </Preview>

      {/* Error handling */}
      <SectionTitle>Fallback When Image Fails to Load</SectionTitle>
      <Preview>
        <Avatar
          src="https://not-exist-image-url.com/profile.png"
          name="Broken Image"
          size="lg"
        />
      </Preview>

      {/* Props Table */}
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        data={[
          { name: "src", type: "string" },
          { name: "alt", type: "string" },
          { name: "name", type: "string" },
          {
            name: "fallback",
            type: "string",
          },
          {
            name: "size",
            type: `"xs" | "sm" | "md" | "lg" | "xl"`,
            default: "md",
          },
          {
            name: "shape",
            type: `"circle" | "rounded" | "square"`,
            default: "circle",
          },
        ]}
      />
    </DocsLayout>
  );
}
