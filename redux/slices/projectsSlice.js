import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findProjectsQuery from "./graphql/project/queries/findProjects";
import { arrayToString } from "../tools/transformations";

const initialState = {
  isDataAvailable: false,
  loading: true,
  numberOfProjects: 0,
  projectsInfo: [],
};

export const findProjects = createAsyncThunk("findProjects", async (params) => {
  if (params._id) {
    params = {
      ...params,
      _id: arrayToString(params._id),
    };
  }

  const response = await apiClient(findProjectsQuery(params));

  return response.data.data.findProjects;
});

export const projectsSlice = createSlice({
  name: "projectsInspect",
  initialState,
  reducers: {},
  extraReducers: {
    [findProjects.pending]: (state) => {
      state.loading = true;
    },
    [findProjects.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.isDataAvailable = true;
      state.loading = false;

      state.numberOfProjects = payload.length;
      state.projectsInfo = payload;
    },
  },
});

export default projectsSlice.reducer;
