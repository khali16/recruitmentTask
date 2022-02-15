import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const fetchApiData = createAsyncThunk("fetchData", async () => {
  const response = await fetch(
    "https://recruitment01.vercel.app/api/project/ckznu5jm1000109jn0mlffwqd-8109543106295942"
  );
  return (await response.json()) as ApiData;
});

const apiSlice = createSlice({
  name: "api",
  initialState: { data: [] as ApiData[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.fulfilled, (state, { payload }) => {
      //@ts-ignore
      state.data = payload;
    });
  },
});

export default apiSlice.reducer;
export { fetchApiData };
