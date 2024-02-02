import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../plugins/supabase";

export const getSkills = createAsyncThunk("getSkills", async (_, thunkAPI) => {
  try {
    let { data: projects, error } = await supabase
      .from("skills")
      .select("*")
      .order("date", { ascending: false });
    if (error) throw new Error(error);
    return projects;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const getExperience = createAsyncThunk(
  "getExperience",
  async (_, thunkAPI) => {
    try {
      let { data: projects, error } = await supabase
        .from("experience")
        .select("*")
        .order("startDate", { ascending: false });
      if (error) throw new Error(error);
      return projects;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const getEducation = createAsyncThunk(
  "getEducation",
  async (_, thunkAPI) => {
    try {
      let { data: projects, error } = await supabase
        .from("education")
        .select("*")
        .order("startDate", { ascending: false });
      if (error) throw new Error(error);
      return projects;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
