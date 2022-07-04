import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  tagName: "",
  _id: "",
  title: "",
  description: "",
  budget: "" ,
  dates: {
    kickoffDate: "" ,
    wrapUpDate: "",
  },
  notesAndJustification: "",
};

export const createNewProject = createAsyncThunk(
  "createNewProject",
  async (feild) => {
    console.log('feild = ',feild)
    const response = await apiClient({
      data: {
        query: `mutation{
      updateProject(fields:{
        tagName: "s_project27"
        title: "${feild.title}"
        description: "${feild.description}"
        dates: {
          kickOff: "${feild.kickoffDate}"
          complition: "${feild.wrapUpDate}"
        }
      }){
        tagName
        title
        description
        dates{
          kickOff
          complition
        }
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

  return response.data.data.findProject;
});

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [createNewProject.fulfilled]: (state, { payload }) => {
      state.title = payload.title;
      state.description = payload.description;
      state.budget = payload.budget;
      state.dates.kickoffDate = payload.dates.kickOff;
      state.dates.wrapUpDate = payload.dates.complition;
      state.notesAndJustification = payload.notesAndJustification;
      console.log('This is payload ==>>>>', payload)
      console.log('This is payload.dates ==>>>>', payload.dates)
      console.log('This is payload.dates.kickoffDate ==>>>>', payload.dates.kickOff)
    },
    [findProject.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.title = payload.title;
      state.description = payload.description;
    },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
