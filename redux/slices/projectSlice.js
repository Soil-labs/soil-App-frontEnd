import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  title: "",
  description: "",
  _id: "",
};

export const createNewProject = createAsyncThunk(
  "createNewProject",
  async (feild) => {
    console.log("title,description = ", feild.title, feild.description);
    const response = await apiClient({
      data: {
        query: `mutation{
      updateProject(fields:{
        tagName: "${feild.title}"
        title: "${feild.title}"
        description: "${feild.description}"
      }){
        tagName
        title
        description
      }
    }`,
      },
    });

    console.log("response.date.data = ", response.data.data.updateProject);

    return response.data.data.updateProject;
  }
);

export const findProject = createAsyncThunk("findProject", async (field) => {
  const response = await apiClient({
    data: {
      query: `query{
        findProject(fields:{
          _id: "${field._id}"
        }){
          _id
          title
          description
        }
      }`,
    },
  });
  console.log("response.date.data = ", response.data.data.findProject);

  return response.data.data.findProject;
});

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [createNewProject.fulfilled]: (state, { payload }) => {
      // console.log("reducerWorks - state= ", state);
      // console.log("reducerWorks2 - payload = ", payload);

      state.title = payload.title;
      state.description = payload.description;
    },
    [findProject.fulfilled]: (state, { payload }) => {
      console.log("reducerWorks - state= ", state);
      console.log("reducerWorks2 - payload = ", payload);
      state._id = payload._id;
      state.title = payload.title;
      state.description = payload.description;
    },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
