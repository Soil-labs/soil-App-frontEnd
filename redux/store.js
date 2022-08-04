import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";
import memberReducer from "./slices/memberSlice";
import projectReducer from "./slices/projectSlice";
import projectsReducer from "./slices/projectsSlice";
import skillReducer from "./slices/skillSlice";
import skillsReducer from "./slices/skillsSlice";
import userInspectReducer from "./slices/userInspectSlice";
import usersInspectReducer from "./slices/usersInspectSlice";
import roleTemplatesReducer from "./slices/roleTemplatesSlice";

export const store = configureStore({
  reducer: {
    member: memberReducer,
    userInspect: userInspectReducer,
    usersInspect: usersInspectReducer,

    projectInspect: projectReducer,
    projectsInspect: projectsReducer,

    skillInspect: skillReducer,
    skillsInspect: skillsReducer,

    roleTemplates: roleTemplatesReducer,
  },
});
