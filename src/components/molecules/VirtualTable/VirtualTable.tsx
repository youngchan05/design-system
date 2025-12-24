import { List, type RowComponentProps } from "react-window";
import type { SampleRow } from "@/docs/pages/Table";
import { TableHeader } from "./components/TableHeader";
import type { Column } from "./VirtualTable.type";

function RowComponent({
  index,
  style,
  data,
}: RowComponentProps<{ data: SampleRow[] }>) {
  const row = data[index];

  return (
    <div className="flex items-center justify-between" style={style}>
      <div className="text-slate-500 text-xs">{row.title}</div>
    </div>
  );
}

export function VirtualTable({
  data,
  columns,
}: {
  data: SampleRow[];
  columns: Column<SampleRow>[];
}) {
  return (
    <>
      <TableHeader columns={columns} />
      <List
        rowComponent={RowComponent}
        rowCount={data.length}
        rowHeight={100}
        rowProps={{ data }}
      />
    </>
  );
}
