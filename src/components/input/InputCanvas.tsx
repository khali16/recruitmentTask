import React from "react";
import { useState } from "react";
import { useGetInitDataQuery } from "../../store/dataApi";

interface Props {
  setInputPostfix: React.Dispatch<React.SetStateAction<string>>;
}

const InputCanvas: React.FC<Props> = ({ setInputPostfix }) => {
  const [inputCanvasId, setInputCanvasId] = useState<string>("");
  const { refetch } = useGetInitDataQuery("init");
  const changeProjectIdHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputCanvasId(event.currentTarget.value);
  };

  const submitHandler = () => {
    setInputPostfix(inputCanvasId);
    refetch();
  };
  return (
    <>
      <div
        style={{ flex: "0 1", alignContent: "stretch", alignItems: "stretch" }}
      >
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
