import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../redux/slices/CourseSlice";

export const Courses = () => {
const dispatch = useDispatch();

const {courseData} = useSelector((state)=>state.Courses);

useEffect(()=>{
  loadAllCourses();
},[])


const loadAllCourses =async  ()=>{
  await dispatch(getAllCourses);
}
return (
  <>
  
  <h2>Hello World</h2>
  </>
)
};

