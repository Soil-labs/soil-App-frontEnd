import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  allProjects: [],
};

export const findProjects = createAsyncThunk("findProjects", async (field) => {
  const response = await apiClient({
    data: {
      query: `query{
        findProjects(fields:{
        }){
          _id
          title
          description
        }
      }`,
    },
  });

  return response.data.data.findProjects;
});

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: {
    [findProjects.fulfilled]: (state, { payload }) => {
      state.allProjects = payload;
    },
  },
});

export const { addReply } = projectsSlice.actions;
export default projectsSlice.reducer;
