import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { normalizeRepeatedSlashes } from "next/dist/shared/lib/utils";
import apiClient from "../../pages/api/axios";

const initialState = {
  characters:[],
  value: 0,
};


export const getData = createAsyncThunk("get data", async () => {

  console.log("change -- test= " )
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
  console.log("change -- test 2= " )
  console.log("change = " , response.data.data.characters)
  // console.log("inside the function----------",res.data.data.characters);
  // return response.data.data.characters;
  // return ({})
  return response.data.data.characters
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
    decrement: (state) => {
      state.value -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
    extraReducers: {
      [getData.fulfilled]: (state, action) =>{
        state.value += 1;
        state.characters.push(action.payload.results)
        // console.log("payload - counterSlice = ",payload);
      }
    },
  
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
