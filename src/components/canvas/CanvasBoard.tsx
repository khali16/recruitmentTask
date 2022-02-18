import { useEffect } from "react";
import { ApiData } from "../../interface/api";
import Canvas from "./Canvas";

interface Props {
  data: ApiData;
}

const CanvasBoard: React.FC<Props> = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <>
      <div style={{ display: "flex", gap: "50px" }}>
        <p>ID: {data.id}</p>
        <p style={{ fontWeight: "bold" }}>Name: {data.project.name}</p>
      </div>
      <svg
        width={"100%"}
        height={data.project.height}
        style={{
          margin: "auto",
          backgroundColor: "silver",
          boxSizing: "border-box",
        }}
        viewBox={`0 0 ${data.project.width} ${data.project.height}`}
      >
        <rect width="100%" height="100%" fill="#efefef" />
        {data.project.items.map((item, index) => (
          <Canvas item={item} key={index} />
        ))}
      </svg>
    </>
  );
};

export default CanvasBoard;
