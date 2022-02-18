import Canvas from "./Canvas";
import CanvasInit from "./CanvasInit";

interface Props {
  endpoint: string;
}

const CanvasContainer: React.FC<Props> = ({ endpoint }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "97vh",
        flex: "1 1",
      }}
    >
      {endpoint === "" ? (
        <CanvasInit endpoint={endpoint} />
      ) : (
        <Canvas endpoint={endpoint} />
      )}
    </div>
  );
};

export default CanvasContainer;
