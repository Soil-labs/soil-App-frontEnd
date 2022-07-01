import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  _id: "",
  discordName: "",
  discordID: "",
  tweets: [""],
  skills: [],
  projects: []
};

export const getData = createAsyncThunk("get data", async () => {
  const response = await apiClient({
    data: {},
  });

  return response;
});

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.fulfilled]: (state) => {},
  },
});

// export const {} = counterSlice.actions;
export default memberSlice.reducer;
