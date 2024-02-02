import { createSlice } from "@reduxjs/toolkit";
import { ALL_THEMES } from "../data";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentThemeName: ALL_THEMES[0].themeName,
    currentColors: ALL_THEMES[0].colors,
    allThemes: ALL_THEMES,
    themePickerIsOpen: false,
  },
  reducers: {
    changeThemeState(state, action) {
      const newThemeName = action.payload.themeName;
      const [newTheme] = ALL_THEMES.filter(
        (theme) => newThemeName === theme.themeName
      );
      state.currentThemeName = newTheme.themeName;
      state.currentColors = newTheme.colors;
    },
    changeTheme(state) {
      Object.entries(state.currentColors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    },
    setThemeToLocalStorage(state) {
      localStorage.setItem("theme", JSON.stringify(state));
    },
    getThemeFromLocalStorage(state) {
      const retrievedTheme = JSON.parse(localStorage.getItem("theme"));
      if (!retrievedTheme) return;
      state.currentThemeName = retrievedTheme.themeName;
      state.currentColors = retrievedTheme.currentColors;
      state.allThemes = retrievedTheme.allThemes;
    },
    toggleThemePickerIsOpen(state) {
      state.themePickerIsOpen = !state.themePickerIsOpen;
    },
  },
});

export default themeSlice;
export const themeActions = themeSlice.actions;
