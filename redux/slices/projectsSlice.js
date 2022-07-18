import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findProjectsQuery from "./graphql/project/queries/findProjects";
import findMemberQuery from "./graphql/member/queries/findMember";
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

export const findProjects_fromMember = createAsyncThunk("findProjects_fromMember", async (params) => {
  
  console.log("params = " , params)
  params = {
    ...params,
    returnProjects: true, // we only need projects 
    returnSkills: false,
    returnNetwork: false,
  }

  const response = await apiClient(findMemberQuery(params));

  console.log("response.data.data.findProjects = " , response.data.data.findMember)

  if (params.onlyChampions){
    response.data.data.findMember.projects = response.data.data.findMember.projects.filter(project =>  project.champion ==true )
  }

  return response.data.data.findMember;
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
    [findProjects_fromMember.pending]: (state) => {
      state.loading = true;
    },
    [findProjects_fromMember.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.isDataAvailable = true;
      state.loading = false;

      if (payload.projects){
        state.numberOfProjects = payload.projects.length;
        state.projectsInfo = payload.projects;
      }
    },
  },
});

export default projectsSlice.reducer;
