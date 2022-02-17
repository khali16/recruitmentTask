import { RootState } from "./../store/store";
import { useEffect } from "react";
import { useGetDataByIdProjectQuery } from "../store/dataApi";

const useApi = (endPoint: string) => {
  const { data, error, isLoading } = useGetDataByIdProjectQuery(endPoint);
  useEffect(() => {}, [data]);
  const items = data.project.items;

  return { items, data };
};

export default useApi;
