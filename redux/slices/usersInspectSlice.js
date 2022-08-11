import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import findMembersQuery from "./graphql/member/queries/findMembers";
import findSkill from "./graphql/skill/queries/findSkill";
import matchMembersToSkills from "./graphql/member/queries/matchMembersToSkills";
import { jsonToString } from "../tools/transformations";

const initialState = {
    loading: true,
    isDataAvailable: false,
    members: [],
    teamMembers: [],
};

export const findMembers_withSkill = createAsyncThunk(
    "findMembers_withSkill",
    async (params) => {
        console.log("response1");
        const response = await apiClient(matchMembersToSkills(params));
        console.log("Response", response);
        return response.data.data.matchMembersToSkills;
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
            state.members = payload;
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
