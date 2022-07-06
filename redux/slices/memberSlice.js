import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  _id: "62adbd7ca569ad00044c4fd9",
  discordName: "BluePanda",
  discordID: "908392557258604544",
  bio: null,
  skills: ["scrum master", "react"],
  projects: ["soil"],
  network: ["Miral", "sbelka"],
};

export const getMember = createAsyncThunk("getMember", async (id) => {
  const response = await apiClient({
    data: {
      query: `query{
        findMember(fields: {
          _id: "${id}"
        }){
          _id
          discordName
          discordAvatar
          skills {
            tagName
          }
          projects {
            tagName
          }
          network {
            discordName
          }
      }
    }`,
    },
  });

  return response.data.data.findMember;
});

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [getMember.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.discordName = payload.discordName;
      state.discordID = payload._id;
      state.bio = null;
      state.skills = payload.skills;
      state.projects = payload.projects;
      state.network = payload.network;
    },
  },
});

// export const {} = counterSlice.actions;
export default memberSlice.reducer;
