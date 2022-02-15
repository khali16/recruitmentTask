import { useGetDataByIdProjectQuery } from "../../store/dataApi";
import Canvas from "./Canvas";
interface ApiData {
  id: string;
  project: {
    id: string;
    name: string;
    width: number;
    height: number;
    items: [
      {
        id: string;
        color: string;
        rotation: number;
        x: number;
        y: number;
        width: number;
        height: number;
      }
    ];
  };
}

const CanvasContainer = () => {
  const { data, error, isLoading } = useGetDataByIdProjectQuery(
    "ckznu5jm1000109jn0mlffwqd-8109543106295942"
  );
  const test: ApiData = data;
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            width: `${data.project.width}px`,
            height: `${data.project.height}px`,
            backgroundColor: "blue",
            margin: "auto",
          }}
        >
          <Canvas />
        </div>
      )}
    </>
  );
};

export default CanvasContainer;
