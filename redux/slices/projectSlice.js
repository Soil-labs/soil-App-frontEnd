import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import updateProject from "./graphql/project/mutations/updateProject";
import findProject from "./graphql/project/queries/findProject";
import {jsonToString} from "../tools/transformations";

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



export const findProject_red = createAsyncThunk("findProject_red",async (params) => {

  const response = await apiClient(findProject(params));

  return response.data.data.findProject;
}
);

export const updateProject_red = createAsyncThunk("updateProject_red",async (params) => {

  
    if (params.budget){
      params.budget = jsonToString(params.budget);
    }
    if (params.role){
      params.role = jsonToString(params.role);
    }
    

    const response = await apiClient(updateProject(params));

    return response.data.data.updateProject;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [updateProject_red.pending]: (state) => {
      state.loading = true;
    },
    [updateProject_red.fulfilled]: (state, { payload }) => {
      state.isDataAvailable = true
      state.loading = false;
      state._id = payload._id;
      state.title = payload.title;
      state.description = payload.description;
      state.role = payload.role;
      state.budget = payload.budget;

    },
    [findProject_red.pending]: (state) => {
      state.loading = true;
    },
    [findProject_red.fulfilled]: (state, { payload }) => {
      state.isDataAvailable = true
      state.loading = false;

      state._id = payload._id;
      state.title = payload.title;
      state.description = payload.description;
      state.role = payload.role;
      state.budget = payload.budget;

    },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
