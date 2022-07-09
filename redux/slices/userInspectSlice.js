import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
    isDataAvailable: false,
    _id: "",
    discordName: "",
    discordAvatar:"",
    discriminator:"",
    bio: "",
    skills: [],
    projects: [],
};

export const findUser = createAsyncThunk("get data", async (field) => {
  const response = await apiClient({
    data: {
      query: `query{
        findMember(fields:{
          _id: "908392557258604544"
        }){
          _id
          discordName
          discordAvatar
          discriminator
          bio
          skills {
            tagName
            authors{
              discordName
            }
          }
          projects {
            project {
              tagName
            }
            role {
              title
              description
            }
            champion
          } 
        }
      }`,
    },
  });

  console.log("response.data.data.findMember = " , response.data.data.findMember)

  return response.data.data.findMember;
});

export const userInspectSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [findUser.fulfilled]: (state, {payload}) => {
        console.log("payload in userSlice", payload)
        state.isDataAvailable = payload.isDataAvailable
        state._id = payload._id
        state.discordName = payload.discordName
        state.discordAvatar = payload.discordAvatar
        state.discriminator = payload.discriminator
        state.bio = payload.bio
        state.skills = payload.skills
        state.projects = payload.projects

    },
  },
});

export default userInspectSlice.reducer;
