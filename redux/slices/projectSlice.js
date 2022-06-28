import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  
    _id: "62b98a094e8d090004e80b8f",
    tagName: "s_project2",
    dates: {
      kickOff: null,
      complition: null,
    },

};

export const getData = createAsyncThunk("get data", async () => {
  const response = await apiClient({
    data: {},
  });

  return response;
});

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.fulfilled]: (state) => {},
  },
});

// export const {} = counterSlice.actions;
export default projectSlice.reducer;
