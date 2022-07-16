import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
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

export const inpsectUser = createAsyncThunk("inpsectUser", async (params) => {
  const response = await apiClient(findMemberQuery(params));

  console.log("response.data.data.findMember = ", response);

  return response.data.data.findMember;
});

export const addSkillToMember = createAsyncThunk(
  "addSkillToMember",
  async (params) => {
    const response = await apiClient(addSkillToMemberMutation(params));

    return response.data.data.addSkillToMember;
  }
);

export const userInspectSlice = createSlice({
  name: "userInspect",
  initialState,
  reducers: {},
  extraReducers: {
    [inpsectUser.pending]: (state) => {
      state.loading = true;
    },
    [inpsectUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isDataAvailable = true;

      if (payload) {
        state._id = payload._id;
        state.discordName = payload.discordName;
        state.discordID = payload._id;
        state.bio = payload.bio;
        state.skills = payload.skills;
        state.projects = payload.projects;
        state.network = payload.network;
      }
    },
    [addSkillToMember.pending]: (state) => {
      state.loading = true;
    },
    [addSkillToMember.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.loading = false;
      state.isDataAvailable = true;

      state.discordName = payload.discordName;
      state.memberInfo.skills = payload.skills;
    },
  },
});

export default userInspectSlice.reducer;
