import React from "react";
import { useGetInitDataQuery } from "../../store/dataApi";
import Canvas from "./Canvas";

interface Props {
  endpoint: string;
}

interface InitData {
  id: string;
  name: string;
  modified: number;
}

const CanvasInit: React.FC<Props> = ({ endpoint }) => {
  const { data, isLoading } = useGetInitDataQuery("init");
  const fetchedData: InitData = data;
  return (
    <>
      {isLoading ? <div>Loading...</div> : <Canvas endpoint={fetchedData.id} />}
    </>
  );
};

export default CanvasInit;
