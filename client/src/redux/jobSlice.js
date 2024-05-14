/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

// Action
export const fetchJobs = createAsyncThunk("fetchJobs", async () => {
  const response = await fetch("https://solartint-uat.azurewebsites.net/api/jobs");
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;