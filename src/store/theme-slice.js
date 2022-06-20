import { createSlice } from "@reduxjs/toolkit";

//Can add more themes from here
const ALL_THEMES = [
  {
    themeName: "Light",
    colors: {
      "--color-background": "#ffffff",
      "--color-primary": "#00d1b2",
      "--color-primary-light": "#00d1b238",
      "--color-primary-dark": "#049b84",
      "--color-secondary": "#7bccca",
      "--color-tertiary": "#ff94c4",
      "--color-text-primary": "black",
      "--color-text-secondary": "#363636",
      "--color-nav-hover": "#ccccccd5",
      "--color-gradient": "#303437",
      "--color-dark-gray": "#c5c4c2",
      "--transparent": "#ffffffbf",
    },
  },
  {
    themeName: "Dark",
    colors: {
      "--color-background": "black",
      "--color-primary": "#eb5757",
      "--color-primary-light": "#f28e8e31",
      "--color-primary-dark": "#eb3c3c",
      "--color-secondary": "#f9bf52",
      "--color-tertiary": "#1ab7ea",
      "--color-text-primary": "#ffffffe5",
      "--color-text-secondary": "#9a989a",
      "--color-nav-hover": "#1a1f28",
      "--color-gradient": "#303437",
      "--color-dark-gray": "#2c323f",
      "--transparent": "#111111bf",
    },
  },
  {
    themeName: "Purple",
    colors: {
      "--color-background": "#1e3253",
      "--color-primary": "#d884ff",
      "--color-primary-light": "#e4aaff3f",
      "--color-primary-dark": "#c243fd",
      "--color-secondary": "#eb505a",
      "--color-tertiary": "#aac86e",
      "--color-text-primary": "#ffffff",
      "--color-text-secondary": "#a0acbc",
      "--color-nav-hover": "#2c4c78",
      "--color-gradient": "#303437",
      "--color-dark-gray": "#2c4c78",
      "--transparent": "#21315bc5",
    },
  },
  {
    themeName: "Green",
    colors: {
      "--color-background": "#ecf5e3",
      "--color-primary": "#2d9641",
      "--color-primary-light": "#59976446",
      "--color-primary-dark": "#129029",
      "--color-secondary": "#b8723f",
      "--color-tertiary": "#b33938",
      "--color-text-primary": "#303e22",
      "--color-text-secondary": "#809070",
      "--color-nav-hover": "#c7e2ab",
      "--color-gradient": "#303437",
      "--color-dark-gray": "#c7e2ab",
      "--transparent": "#f0f0d57e",
    },
  },
  {
    themeName: "Gray",
    colors: {
      "--color-background": "#313437",
      "--color-primary": "#eb5757",
      "--color-primary-light": "#553b3d",
      "--color-primary-dark": "#f28e8e",
      "--color-secondary": "#f9bf52",
      "--color-tertiary": "#069ccd",
      "--color-text-primary": "#ebebeb",
      "--color-text-secondary": "#a0a2a3",
      "--color-nav-hover": "#474c50",
      "--color-gradient": "#303437",
      "--color-dark-gray": "#474c50",
      "--transparent": "#303437bf",
    },
  },
  {
    themeName: "Maroon",
    colors: {
      "--color-background": "#621832",
      "--color-primary": "#ffd845",
      "--color-primary-light": "#fce3891e",
      "--color-primary-dark": "#fbd344",
      "--color-secondary": "#d44159",
      "--color-tertiary": "#ceaaef",
      "--color-text-primary": "#fff",
      "--color-text-secondary": "#b7a0ab",
      "--color-nav-hover": "#79495c",
      "--color-gradient": "#303437",
      "--color-dark-gray": "#79495c",
      "--transparent": "#621832bf",
    },
  },
];

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentThemeName: ALL_THEMES[0].themeName,
    currentColors: ALL_THEMES[0].colors,
    allThemes: ALL_THEMES,
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
      state.currentThemeName = retrievedTheme.themeName;
      state.currentColors = retrievedTheme.currentColors;
      state.allThemes = retrievedTheme.allThemes;
    },
  },
});

export default themeSlice;
export const themeActions = themeSlice.actions;
