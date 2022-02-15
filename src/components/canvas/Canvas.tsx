import useApi from "../../hooks/useApi";
import { useGetDataByIdProjectQuery } from "../../store/dataApi";

interface ApiData {
  id: string;
  project: {
    id: string;
    name: string;
    width: number;
    height: number;
    items: [
      {
        id: string;
        color: string;
        rotation: number;
        x: number;
        y: number;
        width: number;
        height: number;
      }
    ];
  };
}
//hook na szerokosc ekranu

const szerokoscEkranu = 2000;
// (szerokosc ekranu - szerokosc diva)/2
const Canvas = () => {
  const { data, error, isLoading } = useGetDataByIdProjectQuery(
    "ckznu5jm1000109jn0mlffwqd-8109543106295942"
  );
  console.log(data);
  const test: ApiData = data;
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        test.project.items.map((item, index) => (
          <div
            style={{
              width: `${item.width}px`,
              height: `${item.height}px`,
              backgroundColor: item.color.length === 7 ? item.color : "black",
              transform: `rotate(${item.rotation}deg)`,
              position: "absolute",
              top: `${item.y - item.height / 2}px`,
              left: `${item.x - item.width / 2}px`,
            }}
            key={index}
          ></div>
        ))
      )}
    </>
  );
};

export default Canvas;
