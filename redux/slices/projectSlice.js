import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  title: "",
  description: "",
};

export const createNewProject = createAsyncThunk("createNewProject", async (feild) => {

  console.log("title,description = " , feild.title,feild.description)
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

  console.log("response.date.data = " , response.data.data.updateProject)

  return response.data.data.updateProject;
});

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // addReply: (state, action) => {
    //   const projectData = {
    //     questions: action.payload,
    //   };
    //   console.log("this is from the slice ------>>>>", projectData);
    //   state.title = projectData.questions[0].reply
    //   state.description = projectData.questions[1].reply
    // },
    },
    extraReducers: {
      [createNewProject.fulfilled]: (state,{payload}) => {
        console.log("reducerWorks - state= " , state)
        console.log("reducerWorks2 - payload = " , payload)

        state.title = payload.title;
        state.description = payload.description;

      },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
