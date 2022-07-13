import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  isDataAvailable: false,
  numberOfProjects: -1,
  projects: [],
};

export const findAllProjects = createAsyncThunk(
  "find all projects ",
  async () => {
    const response = await apiClient({
      data: {
        query: `query{
            findProjects(fields:{
                
            }){
              _id
              tagName
              title
              description
              dates{
                kickOff
                complition
              }
              budget{
                totalBudget
              }
            }
          }`,
      },
    });
    return response.data.data.findProjects;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: {
    [findAllProjects.fulfilled]: (state, { payload }) => {
      state.isDataAvailable = true;
      state.numberOfProjects = payload.length;
      state.projects = payload;
    },
  },
});

export default projectsSlice.reducer;
