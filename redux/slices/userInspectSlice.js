import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
    memberInfo: {},
    loading: undefined,
};

async function fetchMember(field) {
    try {
        let result = await apiClient({
            data: {
                query: `query{
            findMember(fields:{
              _id: "${field._id}"
            }){
              _id
              discordName
              discordAvatar
              bio
              tweets
              skills {
                name
                authors {
                    discordName
                }
              }
              projects {
                info{
                  title
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
        return result.data.data.findMember;
    } catch (err) {
        console.log("error on graphQL request - findMember = ", err);
    }
}

export const findMember = createAsyncThunk("inspectUser", async (id) => {
    const field = {
        _id: id,
    };
    const response = await fetchMember(field);
    return response;
});

export const userInspectSlice = createSlice({
    name: "member",
    initialState,
    reducers: {},
    extraReducers: {
        [findMember.pending]: (state) => {
            state.loading = true;
        },
        [findMember.fulfilled]: (state, action) => {
            state.loading = false;
            state.memberInfo = action.payload;
        },
    },
});

export const selectMemberInfo = (state) => state.userInspect.memberInfo;
export const selectLoadingMember = (state) => state.userInspect.loading;
export default userInspectSlice.reducer;
