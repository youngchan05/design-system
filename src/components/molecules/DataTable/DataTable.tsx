import { DataTableBody } from "./components/DataTableBody";
import { DataTableHeader } from "./components/DataTableHeader";
import type { DataTableProps } from "./DataTable.types";

export function DataTable<T>({
  columns,
  data,
  rowKey,
  selectable = false,
  height = 400,
  rowHeight = 44,
}: DataTableProps<T>) {
  return (
    <div className="datatable">
      <DataTableHeader columns={columns} selectable={selectable} />
      <DataTableBody
        columns={columns}
        data={data}
        rowKey={rowKey}
        height={height}
        rowHeight={rowHeight}
        selectable={selectable}
      />
    </div>
  );
}
