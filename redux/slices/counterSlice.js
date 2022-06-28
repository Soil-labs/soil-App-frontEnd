import { createSlice } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";



const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment :  (state) => {
        // await apiClient({
        //     data: {
        //       query: `query{
        //         characters(page: 1){
        //           info{
        //             count
        //             pages
        //           }
        //           results{
        //             name
        //             id
        //             location{
        //               id
        //               name
        //             }
        //             origin{
        //               id
        //               name
        //             }
        //             episode{
        //               id
        //               episode
        //               air_date
        //             }
        //             image
        //           }
        //         }
        //       }`,
        //     },
        //   })
            // .then((res) => {
            //   console.log(res.data.data.characters);
            //   state.value += 1;
            // })
            // .catch((err) => {
            //   console.log(err);
            // });
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
