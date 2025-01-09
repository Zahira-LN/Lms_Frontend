import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer, courseSliceReducer } from "./slices/index.js";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    course:courseSliceReducer
  },
  devTools: true,
});

export default store;
