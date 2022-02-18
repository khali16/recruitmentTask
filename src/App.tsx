import { useState } from "react";
import CanvasContainer from "./components/CanvasContainer/CanvasContainer";
import InputCanvas from "./components/input/InputCanvas";
import styles from "./App.module.css";

function App() {
  const [endpointPostfix, setEndpointPostfix] = useState<string>("");

  return (
    <div className={styles.appContainer}>
      <main className={styles.canvasContainer}>
        <InputCanvas setInputPostfix={setEndpointPostfix} />
        <hr />
        <CanvasContainer endpoint={endpointPostfix} />
      </main>
    </div>
  );
}

export default App;
