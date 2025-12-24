// DataTable.types.ts
export type SortDirection = "asc" | "desc" | null;

export interface Column<T> {
  title: React.ReactNode;
  dataField?: keyof T;
  width?: number | string;

  render?: (row: T, rowIndex: number) => React.ReactNode;

  colSpan?: number;
  rowSpan?: number;

  sortable?: boolean;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];

  rowKey: (row: T) => string | number;

  selectable?: boolean;
  height?: number;
  rowHeight?: number;
}

export interface DataTableBodyProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number; // ✅ 추가
  rowHeight?: number;
  selectable?: boolean;
}

export type RowProps<T> = {
  rows: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string | number; // ✅
  selectable?: boolean;
};
