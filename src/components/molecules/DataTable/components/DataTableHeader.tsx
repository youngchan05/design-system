import type { Column } from "../DataTable.types";

export function DataTableHeader<T>({
  columns,
  selectable,
}: {
  columns: Column<T>[];
  selectable: boolean;
}) {
  const totalCols = columns.reduce((sum, c) => sum + (c.colSpan ?? 1), 0);

  const template = `
    ${selectable ? "48px" : ""}
    ${Array.from({ length: totalCols })
      .map(() => "1fr")
      .join(" ")}
  `;

  return (
    <div
      className="tr header"
      style={{
        display: "grid",
        gridTemplateColumns: template,
        gridAutoRows: "44px",
      }}
    >
      {selectable && (
        <div className="th checkbox">
          <input type="checkbox" />
        </div>
      )}

      {columns.map((col, i) => (
        <div
          key={i}
          className="th"
          style={{
            gridColumn: `span ${col.colSpan ?? 1}`,
            gridRow: `span ${col.rowSpan ?? 1}`,
          }}
        >
          {col.title}
        </div>
      ))}
    </div>
  );
}
