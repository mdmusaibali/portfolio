import { createSlice } from "@reduxjs/toolkit";
const personalSlice = createSlice({
  name: "personal",
  initialState: {
    skills: [],
    experience: [],
    education: [],
    games: [],
    bookRecommendations: [],
  },
  reducers: {},
});

export default personalSlice;
export const personalAction = personalSlice.actions;
