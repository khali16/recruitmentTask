import Canvas from "./Canvas";
import CanvasInit from "./CanvasInit";

interface Props {
  endpoint: string;
}

const CanvasContainer: React.FC<Props> = ({ endpoint }) => {
  return (
    <main
      style={{
        width: "100vw",
        height: "97vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {endpoint === "" ? (
        <CanvasInit endpoint={endpoint} />
      ) : (
        <Canvas endpoint={endpoint} />
      )}
    </main>
  );
};

export default CanvasContainer;
