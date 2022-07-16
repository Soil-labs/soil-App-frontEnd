import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findSkillsQuery from "./graphql/skill/queries/findSkills";
import { arrayToString } from "../tools/transformations";

const initialState = {
  isDataAvailable: false,
  loading: true,
  numberOfProjects: 0,
  skillsInfo: [],
};

export const findSkills = createAsyncThunk("findSkills", async (params) => {
  if (params._id) {
    params = {
      ...params,
      _id: arrayToString(params._id),
    };
  }

  const response = await apiClient(findSkillsQuery(params));

  return response.data.data.findSkills;
});

export const projectsSlice = createSlice({
  name: "skillsInspect",
  initialState,
  reducers: {},
  extraReducers: {
    [findSkills.pending]: (state) => {
      state.loading = true;
    },
    [findSkills.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.isDataAvailable = true;
      state.loading = false;

      state.numberOfProjects = payload.length;
      state.skillsInfo = payload;
    },
  },
});

export default projectsSlice.reducer;
