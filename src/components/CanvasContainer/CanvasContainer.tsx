import CanvasBoardGate from "../CanvasBoardGate/CanvasBoardGate";
import CanvasInitFlowGate from "../CanvasInitFlowGate/CanvasInitFlowGate";
import styles from "./CanvasContainer.module.css";

interface Props {
  endpoint: string;
}

const CanvasContainer: React.FC<Props> = ({ endpoint }) => {
  return (
    <div className={styles.container}>
      {endpoint === "" ? (
        <CanvasInitFlowGate />
      ) : (
        <CanvasBoardGate endpoint={endpoint} />
      )}
    </div>
  );
};

export default CanvasContainer;
