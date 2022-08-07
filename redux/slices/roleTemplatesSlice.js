import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findRoleTemplatesQuery from "./graphql/roleTemplates/queries/findRoleTemplates";
import findSkill from "./graphql/skill/queries/findSkill";
import { jsonToString } from "../tools/transformations";

const initialState = {
  loading: true,
  isDataAvailable: false,
  roleTemplates: [],
};

export const findRoleTemplates = createAsyncThunk(
  "findRoleTemplates",
  async (params) => {
    const response = await apiClient(findRoleTemplatesQuery(params));

    return response.data.data.findRoleTemplates;
  }
);

export const roleTemplates = createSlice({
  name: "roleTemplates",
  initialState,
  reducers: {},
  extraReducers: {
    [findRoleTemplates.pending]: (state) => {
      state.loading = true;
    },
    [findRoleTemplates.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      state.loading = false;
      state.isDataAvailable = true;

      state.roleTemplates = payload;
    },
  },
});

export default roleTemplates.reducer;
