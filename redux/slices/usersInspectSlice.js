import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findMembersQuery from "./graphql/member/queries/findMembers";
import findSkill from "./graphql/skill/queries/findSkill";
import { jsonToString } from "../tools/transformations";

const initialState = {
  loading: true,
  isDataAvailable: false,
  members: [],
};

export const findMembers_withSkill = createAsyncThunk(
  "findMembers_withSkill",
  async (params) => {
    const response = await apiClient(findSkill(params));

    return response.data.data.findSkill;
  }
);

export const findMembers = createAsyncThunk("findMembers", async (params) => {
  if (params._id) {
    params = {
      ...params,
      _id: jsonToString(params._id),
    };
  }

  const response = await apiClient(findMembersQuery(params));

  return response.data.data.findMembers;
});

export const inspectUsers = createSlice({
  name: "inspectUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [findMembers_withSkill.pending]: (state) => {
      state.loading = true;
    },
    [findMembers_withSkill.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      state.loading = false;
      state.isDataAvailable = true;
      state.members = payload.members;
    },
    [findMembers.pending]: (state) => {
      state.loading = true;
    },
    [findMembers.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      state.loading = false;
      state.isDataAvailable = true;

      state.members = payload;
    },
  },
});

export default inspectUsers.reducer;
