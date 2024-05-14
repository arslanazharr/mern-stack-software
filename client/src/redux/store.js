import { configureStore } from "@reduxjs/toolkit";
import todos from "./todoSlice";
import jobs from "./jobSlice";
import register from "./jobSlice copy";

export const store = configureStore({
  reducer: {
    todo: todos,
    jobs: jobs,
    register,
  },
});
