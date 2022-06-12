import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
  },
});
