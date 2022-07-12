import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  _id: "62adbd7ca569ad00044c4fd9",
  discordName: "BluePanda",
  discordID: "908392557258604544",
  tweets: ["recuVtMbNAeoKFTT4"],
  skills: [],
  projects: [],
};

export const findMember = createAsyncThunk("findMember", async (fields) => {
  const response = await apiClient(findMemberQuery(fields));

  return response.data.data.findMember;
});

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [findMember.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.discordName = payload.discordName;
    },
  },
});

export const { addReply } = memberSlice.actions;
export default memberSlice.reducer;
