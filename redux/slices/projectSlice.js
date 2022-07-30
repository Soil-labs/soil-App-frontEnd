import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import updateProjectMutation from "./graphql/project/mutations/updateProject";
import findProjectQuery from "./graphql/project/queries/findProject";
import { jsonToString } from "../tools/transformations";

const initialState = {
  isDataAvailable: false,
  loading: true,

  _id: "",
  title: "",
  description: "",
  budget: {},
  dates: {},
  role: [],
  champion: {},
};

export const findProject = createAsyncThunk("findProject", async (params) => {
  // console.log("change = 223");
  const response = await apiClient(findProjectQuery(params));

  // console.log("response = ", response);
  return response.data.data.findProject;
});

export const updateProject = createAsyncThunk(
  "updateProject",
  async (params) => {
    if (params.budget) {
      params.budget = jsonToString(params.budget);
    }
    console.log("params.budget",params.budget)
    if (params.role) {
      params.role = jsonToString(params.role);
    }
    if (params.champion) {
      params.champion = jsonToString(params.champion);
    }
    if (params.team) {
      params.team = jsonToString(params.team);
    }
    if (params.dates) {
      params.dates = jsonToString(params.dates);
    }
    if (params.collaborationLinks) {
      params.collaborationLinks = jsonToString(params.team);
    }
  console.log("params",params)
    const response = await apiClient(updateProjectMutation(params));

    console.log("response.data.data.updateProject", response.data.data.updateProject)
    console.log("response.data.data", response.data.data)
    console.log("response.data", response.data)
    return response.data.data.updateProject;
    
  }
);

export const projectSlice = createSlice({
  name: "projectIn",
  initialState,
  reducers: {},
  extraReducers: {
    [updateProject.pending]: (state) => {
      state.loading = true;
    },
    [updateProject.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      state.isDataAvailable = true;
      state.loading = false;
      state._id = payload._id;
      state.title = payload.title;
      // console.log("title", payload.title)
      state.description = payload.description;
      // console.log("description", payload.description)
      state.role = payload.role;
      state.budget = payload.budget;
      // console.log("budget", payload)
    },
    [findProject.pending]: (state) => {
      state.loading = true;
    },
    [findProject.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      state.isDataAvailable = true;
      state.loading = false;

      state._id = payload._id;
      state.title = payload.title;
      state.description = payload.description;
      state.role = payload.role;
      state.budget = payload.budget;
      state.champion = payload.champion;
    },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
