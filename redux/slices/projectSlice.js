import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";
import updateProjectMutation from "./graphql/project/mutations/updateProject";
import changeTeamMember_Phase_ProjectMutation from "./graphql/project/mutations/changeTeamMember_Phase_Project";
import approveTweetMutation from "./graphql/project/mutations/approveTweet";
import findProjectQuery from "./graphql/project/queries/findProject";
import { jsonToString, arrayToString } from "../tools/transformations";
import { store } from "../store";
import matchProjectToUser from "./graphql/project/queries/matchProjectToUser";

const initialState = {
  isDataAvailable: false,
  loading: true,
  _id: "",
  serverID: "",
  title: "",
  description: "",
  budget: {},
  dates: {},
  steps: {},
  links: {},
  role: [],
  champion: {},
  team: [],
  tweets: [],
};

export const findProject = createAsyncThunk("findProject", async (params) => {
  // console.log("change = 223");
  const response = await apiClient(findProjectQuery(params));

  // console.log("response = ", response);
  return response.data.data.findProject;
});

export const match_projectToUser = createAsyncThunk(
  "match_projectToUser",
  async (params) => {
    // console.log("change = 223");
    const response = await apiClient(matchProjectToUser(params));

    // console.log("response = ", response);
    return response.data.data.match_projectToUser;
  }
);

export const updateProject = createAsyncThunk(
  "updateProject",
  async (params) => {
    if (params.budget) {
      params.budget = jsonToString(params.budget);
    }
    console.log("params.budget", params.budget);
    if (params.role) {
      params.role = jsonToString(params.role);
    }
    if (params.champion) {
      params.champion = params.champion;
    }
    if (params.team) {
      params.team = jsonToString(params.team);
    }
    if (params.dates) {
      params.dates = jsonToString(params.dates);
    }
    if (params.collaborationLinks) {
      params.collaborationLinks = jsonToString(params.collaborationLinks);
    }
    if (params.stepsJoinProject) {
      params.stepsJoinProject = arrayToString(params.stepsJoinProject);
    }

    console.log("params from slice", params);
    const response = await apiClient(updateProjectMutation(params));

    console.log(
      "response.data.data.updateProject",
      response.data.data.updateProject
    );
    return response.data.data.updateProject;
  }
);

export const changeTeamMember_Phase_Project = createAsyncThunk(
  "changeTeamMember_Phase_Project",
  async (params) => {
    console.log("changeTeamMember_Phase_Project = ");
    const response = await apiClient(
      changeTeamMember_Phase_ProjectMutation(params)
    );

    console.log("response.data.data = ", response.data.data);

    return response.data.data.changeTeamMember_Phase_Project;
  }
);

export const approveTweet = createAsyncThunk("approveTweet", async (params) => {
  const state = store.getState();
  const currentTweet = state.projectInspect.tweets.find((tweet) => {
    return params.tweetID === tweet._id;
  });
  if (
    state.member._id !== currentTweet.author._id &&
    state.member._id !== state.projectInspect.champion._id
  )
    return;
  const response = await apiClient(approveTweetMutation(params));

  return response.data.data.approveTweet;
});

export const projectSlice = createSlice({
  name: "projectIn",
  initialState,
  reducers: {},
  extraReducers: {
    [updateProject.pending]: (state) => {
      state.loading = true;
    },
    [updateProject.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      state.isDataAvailable = true;
      state.loading = false;
      state._id = payload._id;
      state.serverID = payload.serverID;
      state.title = payload.title;
      state.description = payload.description;
      state.dates = payload.dates;
      state.champion = payload.champion;
      state.team = payload.team;
      state.role = payload.role;
      state.tweets = payload.tweets;
      state.budget = payload.budget;
      state.dates = payload.dates;
      state.steps = payload.stepsJoinProject;
      state.links = payload.collaborationLinks;
    },
    [changeTeamMember_Phase_Project.pending]: (state) => {
      state.memberPhaseIsChanging = true;
    },
    [changeTeamMember_Phase_Project.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      console.log("changeTeamMember_Phase_Project = ", payload);

      state._id = payload._id;
      state.title = payload.title;
      state.team = payload.team;
      state.memberPhaseIsChanging = false;
      state.memberPhaseIsChanged = true;
    },
    [approveTweet.pending]: (state) => {
      state.loading = true;
    },
    [approveTweet.fulfilled]: (state, { payload }) => {
      if (!payload) return;

      state.tweets = payload.tweets;
    },
    [findProject.pending]: (state) => {
      state.isDataAvailable = false;
      state.loading = true;
    },
    [findProject.fulfilled]: (state, { payload }) => {
      if (!payload) return;
      state.isDataAvailable = true;
      state.loading = false;

      state._id = payload._id;
      state.serverID = payload.serverID;
      state.title = payload.title;
      state.description = payload.description;
      state.dates = payload.dates;
      state.champion = payload.champion;
      state.team = payload.team;
      state.role = payload.role;
      state.tweets = payload.tweets;
      state.budget = payload.budget;
    },
    [match_projectToUser.pending]: (state) => {
      console.log("pending");
      state.loading = true;
    },
    [match_projectToUser.fulfilled]: (state, { payload }) => {
      console.log("fulfilled!");
      console.log({ payload });
      if (!payload) return;
      state.isDataAvailable = true;
      state.loading = false;

      state.title = payload.projectData.title;
      state.description = payload.projectData.description;
      state._id = payload.projectData._id;
      state.champion = payload.projectData.champion;
      state.matchPercentage = payload.matchPercentage;
      state.skillsMatch = payload.skillsMatch;
      state.skillsDontMatch = payload.skillsDontMatch;
    },
  },
});

export const { addReply } = projectSlice.actions;
export default projectSlice.reducer;
