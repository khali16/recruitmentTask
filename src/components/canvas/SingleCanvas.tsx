import { useLayoutEffect } from "react";
import { useRef, useState } from "react";
import { Item } from "./Canvas";

interface Props {
  item: Omit<Item, "id">;
}

const SingleCanvas: React.FC<Props> = ({
  item: { color, height, rotation, width, x, y },
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState<DOMRect>();
  useLayoutEffect(() => {
    if (targetRef.current) {
      setBounds(targetRef.current.getBoundingClientRect());
    }
  }, []);

  return (
    <>
      {bounds && (
        <div
          style={{
            border: "1px solid red",
            position: "fixed",
            top: `${bounds.top}px`,
            left: `${bounds.left}px`,
            height: `${bounds.height}px`,
            width: `${bounds.width}px`,
          }}
        />
      )}
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: color.length === 7 ? color : "black",
          transform: `rotate(${rotation}deg)`,
          position: "absolute",
          top: `${y - height / 2}px`,
          left: `${x - width / 2}px`,
        }}
        ref={targetRef}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `rotate(${-rotation}deg)`,
            backgroundColor: "white",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
          }}
        >
          <span
            style={{
              mixBlendMode: "difference",
              color: color.length === 7 ? "black" : "white",
            }}
          >
            {rotation}
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleCanvas;
