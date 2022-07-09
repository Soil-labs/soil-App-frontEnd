import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
    memberInfo: {},
    loading: undefined,
};

async function fetchMember(id) {
    let result = await apiClient({
        data: {
            query: `query{
                findMember(fields:{
                  _id: "${id}"
                }){
                  _id
                  discordName
                  discordAvatar
                  bio
                  tweets
                  skills {
                    tagName
                    authors {
                        discordName
                    }
                  }
                  projects {
                    project {
                        tagName
                        description
                    }
                    role {
                      title
                      description
                    }
                    champion
                  }
                  registeredAt
                }
              }`,
        },
    });

    return result;
}

export const findMember = createAsyncThunk("inspectUser", async (id) => {
    const response = await fetchMember(id);
    return response.data;
});

export const inspectUserSlice = createSlice({
    name: "member",
    initialState,
    reducers: {},
    extraReducers: {
        [findMember.pending]: (state) => {
            state.loading = true;
        },
        [findMember.fulfilled]: (state, action) => {
            state.loading = false;
            state.memberInfo = action.payload.data.findMember;
        },
    },
});

export const selectMemberInfo = (state) => state.inspectUser.memberInfo;
export const selectLoadingMember = (state) => state.inspectUser.loading;
export default inspectUserSlice.reducer;
