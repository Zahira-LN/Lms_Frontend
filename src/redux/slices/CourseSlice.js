import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  courseData: [],
};

export const getAllCourse = createAsyncThunk("/course/get", async (_, thunkAPI) => {
  try {
    const response = await toast.promise(
      axiosInstance.get("courses/getallCourses"),
      {
        loading: "Loading course data...",
        success: (data)=>data?.data?.message,
        error: "Unable to load courses",
      }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "An unexpected error occurred.";
    toast.error(errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});




const courseSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourse.fulfilled, (state, action) => {
      state.courseData = action.payload?.data || [];
    });
  },
});

export const {} = courseSlice.actions;
export const courseSliceReducer = courseSlice.reducer;
export { courseSlice };
export default courseSlice.reducer;
