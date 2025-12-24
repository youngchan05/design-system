import { memo } from "react";
import type { Column } from "../VirtualTable.type";

type TableBodyRowProps<T> = {
  row: T;
  columns: Column<T>[];
  gridTemplate: string;
};

function TableBodyRowInner<T>({
  row,
  columns,
  gridTemplate,
}: TableBodyRowProps<T>) {
  return (
    <div
      className="tr body"
      style={{
        display: "grid",
        gridTemplateColumns: gridTemplate,
        alignItems: "center",
      }}
    >
      <div className="td checkbox">
        <input type="checkbox" />
      </div>

      {columns.map((col) => (
        <div
          key={String(col.dataField)}
          className="td"
          style={{ gridColumn: `span ${col.colSpan ?? 1}` }}
        >
          {col.render ? col.render(row) : String(row[col.dataField])}
        </div>
      ))}
    </div>
  );
}

export const TableBodyRow = memo(TableBodyRowInner) as typeof TableBodyRowInner;
