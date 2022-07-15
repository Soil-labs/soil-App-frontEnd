import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findMember from "./graphql/member/queries/findMember";

const initialState = {
  loading: true,
  isDataAvailable: false,

  _id: "",
  discordName: "",
  bio: "",
  skills: [],
  projects: [],
  network: [],
};

export const findMember_red = createAsyncThunk("findMember_red", async (params) => {
  const response = await apiClient(findMember(params));
  
  return response.data.data.findMember;
});

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [findMember_red.pending]: (state) => {
        state.loading = true;
    },
    [findMember_red.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isDataAvailable = true

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
