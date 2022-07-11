import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  isDataAvailable: false,
  numberOfUsers: -1,
  users: [],
};

export const findAllUsers = createAsyncThunk(
  "find all users",
  async (field) => {
    const response = await apiClient({
      data: {
        query: `query{
            findMembers(fields:{

            }){
              _id
              discordName
              discordAvatar
              discriminator
              bio
            }
          }`,
      },
    });
    return response.data.data.findMembers;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: {
    [findAllUsers.fulfilled]: (state, { payload }) => {
      state.isDataAvailable = true;
      state.numberOfUsers = payload.length;
      state.users = payload;
    },
  },
});

export default projectsSlice.reducer;
