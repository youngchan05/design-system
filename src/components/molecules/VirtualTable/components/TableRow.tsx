import { memo } from "react";
import type { Column } from "../VirtualTable.type";
import type { BaseRow } from "../VirtualTable.type";

/* 1️⃣ 제네릭 컴포넌트 */
function TableRowInner<T extends BaseRow>({
  row,
  columns,
}: {
  row: T;
  columns: Column<T>[];
}) {
  return (
    <div className="tr">
      {columns.map((col) => (
        <div key={String(col.dataField)} className="td">
          {col.render?.(row)}
        </div>
      ))}
    </div>
  );
}

export const TableRow = memo(TableRowInner) as typeof TableRowInner;
