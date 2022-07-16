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
};

export const findProject = createAsyncThunk("findProject", async (params) => {
  const response = await apiClient(findProjectQuery(params));

  return response.data.data.findProject;
});

export const updateProject = createAsyncThunk(
  "updateProject",
  async (params) => {
    if (params.budget) {
      params.budget = jsonToString(params.budget);
    }
    if (params.role) {
      params.role = jsonToString(params.role);
    }
    if (params.champion) {
      params.champion = jsonToString(params.champion);
    }
    if (params.team) {
      params.team = jsonToString(params.team);
    }
    if (params.budget) {
      params.budget = jsonToString(params.budget);
    }
    if (params.dates) {
      params.dates = jsonToString(params.dates);
    }
    if (params.collaborationLinks) {
      params.collaborationLinks = jsonToString(params.team);
    }

    const response = await apiClient(updateProjectMutation(params));

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
      state.description = payload.description;
      state.champion = payload.champion;
      state.role = payload.role;
      state.budget = payload.budget;
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
      state.champion = payload.champion;
      state.role = payload.role;
      state.budget = payload.budget;
    },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
