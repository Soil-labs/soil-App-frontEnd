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

export const findMember = createAsyncThunk("get data", async () => {

  console.log("findMember - memberSlice = " )

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

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [findMember.fulfilled]: (state, {payload}) => {
      console.log("payload", payload)
      state.isDataAvailable = true;
      state._id = payload._id;
      state.discordName = payload.discordName;
      state.discriminator = payload.discriminator;
      state.bio = payload.bio;
      state.skills = payload.skills;
      state.projects = payload.projects;

    },
  },
});


export default memberSlice.reducer;
