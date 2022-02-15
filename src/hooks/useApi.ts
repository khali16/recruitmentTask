import { RootState } from "./../store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../store/api-slice";
import { useGetDataByIdProjectQuery } from "../store/dataApi";

const useApi = () => {
  const { data, error, isLoading } = useGetDataByIdProjectQuery(
    "ckznu5jm1000109jn0mlffwqd-8109543106295942"
  );
  useEffect(() => {}, [data]);
  const items = data.project.items;

  return { items, data };
};

export default useApi;
