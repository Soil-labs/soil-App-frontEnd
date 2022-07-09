import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";
import memberReducer from "./slices/memberSlice";
import projectReducer from "./slices/projectSlice";
import skillReducer from "./slices/skillSlice";


export const store = configureStore({
  reducer: { member: memberReducer, project: projectReducer, skill: skillReducer },
});
