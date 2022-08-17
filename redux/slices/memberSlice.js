import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import addNewMemberMutation from "./graphql/member/mutations/addNewMember";
import addFavoriteProjectMutation from "./graphql/member/mutations/addFavoriteProject";
import updateMemberMutation from "./graphql/member/mutations/updateMember";
import findMemberQuery from "./graphql/member/queries/findMember";
import { jsonToString, jsonToStringWithEnums } from "../tools/transformations";

const initialState = {
  loading: true,
  isDataAvailable: false,
  discordAvatar: "",
  _id: "",
  discordName: "",
  discordAvatar: "",
  bio: "",
  hoursPerWeek: 0,
  timeZone: "",
  links: [],
  previusProjects: [],
  content: {
    interest: "",
    mostProud: "",
    showCaseAbility: "",
  },
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
export const addFavoriteProject = createAsyncThunk(
  "addFavoriteProject",
  async (params) => {
    const response = await apiClient(addFavoriteProjectMutation(params));

    return response.data.data.addFavoriteProject;
  }
);

export const updateMember = createAsyncThunk("updateMember", async (params) => {
  if (params.links) {
    params.links = jsonToString(params.links);
  }
  if (params.previusProjects) {
    params.previusProjects = jsonToString(params.previusProjects);
  }
  if (params.content) {
    params.content = jsonToString(params.content);
  }
  if (params.skills) {
    params.skills = jsonToStringWithEnums(params.skills, params.enums);
    console.log("params skills", params.skills);
  }

  const response = await apiClient(updateMemberMutation(params));
  console.log("response===", response);
  return response.data.data.updateMember;
});

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    addMemberData: (state, action) => {
      state._id = action.payload._id;
      state.discordName = action.payload.discordName;
      state.discordAvatar = action.payload.discordAvatar;
    },
  },
  extraReducers: {
    [updateMember.pending]: (state) => {
      state.loading = true;
    },
    [updateMember.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      state.isDataAvailable = true;
      state.loading = false;
      state._id = payload._id;
      state.discordName = payload.discordName;
      state.discordAvatar = payload.discordAvatar;
      state.bio = payload.bio;
      state.hoursPerWeek = payload.hoursPerWeek;
      state.timeZone = payload.timeZone;
      state.links = payload.links;
      state.previusProjects = payload.previusProjects;
      state.content = payload.content;
      state.skills = payload.skills;
      state.projects = payload.projects;
      state.network = payload.network;
    },
    [findMember.pending]: (state) => {
      state.isDataAvailable = false;
      state.loading = true;
    },
    [findMember.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.loading = false;
      state.isDataAvailable = true;

      state._id = payload._id;
      state.discordAvatar = payload.discordAvatar;
      state.discordName = payload.discordName;
      state.discordAvatar = payload.discordAvatar;
      state.discordID = payload._id;
      state.bio = payload.bio;
      state.hoursPerWeek = payload.hoursPerWeek;
      state.timeZone = payload.timeZone;
      state.links = payload.links;
      state.previusProjects = payload.previusProjects;
      state.content = payload.content;
      state.skills = payload.skills;
      state.projects = payload.projects ? payload.projects : [];
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
      state.discordAvatar = payload.discordAvatar;
      state.discordID = payload._id;
      state.bio = payload.bio;
      state.skills = payload.skills;
      state.projects = payload.projects;
      state.network = payload.network;
    },
    [addFavoriteProject.pending]: (state) => {
      state.isDataAvailable = false;
      state.loading = true;
    },
    [addFavoriteProject.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.loading = false;
      state.isDataAvailable = true;
      state.projects = payload.projects;
    },
  },
});

export const { addMemberData } = memberSlice.actions;

export default memberSlice.reducer;
