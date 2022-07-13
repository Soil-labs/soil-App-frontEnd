import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import updateProjectMutation from "./graphql/project/mutations/updateProject";

const initialState = {
  isDataAvailable: false,
  tagName: "",
  _id: "",
  title: "",
  description: "",
  budget: {
    totalBudget: "",
  },
  dates: {
    kickoffDate: "",
    wrapUpDate: "",
  },
  notesAndJustification: "",
};

export const createNewProject = createAsyncThunk(
  "createNewProject",
  async (field) => {
    console.log("field - createNewProject", field);
    console.log("field.totalBudget", field.totalBudget);
    const response = await apiClient({
      data: {
        query: `mutation{
      updateProject(fields:{
        tagName: "${field.title.replace(" ","_").replace(" ","_").replace(" ","_").replace(" ","_")}"
        title: "${field.title}"
        description: "${field.description}"
        dates: {
          kickOff: "${field.kickoffDate}"
          complition: "${field.wrapUpDate}"
        }
        budget: {
          totalBudget: "${field.totalBudget}"
        }
        
      }){
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

    console.log("response.data.data.updateProject - projectSlice= " , response.data.data.updateProject)
    return response.data.data.updateProject;
  }
);

export const findProject = createAsyncThunk("findProject", async (fields) => {
  const response = await apiClient({
    data: {
      query: `query{
        findProject(fields:{
          _id: "${fields._id}"
        }){
          _id
          title
          description
        }
      }`,
    },
  });

  return response.data.data.findProject;
});

export const updateProject = createAsyncThunk(
  "updateProject",
  async (fields) => {
    const response = await apiClient(updateProjectMutation(fields));

    return response.data.data.updateProject;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [createNewProject.fulfilled]: (state, { payload }) => {
      state.title = payload.title;
      state.description = payload.description;
      console.log("payload", payload);
      console.log("payload.budget", payload.budget);
      console.log("payload.budget.totalBudget", payload.budget.totalBudget);
      state.budget.totalBudget = payload.budget.totalBudget;
      state.dates.kickoffDate = payload.dates.kickOff;
      state.dates.wrapUpDate = payload.dates.complition;
      state.notesAndJustification = payload.notesAndJustification;
    },
    [findProject.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.title = payload.title;
      state.description = payload.description;
    },
    [updateProject.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.title = payload.title;
      state.description = payload.description;
    },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
