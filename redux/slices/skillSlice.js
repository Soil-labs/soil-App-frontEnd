import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import createSkillMutation from "./graphql/skill/mutations/createSkill";
import findSkillQuery from "./graphql/skill/queries/findSkill";

const initialState = {
  loading: true,
  isDataAvailable: false,

  _id: "",
  name: "",
  members: [],
};

export const findSkill = createAsyncThunk("findSkill", async (params) => {
  const response = await apiClient(findSkillQuery(params));

  return response.data.data.findSkill;
});

export const createSkill = createAsyncThunk("createSkill", async (params) => {
  const response = await apiClient(createSkillMutation(params));

  return response.data.data.createSkill;
});

export const skillSlice = createSlice({
  name: "skillInspect",
  initialState,
  reducers: {},
  extraReducers: {
    [findSkill.pending]: (state) => {
      state.isDataAvailable = false;
      state.loading = true;
    },
    [findSkill.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.loading = false;
      state.isDataAvailable = true;

      state._id = payload._id;
      state.name = payload.name;
      state.members = payload.members;
    },
  },
});

// export const {} = counterSlice.actions;
export default skillSlice.reducer;
