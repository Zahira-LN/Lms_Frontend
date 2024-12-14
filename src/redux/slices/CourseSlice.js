import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";


const initialState = {
    courseData:[]
}

const courseSlice =  createSlice({
    name:"Courses",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }


})

export const getAllCourses = createAsyncThunk('/course/get',async ()=>{
    try{
        const response = axiosInstance.get('/getallCourses');
        toast.promise(response,{
            loading:"loading course data",
            success:"course loaded successfully",
            error:"Unable to load course"
        })

        return await response;
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
})


export const {} = courseSlice.actions;
export const courseSliceReducer = courseSlice.reducer;
export { courseSlice };
export default courseSlice.reducer;
