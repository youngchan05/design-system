export interface BaseRow {
  id: number;
  checked?: boolean;
}

export interface Column<T> {
  dataField: keyof T;
  title: string;
  render?: (row: T) => React.ReactNode;
  sort?: boolean;
  edit?: boolean;
  colSpan?: number;
  rowSpan?: number;
}

// VirtualTable.type.ts
export type SortState<T> = {
  field?: keyof T;
  dir?: "asc" | "desc";
};

export type RowRendererProps<T> = {
  index: number;
  style: React.CSSProperties;
  data: {
    rows: T[];
    columns: Column<T>[];
    onUpdate: React.Dispatch<React.SetStateAction<T[]>>;
  };
};

export function buildGridTemplate<T>(columns: Column<T>[]) {
  const tracks: string[] = [];

  columns.forEach((col) => {
    const span = col.colSpan ?? 1;

    for (let i = 0; i < span; i++) {
      tracks.push("1fr");
    }
  });

  return `80px ${tracks.join(" ")}`;
}
