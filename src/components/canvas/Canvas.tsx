import { Item } from "../../interface/api";
import styles from "./Canvas.module.css";

interface Props {
  item: Omit<Item, "id">;
}

const Canvas: React.FC<Props> = ({
  item: { color, height, rotation, width, x, y },
}) => {
  const angle = (rotation * Math.PI) / 180;
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  const newWidth = Math.abs(width * cos) + Math.abs(height * sin);
  const newHeight = Math.abs(width * sin) + Math.abs(height * cos);
  const borderX = x - (newWidth - width) / 2;
  const borderY = y - (newHeight - height) / 2;

  return (
    <g>
      <rect
        width={width}
        height={height}
        x={x - width / 2}
        y={y - height / 2}
        className={styles.canvas}
        style={{
          fill: color,
          transform: `rotate(${rotation}deg)`,
        }}
      />
      <rect
        width={newWidth}
        height={newHeight}
        x={borderX - width / 2}
        y={borderY - height / 2}
        className={styles.border}
      />
      <circle cx={x} cy={y} r="5" fill="red" />
      <text
        x={x + 5}
        y={y - 5}
        style={{ fill: color.length === 7 ? "black" : "white" }}
      >
        {rotation}°
      </text>
    </g>
  );
};

export default Canvas;
