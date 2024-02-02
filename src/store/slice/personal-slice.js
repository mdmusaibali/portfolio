import { createSlice } from "@reduxjs/toolkit";
import {
  getEducation,
  getExperience,
  getSkills,
} from "../thunk/personal-thunk";
const personalSlice = createSlice({
  name: "personal",
  initialState: {
    skills: [],
    experience: [],
    education: [],
    games: [],
    bookRecommendations: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSkills.fulfilled, (state, action) => {
      const skills = action.payload;
      if (Array.isArray(skills)) {
        state.skills = skills;
      }
    });
    builder.addCase(getSkills.rejected, (state) => {
      state.error = "Unable to fetch skills from database 😔";
    });
    builder.addCase(getExperience.fulfilled, (state, action) => {
      const experience = action.payload;
      if (Array.isArray(experience)) {
        state.experience = experience;
      }
      console.log("experience ", experience);
    });
    builder.addCase(getExperience.rejected, (state) => {
      state.error = "Unable to fetch experience details from database 😔";
    });
    builder.addCase(getEducation.fulfilled, (state, action) => {
      const education = action.payload;
      if (Array.isArray(education)) {
        state.education = education;
      }
      console.log("education ", education);
    });
    builder.addCase(getEducation.rejected, (state) => {
      state.error = "Unable to fetch education details from database 😔";
    });
  },
});

export default personalSlice;
export const personalAction = personalSlice.actions;
