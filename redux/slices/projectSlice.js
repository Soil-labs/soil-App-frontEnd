import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  isDataAvailable: false,
  tagName: "",
  _id: "",
  title: "",
  championName: "",
  championAvatar: "",
  description: "",
  skills: [],
  budget: {
    totalBudget: "",
  },
  roles: [],
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
        tagName: "${field.title
          .replace(" ", "_")
          .replace(" ", "_")
          .replace(" ", "_")
          .replace(" ", "_")}"
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

    console.log(
      "response.data.data.updateProject - projectSlice= ",
      response.data.data.updateProject
    );
    return response.data.data.updateProject;
  }
);

export const findProject = createAsyncThunk("findProject", async (id) => {
  const response = await apiClient({
    data: {
      query: `query{
        findProject(fields:{
              _id: "${id}"
        }){
          _id
          title
          description
          team{
            memberInfo{
              discordName
            }
          }
          champion{
            discordName
            discordAvatar
          }
          role{
            title
            skills{
              skill{
                _id
                name
              }
            }
          }
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
      state.championName = payload.champion.discordName;
      state.championAvatar = payload.champion.discordAvatar;
      state.dates.kickoffDate = payload.dates.kickOff;
      state.dates.wrapUpDate = payload.dates.complition;
      state.budget.totalBudget = payload.budget.totalBudget;
      state.skills = payload.role;
      state.roles = payload.role;
    },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
