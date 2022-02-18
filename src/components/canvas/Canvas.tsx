import { useEffect } from "react";
import { useGetDataByIdProjectQuery } from "../../store/dataApi";
import SingleCanvas from "./SingleCanvas";

interface Props {
  endpoint: string;
}

export interface Item {
  id: string;
  color: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ApiData {
  id: string;
  project: {
    id: string;
    name: string;
    width: number;
    height: number;
    items: Item[];
  };
}

const Canvas: React.FC<Props> = ({ endpoint }) => {
  useEffect(() => {}, [endpoint]);

  const { data, error, isLoading } = useGetDataByIdProjectQuery(endpoint);
  console.log(data);
  const fetchedData: ApiData = data;
  const isValidationError = fetchedData?.project.items.some(
    ({ height, width, x, y, rotation }) =>
      isNaN(height) || isNaN(width) || isNaN(x) || isNaN(y) || isNaN(rotation)
  );
  return isValidationError ? (
    <div>Error, data validation failed</div>
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        display: "flex",
        flexFlow: "column",
      }}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        //@ts-ignore

        (error.status === 500 || 404) && <p>Ups...something went wrong...</p>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>ID: {fetchedData.id}</p>
            <p>Name: {fetchedData.project.name}</p>
          </div>
          <svg
            width={fetchedData.project.width}
            height={fetchedData.project.height}
            style={{
              margin: "auto",
              backgroundColor: "silver",
            }}
          >
            {fetchedData.project.items.map((item, index) => (
              <SingleCanvas item={item} key={index} />
            ))}
          </svg>
        </>
      )}
    </div>
  );
};

export default Canvas;
