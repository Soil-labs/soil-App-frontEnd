import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  _id: "62b98cdb4e8d090004e80baf",
  tagName: "coding",
  members: [],
};

export const getData = createAsyncThunk("get data", async () => {
  const response = await apiClient({
    data: {},
  });

  return response;
});

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.fulfilled]: (state) => {},
  },
});

// export const {} = counterSlice.actions;
export default skillSlice.reducer;
