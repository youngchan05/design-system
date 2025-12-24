import { List, type RowComponentProps } from "react-window";
import type { Column } from "../DataTable.types";

type RowData<T> = {
  rows: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number;
  selectable?: boolean;
};

function RowComponent<T>(props: RowComponentProps<RowData<T>>) {
  const { index, style } = props;
  // @ts-expect-error - react-window RowComponentProps type definition doesn't include data property
  const { rows, columns, selectable = false } = props.data;
  const row = rows[index];
  const totalCols = columns.reduce(
    (sum: number, c: Column<T>) => sum + (c.colSpan ?? 1),
    0
  );

  const template = `
    ${selectable ? "48px" : ""}
    ${Array.from({ length: totalCols })
      .map(() => "1fr")
      .join(" ")}
  `;

  return (
    <div
      className="tr"
      style={{
        ...style,
        display: "grid",
        gridTemplateColumns: template,
      }}
    >
      {selectable && (
        <div className="td checkbox">
          <input type="checkbox" />
        </div>
      )}
      {columns.map((col: Column<T>, i: number) => (
        <div
          key={i}
          className="td"
          style={{
            gridColumn: `span ${col.colSpan ?? 1}`,
            gridRow: `span ${col.rowSpan ?? 1}`,
          }}
        >
          {col.render
            ? col.render(row, index)
            : col.dataField
            ? String(row[col.dataField])
            : null}
        </div>
      ))}
    </div>
  );
}

export interface DataTableBodyProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number;
  height: number;
  rowHeight: number;
  selectable?: boolean;
}

export function DataTableBody<T>({
  data,
  columns,
  rowKey,
  height,
  rowHeight,
  selectable = false,
}: DataTableBodyProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ListComponent = List as any;
  return (
    <ListComponent
      height={height}
      rowComponent={RowComponent<T>}
      rowCount={data.length}
      rowHeight={rowHeight}
      rowProps={{
        rows: data,
        columns,
        rowKey,
        selectable,
      }}
    />
  );
}
