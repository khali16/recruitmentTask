import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiData } from "../interface/api";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://recruitment01.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getDataByIdProject: builder.query<ApiData, string>({
      query: (projectId) => `project/${projectId}`,
    }),
    getInitData: builder.query({
      query: (init) => `${init}`,
    }),
  }),
});

export const { useGetDataByIdProjectQuery, useGetInitDataQuery } = dataApi;
