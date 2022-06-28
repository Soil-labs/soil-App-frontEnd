import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  _id: "62adbd7ca569ad00044c4fd9",
  discordName: "BluePanda",
  discordID: "908392557258604544",
  tweets: ["recuVtMbNAeoKFTT4"],
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
