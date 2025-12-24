import { DataTable } from "@components/molecules/DataTable/DataTable";
import type { Column } from "@components/molecules/VirtualTable/VirtualTable.type";

export interface SampleRow {
  id: number;
  title: string;
  description: string;
  checked?: boolean;
}
function TablePage() {
  const sampleData: SampleRow[] = Array.from({ length: 1000 }).map((_, i) => ({
    id: i + 1,
    title: `Title ${i + 1}`,
    description: `Description ${i + 1}`,
    checked: false,
  }));

  const columns: Column<SampleRow>[] = [
    {
      dataField: "title",
      title: "Title",
      sort: true,
      edit: true,
      render: (row) => row.title,
    },
    {
      dataField: "description",
      title: "Description",
      sort: false,
      edit: true,
      render: (row) => row.description,
      colSpan: 2,
      rowSpan: 2,
    },
    {
      dataField: "description",
      title: "test",
      sort: false,
      edit: true,
      render: (row) => row.description,
    },
  ];
  return (
    <DataTable data={sampleData} columns={columns} rowKey={(row) => row.id} />
  );
}

export default TablePage;
