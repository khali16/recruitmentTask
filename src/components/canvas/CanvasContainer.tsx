import Canvas from "./Canvas";
import CanvasInit from "./CanvasInit";

interface Props {
  endpoint: string;
}

const CanvasContainer: React.FC<Props> = ({ endpoint }) => {
  return (
    <>
      {endpoint === "" ? (
        <CanvasInit endpoint={endpoint} />
      ) : (
        <Canvas endpoint={endpoint} />
      )}
    </>
  );
};

export default CanvasContainer;
