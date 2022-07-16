import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findMembers from "./graphql/member/queries/findMembers";
import findSkill from "./graphql/skill/queries/findSkill";
import { arrayToString } from "../tools/transformations";

const initialState = {
  loading: true,
  isDataAvailable: false,
  members: [],
};

export const findMembers_withSkill_red = createAsyncThunk(
  "findMembers_withSkill_red",
  async (params) => {
    const response = await apiClient(findSkill(params));

    return response.data.data.findSkill;
  }
);

export const findMembers_red = createAsyncThunk(
  "findMembers_red",
  async (params) => {
    if (params._id) {
      params = {
        ...params,
        _id: arrayToString(params._id),
      };
    }

    const response = await apiClient(findMembers(params));

    return response.data.data.findMembers;
  }
);

export const inspectUsers = createSlice({
  name: "inspectUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [findMembers_withSkill_red.pending]: (state) => {
      state.loading = true;
    },
    [findMembers_withSkill_red.fulfilled]: (state, action) => {
      state.loading = false;
      state.isDataAvailable = true;
      if (action.payload) {
        state.members = action.payload.members;
      }
    },
    [findMembers_red.pending]: (state) => {
      state.loading = true;
    },
    [findMembers_red.fulfilled]: (state, action) => {
      state.loading = false;
      state.isDataAvailable = true;
      state.members = action.payload;
    },
  },
});

export default inspectUsers.reducer;
