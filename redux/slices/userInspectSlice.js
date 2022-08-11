import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findMemberQuery from "./graphql/member/queries/findMember";
import updateUserMutation from "./graphql/userInspect/mutations/updateUser";
import { jsonToString } from "../tools/transformations";

const initialState = {
    loading: true,
    isDataAvailable: false,
    _id: "",
    discordName: "",
    discordAvatar: "",
    bio: "",
    registeredAt: "",
    hoursPerWeek: "",
    skills: [],
    projects: [],
    network: [],
    previusProjects: [],
};

export const inpsectUser = createAsyncThunk("inpsectUser", async (params) => {
    const response = await apiClient(findMemberQuery(params));

    console.log("response.data.data.findMember = ", response);

    return response.data.data.findMember;
});

export const addSkillToMember = createAsyncThunk(
    "addSkillToMember",
    async (params) => {
        const response = await apiClient(addSkillToMemberMutation(params));

        return response.data.data.addSkillToMember;
    }
);

export const updateUser = createAsyncThunk("updateUser", async (params) => {
  if (params.skills) {
    params.skills = jsonToString(
      params.skills.map((skill) => {
        return {
          id: skill.skillInfo._id,
        };
      })
    );
  }
  const response = await apiClient(updateUserMutation(params));
  return response.data.data.updateUser;
});

export const userInspectSlice = createSlice({
    name: "userInspect",
    initialState,
    reducers: {},
    extraReducers: {
        [inpsectUser.pending]: (state) => {
            state.loading = true;
        },
        [inpsectUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.isDataAvailable = true;

            if (payload) {
                state._id = payload._id;
                state.discordName = payload.discordName;
                state.discordID = payload._id;
                state.discordAvatar = payload.discordAvatar;
                state.bio = payload.bio;
                state.skills = payload.skills;
                state.registeredAt = payload.registeredAt;
                state.projects = payload.projects;
                state.network = payload.network;
                state.hoursPerWeek = payload.hoursPerWeek;
                state.previusProjects = payload.previusProjects;
            }
        },
        [addSkillToMember.pending]: (state) => {
            state.loading = true;
        },
        [addSkillToMember.fulfilled]: (state, { payload }) => {
            if (!payload) return;
            state.loading = false;
            state.isDataAvailable = true;

            state.discordName = payload.discordName;
            state.memberInfo.skills = payload.skills;
        },
    },
});

export default userInspectSlice.reducer;
