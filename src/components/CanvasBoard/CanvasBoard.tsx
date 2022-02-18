import { useEffect } from "react";
import { ApiData } from "../../interface/api";
import Canvas from "../Canvas/Canvas";
import styles from "./CanvasBoard.module.css";

interface Props {
  data: ApiData;
}

const CanvasBoard: React.FC<Props> = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <>
      <div className={styles.infoContainer}>
        <p>ID: {data.id}</p>
        <p className={styles.text}>Name: {data.project.name}</p>
      </div>
      <svg
        width={"100%"}
        height={data.project.height}
        className={styles.canvasContainer}
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
