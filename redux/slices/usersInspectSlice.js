import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
    members: [],
    loading: true,
};

async function fetchMembers(field) {
    try {
        let result = await apiClient({
            data: {
                query: `query{
                    findSkill(fields:{
                    _id:"${field._id}"
                    }){
                    _id
                    name
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
        return result.data.data.findSkill;
    } catch (err) {
        console.log("error on graphQL request - findSkill = ", err);
    }
}

export const findSkill = createAsyncThunk("findSkill", async (id) => {
    const field = {
        _id: id,
    };
    const response = await fetchMembers(field);
    return response;
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
            state.members = action.payload.members;
        },
    },
});

export const selectMembers = (state) => state.usersInspect.members;
export const selectLoadingMembers = (state) => state.usersInspect.loading;
export default inspectUsers.reducer;
