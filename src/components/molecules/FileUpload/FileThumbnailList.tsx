import styled from "styled-components";

const Grid = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  gap: 10px;
`;

const Thumb = styled.div`
  position: relative;

  img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }
`;

const Remove = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  background: ${({ theme }) => theme.colors.danger[500]};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: none;
  cursor: pointer;
  font-size: 12px;
`;

export const FileThumbnailList = ({
  files,
  onRemove,
}: {
  files: File[];
  onRemove: (index: number) => void;
}) => {
  return (
    <Grid>
      {files.map((file, idx) => {
        const url = URL.createObjectURL(file);
        return (
          <Thumb key={idx}>
            <img src={url} />
            <Remove onClick={() => onRemove(idx)}>×</Remove>
          </Thumb>
        );
      })}
    </Grid>
  );
};
