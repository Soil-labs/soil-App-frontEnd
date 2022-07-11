import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  _id: "",
  tagName: "",
  members: [],
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

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: {
    [findSkill.fulfilled]: (state, {payload}) => {
      // console.log("skill - payload", payload)

      state._id = payload._id;
      state.tagName = payload.tagName;
      state.members = payload.members;

      // console.log("skill - state", state)

    },
  },
});

// export const {} = counterSlice.actions;
export default skillSlice.reducer;
