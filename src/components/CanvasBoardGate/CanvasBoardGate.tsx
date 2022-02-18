import React from "react";
import { Item } from "../../interface/api";
import { useGetDataByIdProjectQuery } from "../../store/dataApi";
import CanvasBoard from "../CanvasBoard/CanvasBoard";
import styles from "./CanvasBoardGate.module.css";

interface Props {
  endpoint: string;
}

interface ApiError {
  status: number;
  data: {
    message: string;
  };
}

const CanvasBoardGate: React.FC<Props> = ({ endpoint }) => {
  const projectQuery = useGetDataByIdProjectQuery(endpoint);
  return (
    <div className={styles.container}>
      {projectQuery.isLoading ? (
        <div>Loading...</div>
      ) : projectQuery.isError ? (
        <CanvasError error={projectQuery.error as ApiError} />
      ) : (
        projectQuery.isSuccess &&
        (isValidationError(projectQuery.data.project.items) ? (
          <div>Error, data validation failed</div>
        ) : (
          <CanvasBoard data={projectQuery.data} />
        ))
      )}
    </div>
  );
};

const NUMBER_VALIDATED_FIELDS_NAMES: ["height", "width", "y", "x", "rotation"] =
  ["height", "width", "y", "x", "rotation"];

const isValidationError = (items: Item[]) =>
  items.some((item) =>
    NUMBER_VALIDATED_FIELDS_NAMES.some((fieldName) => isNaN(item[fieldName]))
  );

interface ErrorProps {
  error: ApiError;
}

const CanvasError: React.FC<ErrorProps> = ({ error }) => (
  <div style={{ color: "red" }}>
    <p> Ups...something went wrong </p>
    {(error.status === 500 || error.status === 404) && (
      <p>Status message - {error.data.message}</p>
    )}
  </div>
);

export default CanvasBoardGate;
