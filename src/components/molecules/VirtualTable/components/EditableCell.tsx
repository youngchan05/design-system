import { useState } from "react";
import type { Column } from "../VirtualTable.type";

export function EditableCell<T>({
  row,
  column,
  onCommit,
}: {
  row: T;
  column: Column<T>;
  onCommit: (v: any) => void;
}) {
  const [editing, setEditing] = useState(false);
  const value = row[column.dataField];
  const [local, setLocal] = useState(value);

  if (!column.edit) {
    return <div className="td">{column.render?.(row)}</div>;
  }

  return (
    <div className="td editable" onDoubleClick={() => setEditing(true)}>
      {editing ? (
        <input
          autoFocus
          defaultValue={local}
          onChange={(e) => setLocal(e.target.value)}
          onBlur={() => {
            onCommit(local);
            setEditing(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onCommit(local);
              setEditing(false);
            }
            if (e.key === "Escape") {
              setEditing(false);
            }
          }}
        />
      ) : (
        column.render?.(row)
      )}
    </div>
  );
}
