import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const Thead = styled.thead`
  background: ${({ theme }) => theme.colors.gray[50]};

  th {
    text-align: left;
    padding: 12px 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;

const Tbody = styled.tbody`
  tr {
    transition: background 0.18s ease;
  }

  tr:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }

  td {
    padding: 12px 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[800]};
    vertical-align: top;
  }

  td code {
    background: ${({ theme }) => theme.colors.gray[100]};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
  }
`;

const PropName = styled.code`
  color: ${({ theme }) => theme.colors.primary[700]};
  font-weight: 600;
  font-family: "JetBrains Mono", monospace;
`;

export const PropsTable = ({
  data,
}: {
  data: { name: string; type: string; default?: string }[];
}) => {
  return (
    <Wrapper>
      <Table>
        <Thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <tr key={row.name}>
              <td>
                <PropName>{row.name}</PropName>
              </td>
              <td>
                <code>{row.type}</code>
              </td>
              <td>{row.default ? <code>{row.default}</code> : "-"}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Wrapper>
  );
};
