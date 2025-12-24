// Test.tsx
import React, { useEffect, useState } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  useDraggable,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const CELL_SIZE = 60;

// ------------------ TYPES -------------------
type GridItemType = {
  id: string;
  label: string;
  row: number; // 1-base
  col: number; // 1-base
  rowSpan: number; // height in cells
  colSpan: number; // width in cells
};

type ResizeDirection =
  | "right"
  | "left"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

type ResizingState = {
  id: string;
  dir: ResizeDirection;
  startX: number;
  startY: number;
  startCol: number;
  startRow: number;
  startColSpan: number;
  startRowSpan: number;
};

// ------------------ UTILS -------------------
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

function intersects(a: GridItemType, b: GridItemType) {
  const aLeft = a.col;
  const aRight = a.col + a.colSpan - 1;
  const aTop = a.row;
  const aBottom = a.row + a.rowSpan - 1;

  const bLeft = b.col;
  const bRight = b.col + b.colSpan - 1;
  const bTop = b.row;
  const bBottom = b.row + b.rowSpan - 1;

  if (aRight < bLeft) return false;
  if (aLeft > bRight) return false;
  if (aBottom < bTop) return false;
  if (aTop > bBottom) return false;

  return true;
}

// ------------------ GridItem -------------------
const resizeHandles = [
  { dir: "top-left", style: { top: -4, left: -4, cursor: "nwse-resize" } },
  {
    dir: "top",
    style: {
      top: -4,
      left: "50%",
      transform: "translateX(-50%)",
      cursor: "ns-resize",
    },
  },
  { dir: "top-right", style: { top: -4, right: -4, cursor: "nesw-resize" } },
  {
    dir: "right",
    style: {
      top: "50%",
      right: -4,
      transform: "translateY(-50%)",
      cursor: "ew-resize",
    },
  },
  {
    dir: "bottom-right",
    style: { bottom: -4, right: -4, cursor: "nwse-resize" },
  },
  {
    dir: "bottom",
    style: {
      bottom: -4,
      left: "50%",
      transform: "translateX(-50%)",
      cursor: "ns-resize",
    },
  },
  {
    dir: "bottom-left",
    style: { bottom: -4, left: -4, cursor: "nesw-resize" },
  },
  {
    dir: "left",
    style: {
      top: "50%",
      left: -4,
      transform: "translateY(-50%)",
      cursor: "ew-resize",
    },
  },
];

const GridItem = ({
  item,
  isActive,
  isConflict,
  onResizeStart,
}: {
  item: GridItemType;
  isActive: boolean;
  isConflict: boolean;
  onResizeStart: (
    e: React.MouseEvent,
    item: GridItemType,
    dir: ResizeDirection
  ) => void;
}) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: item.id,
    data: { item },
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        gridColumn: `${item.col} / span ${item.colSpan}`,
        gridRow: `${item.row} / span ${item.rowSpan}`,
        position: "relative",
        border: `2px solid ${
          isActive ? (isConflict ? "red" : "#4f46e5") : "#4f46e5"
        }`,
        borderRadius: 8,
        background: isConflict ? "rgba(255,0,0,0.2)" : "rgba(79,70,229,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500,
        userSelect: "none",
        transform: transform ? CSS.Translate.toString(transform) : undefined,
        transition: "border-color 0.15s ease, background 0.15s ease",
      }}
      {...attributes}
      {...listeners}
    >
      {item.label}

      {/* 8 방향 리사이즈 핸들 */}
      {resizeHandles.map((h) => (
        <div
          key={h.dir}
          onMouseDown={(e) => onResizeStart(e, item, h.dir as ResizeDirection)}
          style={{
            position: "absolute",
            width: 12,
            height: 12,
            background: "white",
            border: "1px solid #4f46e5",
            borderRadius: 4,
            ...h.style,
          }}
        />
      ))}
    </div>
  );
};

