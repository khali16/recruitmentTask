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

//TODO determine canvas position

const Canvas: React.FC<Props> = ({ endpoint }) => {
  useEffect(() => {}, [endpoint]);
  //TODO handle error
  const { data, error, isLoading } = useGetDataByIdProjectQuery(endpoint);
  console.log(data);

  const fetchedData: ApiData = data;

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Something went wrong...</div>
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
    </>
  );
};

export default Canvas;
