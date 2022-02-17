import { useState } from "react";
import CanvasContainer from "./components/canvas/CanvasContainer";
import InputCanvas from "./components/input/InputCanvas";

function App() {
  const [endpointPostfix, setEndpointPostfix] = useState<string>("");

  return (
    <>
      <InputCanvas setInputPostfix={setEndpointPostfix} />
      <CanvasContainer endpoint={endpointPostfix} />
    </>
  );
}

export default App;
