import React from "react";
import { useState } from "react";

interface Props {
  setInputPostfix: React.Dispatch<React.SetStateAction<string>>;
}

const InputCanvas: React.FC<Props> = ({ setInputPostfix }) => {
  const [inputCanvasId, setInputCanvasId] = useState<string>("");

  const changeProjectIdHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputCanvasId(event.currentTarget.value);
  };

  const submitHandler = () => {
    setInputPostfix(inputCanvasId);
  };
  return (
    <>
      <div style={{ width: "100vw", height: "3vh", backgroundColor: "yellow" }}>
        <input
          type="text"
          value={inputCanvasId}
          onChange={changeProjectIdHandler}
        />
        <button type="submit" onClick={submitHandler}>
          FETCH
        </button>
      </div>
    </>
  );
};

export default InputCanvas;
