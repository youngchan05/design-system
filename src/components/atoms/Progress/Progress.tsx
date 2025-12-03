import { Track, Bar, Label } from "./Progress.styles";
import type { ProgressProps } from "./Progress.types";

export const Progress = ({
  value,
  max = 100,
  indeterminate = false,
  showValue = false,
  color = "primary",
  size = "md",
  rounded = true,
  variant = "solid",
  className,
}: ProgressProps) => {
  const percent = Math.min(100, Math.max(0, (value ?? 0) * (100 / max)));

  return (
    <div className={className} style={{ width: "200px" }}>
      <Track $size={size} $rounded={rounded}>
        <Bar
          $percent={percent}
          $color={color}
          $variant={variant}
          $indeterminate={indeterminate}
          $rounded={rounded}
        />
      </Track>

      {showValue && !indeterminate && <Label>{percent.toFixed(0)}%</Label>}
    </div>
  );
};
