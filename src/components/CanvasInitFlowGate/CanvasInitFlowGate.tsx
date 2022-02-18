import React from "react";
import { useGetInitDataQuery } from "../../store/dataApi";
import CanvasBoardGate from "../CanvasBoardGate/CanvasBoardGate";

const CanvasInitFlowGate: React.FC = () => {
  const { data, isLoading } = useGetInitDataQuery("init");
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CanvasBoardGate endpoint={data.id} />
      )}
    </>
  );
};

export default CanvasInitFlowGate;
