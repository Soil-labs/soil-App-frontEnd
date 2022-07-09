import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
    members: [],
    loading: true,
};

async function fetchMembers(tagName) {
    let result = await apiClient({
        data: {
            query: `query{
              findSkill(fields:{
                tagName: "${tagName}"
              }){
                _id
                tagName
                members {
                  _id
                  discordName
                  discordAvatar
                  discriminator
                }
                  
              }
            }`,
        },
    });

    return result;
}

export const findSkill = createAsyncThunk("findSkill", async (tagName) => {
    const response = await fetchMembers(tagName);
    return response.data;
});

export const inspectUsers = createSlice({
    name: "inspectUsers",
    initialState,
    reducers: {},
    extraReducers: {
        [findSkill.pending]: (state) => {
            state.loading = true;
        },
        [findSkill.fulfilled]: (state, action) => {
            state.loading = false;
            state.members = action.payload.data.findSkill.members;
        },
    },
});

export const selectMembers = (state) => state.inspectUsers.members;
export const selectLoadingMembers = (state) => state.inspectUsers.loading;
export default inspectUsers.reducer;
