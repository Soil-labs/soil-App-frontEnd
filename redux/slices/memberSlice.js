import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import getMemberQuery from "./graphql/member/queries/getMember";

const initialState = {
  _id: "62adbd7ca569ad00044c4fd9",
  discordName: "BluePanda",
  discordID: "908392557258604544",
  bio: null,
  skills: ["scrum master", "react"],
  projects: ["soil"],
  network: ["Miral", "sbelka"],
};

export const getMember = createAsyncThunk("getMember", async (id) => {
  const response = await apiClient(getMemberQuery(id));

  return response.data.data.findMember;
});

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [getMember.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.discordName = payload.discordName;
      state.discordID = payload._id;
      state.bio = payload.bio;
      state.skills = payload.skills;
      state.projects = payload.projects;
      state.network = payload.network;
    },
  },
});

export default memberSlice.reducer;