// ------------------ GridCanvas -------------------
const GridCanvas = ({
  cols,
  rows,
  items,
  setItems,
}: {
  cols: number;
  rows: number;
  items: GridItemType[];
  setItems: React.Dispatch<React.SetStateAction<GridItemType[]>>;
}) => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [isConflict, setIsConflict] = useState(false);
  const [resizing, setResizing] = useState<ResizingState | null>(null);

  const gridStyle: React.CSSProperties = {
    width: cols * CELL_SIZE,
    height: rows * CELL_SIZE,
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
    gridTemplateRows: `repeat(${rows}, ${CELL_SIZE}px)`,
    backgroundImage:
      "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
    backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    position: "relative",
  };

  // ---- 드래그 시작 ----
  const handleDragStart = (e: DragStartEvent) => {
    const item = e.active.data.current?.item as GridItemType | undefined;
    if (!item) return;
    setActiveItemId(item.id);
    setIsConflict(false);
  };

  // ---- 드래그 끝 ----
  const handleDragEnd = (e: DragEndEvent) => {
    const { active, delta } = e;
    const activeItem = active.data.current?.item as GridItemType | undefined;
    if (!activeItem) return;

    setActiveItemId(null);
    setIsConflict(false);

    setItems((prev) =>
      prev.map((it) => {
        if (it.id !== activeItem.id) return it;

        const startX = (it.col - 1) * CELL_SIZE;
        const startY = (it.row - 1) * CELL_SIZE;

        let newCol = Math.round((startX + delta.x) / CELL_SIZE) + 1;
        let newRow = Math.round((startY + delta.y) / CELL_SIZE) + 1;

        newCol = clamp(newCol, 1, cols - it.colSpan + 1);
        newRow = clamp(newRow, 1, rows - it.rowSpan + 1);

        const test = { ...it, col: newCol, row: newRow };
        const conflict = prev.some(
          (other) => other.id !== it.id && intersects(test, other)
        );

        return conflict ? it : test;
      })
    );
  };

  // ---- 리사이즈 시작 ----
  const handleResizeStart = (
    e: React.MouseEvent,
    item: GridItemType,
    dir: ResizeDirection
  ) => {
    e.stopPropagation();
    e.preventDefault();
    setResizing({
      id: item.id,
      dir,
      startX: e.clientX,
      startY: e.clientY,
      startCol: item.col,
      startRow: item.row,
      startColSpan: item.colSpan,
      startRowSpan: item.rowSpan,
    });
    setActiveItemId(item.id);
  };

  // ---- 리사이즈 진행 ----
  useEffect(() => {
    if (!resizing) return;

    const move = (e: MouseEvent) => {
      const dx = e.clientX - resizing.startX;
      const dy = e.clientY - resizing.startY;

      console.log(dx, "dx");
      console.log(dy, "dy");

      setItems((prev) =>
        prev.map((it) => {
          if (it.id !== resizing.id) return it;

          console.log(resizing, "resizingresizing");

          let col = resizing.startCol;
          let row = resizing.startRow;
          let colSpan = resizing.startColSpan;
          let rowSpan = resizing.startRowSpan;

          const diffCols = Math.round(dx / CELL_SIZE);
          const diffRows = Math.round(dy / CELL_SIZE);
          console.log(diffCols, "diffCols");
          console.log(diffRows, "diffRows");

          switch (resizing.dir) {
            case "right": {
              colSpan = resizing.startColSpan + diffCols;
              break;
            }
            case "left": {
              col = resizing.startCol + diffCols;
              colSpan = resizing.startColSpan - diffCols;
              break;
            }
            case "bottom": {
              rowSpan = resizing.startRowSpan + diffRows;
              break;
            }
            case "top": {
              row = resizing.startRow + diffRows;
              rowSpan = resizing.startRowSpan - diffRows;
              break;
            }
            case "top-left": {
              col = resizing.startCol + diffCols;
              colSpan = resizing.startColSpan - diffCols;
              row = resizing.startRow + diffRows;
              rowSpan = resizing.startRowSpan - diffRows;
              break;
            }
            case "top-right": {
              colSpan = resizing.startColSpan + diffCols;
              row = resizing.startRow + diffRows;
              rowSpan = resizing.startRowSpan - diffRows;
              break;
            }
            case "bottom-left": {
              col = resizing.startCol + diffCols;
              colSpan = resizing.startColSpan - diffCols;
              rowSpan = resizing.startRowSpan + diffRows;
              break;
            }
            case "bottom-right": {
              colSpan = resizing.startColSpan + diffCols;
              rowSpan = resizing.startRowSpan + diffRows;
              break;
            }
          }

          // 최소 1칸 이상
          colSpan = Math.max(1, colSpan);
          rowSpan = Math.max(1, rowSpan);

          // 그리드 범위 안으로 제한
          col = clamp(col, 1, cols);
          row = clamp(row, 1, rows);
          colSpan = clamp(colSpan, 1, cols - col + 1);
          rowSpan = clamp(rowSpan, 1, rows - row + 1);

          const next = { ...it, col, row, colSpan, rowSpan };

          console.log(next, "nextnext");

          const conflict = prev.some(
            (other) => other.id !== it.id && intersects(next, other)
          );

          setIsConflict(conflict);

          return conflict ? it : next;
        })
      );
    };

    const up = () => {
      setResizing(null);
      setActiveItemId(null);
      setIsConflict(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [resizing, cols, rows, setItems]);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div style={gridStyle}>
        {items.map((item) => (
          <GridItem
            key={item.id}
            item={item}
            isActive={activeItemId === item.id}
            isConflict={activeItemId === item.id && isConflict}
            onResizeStart={handleResizeStart}
          />
        ))}
      </div>
    </DndContext>
  );
};

// ------------------ MAIN -------------------
const Test = () => {
  const [cols] = useState(20);
  const [rows] = useState(20);
  const [items, setItems] = useState<GridItemType[]>([
    { id: "1", label: "Item 1", row: 1, col: 1, rowSpan: 2, colSpan: 3 },
    { id: "2", label: "Item 2", row: 1, col: 4, rowSpan: 3, colSpan: 2 },
    { id: "3", label: "Item 3", row: 3, col: 1, rowSpan: 2, colSpan: 2 },
  ]);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 24,
        background: "#f3f4f6",
        fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 16 }}>Grid Editor (8-way resize)</h1>
      <GridCanvas cols={cols} rows={rows} items={items} setItems={setItems} />
    </div>
  );
};

export default Test;
