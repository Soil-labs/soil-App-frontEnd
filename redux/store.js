import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import memberReducer from "./slices/memberSlice";
import projectReducer from "./slices/projectSlice";
import projectsReducer from "./slices/projectsSlice";
import skillReducer from "./slices/skillSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    member: memberReducer,
    projects: projectsReducer,
    project: projectReducer,
    skill: skillReducer,
  },
});
