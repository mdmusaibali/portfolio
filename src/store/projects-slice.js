import { createSlice } from "@reduxjs/toolkit";
import { OWN_PROJECTS, PRACTICE_PROJECTS } from "./data";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    ownProjects: OWN_PROJECTS,
    practiceProjects: PRACTICE_PROJECTS,
    allProjects: [...OWN_PROJECTS, ...PRACTICE_PROJECTS],
  },
  reducers: {},
});

export default projectsSlice;
export const projectsAction = projectsSlice.actions;
