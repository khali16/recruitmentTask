import { useState } from "react";
import CanvasContainer from "./components/canvas/CanvasContainer";
import InputCanvas from "./components/input/InputCanvas";

function App() {
  const [endpointPostfix, setEndpointPostfix] = useState<string>("");

  return (
    <div
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <main
        style={{
          width: "100%",
          height: "100%",
          flex: "1 1",
          alignItems: "stretch",
        }}
      >
        <InputCanvas setInputPostfix={setEndpointPostfix} />
        <hr />
        <CanvasContainer endpoint={endpointPostfix} />
      </main>
    </div>
  );
}

export default App;
