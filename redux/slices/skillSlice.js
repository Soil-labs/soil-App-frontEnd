import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  _id: "",
  tagName: "",
  members: [],
  nameOfSkills: [],
};

export const findSkill = createAsyncThunk("get data", async (field) => {
  // console.log("findSkill - field= " , field)
  const response = await apiClient({
    data: {
      query: `query{
        findSkill(fields:{
          tagName: "${field.tagName}"
        }){
          _id
          tagName
          members {
            discordName
          }
        }
      }`,
    },
  });

  return response.data.data.findSkill;
});

export const findAllSkillNames = createAsyncThunk(
  "Find all skill names",
  async () => {
    const response = await apiClient({
      data: {
        query: `query{
        findSkills(fields:{
        }){
          name
        }
      }`,
      },
    });
    console.log(" return response.data.data.findSkill ...", response.data.data.findSkills)
    return response.data.data.findSkills;
    
  }
);

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: {
    [findSkill.fulfilled]: (state, { payload }) => {
      // console.log("skill - payload", payload)

      state._id = payload._id;
      state.tagName = payload.tagName;
      state.members = payload.members;

      // console.log("skill - state", state)
    },

    [findAllSkillNames.fulfilled]: (state, { payload }) => {
      state.nameOfSkills = payload;
      console.log("payload[0].name", payload[0].name)
    },
  },
});

// export const {} = counterSlice.actions;
export const skillNames = (state) => state.nameOfSkills

export default skillSlice.reducer;
