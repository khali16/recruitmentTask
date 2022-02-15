import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./api-slice";
import { dataApi } from "./dataApi";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
