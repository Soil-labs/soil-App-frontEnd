import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findSkill from "./graphql/skill/queries/findSkill";


const initialState = {
  loading: true,
  isDataAvailable: false,

  _id: "",
  name: "",
  members: [],
};


export const findSkill_red = createAsyncThunk("findSkill_red", async (params) => {

  
  const response = await apiClient(findSkill(params));

  return response.data.data.findSkill;
});

export const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: {
    [findSkill_red.pending]: (state) => {
        state.loading = true;
    },
    [findSkill_red.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.isDataAvailable = true

      state._id = payload._id;
      state.name = payload.name;
      state.members = payload.members;

    },
  },
});

// export const {} = counterSlice.actions;
export default skillSlice.reducer;
