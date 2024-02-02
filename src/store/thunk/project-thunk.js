import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../plugins/supabase";

export const getProjects = createAsyncThunk(
  "getProjects",
  async (_, thunkAPI) => {
    try {
      let { data: projects, error } = await supabase
        .from("projects")
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
  }
);

