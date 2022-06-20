import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./projects-slice";
import themeSlice from "./theme-slice";

const store = configureStore({
  reducer: { theme: themeSlice.reducer, projects: projectsSlice.reducer },
});
export default store;
