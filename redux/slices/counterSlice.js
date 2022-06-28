import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  value: 0,
};

export const getData = createAsyncThunk("get data", async () => {
  const response = await apiClient({
    data: {
      query: `query{
            characters(page: 1){
              info{
                count
                pages
              }
              results{
                name
                id
                location{
                  id
                  name
                }
                origin{
                  id
                  name
                }
                episode{
                  id
                  episode
                  air_date
                }
                image
              }
            }
          }
          `,
    },
  });
  return response.data.data.characters;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   getData

    //     .then((res) => {
    //       console.log(res.data.data.characters);
    //       state.value += 1;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    extraReducers: {
      [getData.increment]: (state) =>{
        state.value += 1;
      }
    }
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
