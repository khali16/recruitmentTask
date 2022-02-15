import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://recruitment01.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getDataByIdProject: builder.query({
      query: (projectId) => `project/${projectId}`,
    }),
  }),
});

export const { useGetDataByIdProjectQuery } = dataApi;
