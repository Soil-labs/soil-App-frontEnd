import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

import findMemberQuery from "./queries/member/findMember.graphql";
import { print } from "graphql/language/printer";

const initialState = {
  _id: "",
  discordName: "",
  discordID: "",
  tweets: [""],
  skills: [],
  projects: [],
};

export const findMember = createAsyncThunk("findMember", async (field) => {
  const response = await apiClient({
    data: {
      query: print(findMemberQuery),
      variables: {
        _id: field.id,
      },
    },
  });

  return response.data.data.findMember;
});

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [findMember.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.discordName = payload.discordName;
    },
  },
});

export const { addReply } = memberSlice.actions;
export default memberSlice.reducer;
