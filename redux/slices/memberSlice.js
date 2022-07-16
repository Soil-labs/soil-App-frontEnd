import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import addNewMemberMutation from "./graphql/member/mutations/addNewMember";
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

export const addNewMember_red = createAsyncThunk(
  "addNewMember_red",
  async (params) => {
    const response = await apiClient(addNewMemberMutation(params));

    return response.data.data.addNewMember;
  }
);
export const findMember_red = createAsyncThunk(
  "findMember_red",
  async (params) => {
    const response = await apiClient(findMember(params));

    return response.data.data.findMember;
  }
);

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [findMember_red.pending]: (state) => {
      state.isDataAvailable = false;
      state.loading = true;
    },
    [findMember_red.fulfilled]: (state, { payload }) => {
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
    [addNewMember_red.pending]: (state) => {
      state.isDataAvailable = false;
      state.loading = true;
    },
    [addNewMember_red.fulfilled]: (state, { payload }) => {
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
