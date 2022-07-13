import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";
import memberReducer from "./slices/memberSlice";
import projectReducer from "./slices/projectSlice";
import projectsReducer from "./slices/projectsSlice";
import skillReducer from "./slices/skillSlice";
import userInspectReducer from "./slices/userInspectSlice";
import usersInspectReducer from "./slices/usersInspectSlice";

export const store = configureStore({
  reducer: {
    member: memberReducer,
    userInspect: userInspectReducer,
    usersInspect: usersInspectReducer,

    project: projectReducer,
    projects: projectsReducer,

    skill: skillReducer,
  },
});
