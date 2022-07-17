import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import addNewMemberMutation from "./graphql/member/mutations/addNewMember";
import findMemberQuery from "./graphql/member/queries/findMember";

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

export const addNewMember = createAsyncThunk("addNewMember", async (params) => {
  const response = await apiClient(addNewMemberMutation(params));

  return response.data.data.addNewMember;
});
export const findMember = createAsyncThunk("findMember", async (params) => {
  const response = await apiClient(findMemberQuery(params));

  return response.data.data.findMember;
});

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [findMember.pending]: (state) => {
      state.isDataAvailable = false;
      state.loading = true;
    },
    [findMember.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.loading = false;
      state.isDataAvailable = true;

      state._id = payload._id;
      state.discordName = payload.discordName;
      state.discordID = payload._id;
      state.bio = payload.bio;
      state.skills = payload.skills;
      state.projects = payload.projects;
      state.network = payload.network;
    },
    [addNewMember.pending]: (state) => {
      state.isDataAvailable = false;
      state.loading = true;
    },
    [addNewMember.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.loading = false;
      state.isDataAvailable = true;

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
