/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addMessage = createAsyncThunk("addMessage", async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/contact",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addMessage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addMessage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addMessage.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default contactSlice.reducer;
