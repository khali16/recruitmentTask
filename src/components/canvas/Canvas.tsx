import { useEffect, useState } from "react";
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

//TODO determine canvas position

const Canvas: React.FC<Props> = ({ endpoint }) => {
  useEffect(() => {}, [endpoint]);
  const [errorData, setErrorData] = useState(false);

  //TODO handle error
  const { data, error, isLoading } = useGetDataByIdProjectQuery(endpoint);
  console.log(error);

  const fetchedData: ApiData = data;

  // useEffect(() => {
  //   fetchedData.project.items.map((item) => {
  //     if (
  //       isNaN(item.height || item.rotation || item.width || item.x || item.y)
  //     ) {
  //       setErrorData(true);
  //     }
  //   });
  // }, [fetchedData]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        backgroundColor: "blueviolet",
        display: "flex",
        flexFlow: "column",
      }}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        //@ts-ignore
        error.status === 500 || (404 && <p>błąd serwera</p>)
      ) : (
        <div
          style={{
            width: `${fetchedData.project.width}px`,
            height: `${fetchedData.project.height}px`,
            backgroundColor: "silver",
            margin: "auto",
            position: "relative",
          }}
        >
          {fetchedData.project.items.map((item) => (
            <SingleCanvas item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Canvas;
