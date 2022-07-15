import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findSkills from "./graphql/skill/queries/findSkills";
import {arrayToString} from "../tools/transformations";


const initialState = {
  isDataAvailable: false,
  loading: true,
  numberOfProjects: 0,
  skillsInfo: [],
};



export const findSkills_red = createAsyncThunk("findSkills_red", async (params) => {

  if (params._id) {
      params = {
          ...params,
          _id: arrayToString(params._id),
      };
  }
  
  const response = await apiClient(findSkills(params));

  return response.data.data.findSkills;
});

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: {
    [findSkills_red.pending]: (state) => {
      state.loading = true;
    },
    [findSkills_red.fulfilled]: (state, { payload }) => {
      state.isDataAvailable = true;
      state.loading = false;
      
      state.numberOfProjects = payload.length;
      state.skillsInfo = payload;
    },
  },
});

export default projectsSlice.reducer;
