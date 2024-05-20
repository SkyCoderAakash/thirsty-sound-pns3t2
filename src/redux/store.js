import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentSlice";
const appStore = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default appStore;
