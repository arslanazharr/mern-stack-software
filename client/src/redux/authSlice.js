/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("addUser", async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/signup",
      formData
    );
    localStorage.setItem("JWT", response.data.token);
    localStorage.setItem("userId", response.data.userId);
    localStorage.setItem("username", response.data.username);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export const signInUser = createAsyncThunk("addUser", async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/signin",
      formData
    );
    localStorage.setItem("JWT", response.data.token);
    localStorage.setItem("userId", response.data.userId);
    localStorage.setItem("username", response.data.username);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
