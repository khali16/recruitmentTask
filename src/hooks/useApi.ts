import { RootState } from "./../store/store";
import { useEffect } from "react";
import { useGetDataByIdProjectQuery } from "../store/dataApi";

const useApi = (endPoint: string) => {
  const { data, error, isLoading } = useGetDataByIdProjectQuery(endPoint);
  useEffect(() => {}, [data]);

  return { data };
};

export default useApi;
