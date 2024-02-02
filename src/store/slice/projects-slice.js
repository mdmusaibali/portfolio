import { createSlice } from "@reduxjs/toolkit";
import { getProjects } from "../thunk/project-thunk";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    ownProjects: [],
    practiceProjects: [],
    allProjects: [],
    building: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      let projects = action.payload;
      if (Array.isArray(projects)) {
        state.allProjects = projects;
        let ownProjects = projects.filter(
          (project) => project.projectType === "own" && !project.isBuilding
        );
        let practiceProjects = projects.filter(
          (project) => project.projectType === "practise" && !project.isBuilding
        );
        let building = projects.filter((project) => project.isBuilding);
        state.ownProjects = ownProjects;
        state.practiceProjects = practiceProjects;
        state.building = building;
      }
    });
    builder.addCase(getProjects.rejected, (state) => {
      state.error = "Unable to fetch projects from database 😔";
    });
  },
});

export default projectsSlice;
export const projectsAction = projectsSlice.actions;
