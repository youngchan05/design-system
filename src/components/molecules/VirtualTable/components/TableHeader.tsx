import type { Column } from "../VirtualTable.type";

export function TableHeader<T>({ columns }: { columns: Column<T>[] }) {
  const totalCols = columns.reduce((sum, c) => sum + (c.colSpan ?? 1), 0);

  const template = `80px ${Array.from({ length: totalCols })
    .map(() => "1fr")
    .join(" ")}`;
  return (
    <div
      className="tr header"
      style={{
        display: "grid",
        gridTemplateColumns: template,
        gridAutoRows: "44px",
      }}
    >
      {/* checkbox */}
      <div className="th checkbox">
        <input type="checkbox" />
      </div>

      {columns.map((col) => (
        <div
          key={String(col.dataField)}
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
