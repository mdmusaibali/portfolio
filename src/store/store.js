import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./slice/projects-slice";
import themeSlice from "./slice/theme-slice";
import personalSlice from "./slice/personal-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    projects: projectsSlice.reducer,
    personal: personalSlice.reducer,
  },
});
export default store;
