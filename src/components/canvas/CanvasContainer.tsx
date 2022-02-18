import CanvasBoardGate from "./CanvasBoardGate";
import CanvasInitFlowGate from "./CanvasInitFlowGate";

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
        <CanvasInitFlowGate />
      ) : (
        <CanvasBoardGate endpoint={endpoint} />
      )}
    </div>
  );
};

export default CanvasContainer;
