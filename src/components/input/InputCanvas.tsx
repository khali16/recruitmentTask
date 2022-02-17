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
      <input
        type="text"
        value={inputCanvasId}
        onChange={changeProjectIdHandler}
      />
      <button type="submit" onClick={submitHandler}>
        FETCH
      </button>
    </>
  );
};

export default InputCanvas;
