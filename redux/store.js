import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import inspectUserReducer from "./slices/inspectUser";
import memberReducer from "./slices/memberSlice";
import projectReducer from "./slices/projectSlice";
import inspectUsersReducer from "./slices/inspectUsers";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        member: memberReducer,
        project: projectReducer,
        inspectUsers: inspectUsersReducer,
        inspectUser: inspectUserReducer,
    },
});
