import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./dataApi";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
