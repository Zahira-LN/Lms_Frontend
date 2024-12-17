import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "../redux/slices/CourseSlice";
import { Card } from "../components/Card.jsx";

export const Courses = () => {
  const dispatch = useDispatch();

  const { courseData } = useSelector((state) => state.course);

  console.log(courseData);

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);

  return (
    <div className="flex flex-col gap-8 h-auto justify-center items-center py-[50px] px-[20px] ">
      <h2 className="text-[1.5rem] font-bold font-monsterrtate">Get The Course Made By <span className="text-blue-500  font-extrabold">Industry Level Experts</span></h2>
      <ul className="flex justify-center flex-wrap align-center gap-6 ">
        {courseData.length > 0 ? (
          courseData.map((course) => (
            <li key={course._id}>
              <Card course={course} />
            </li>
          ))
        ) : (
          <li>No courses available</li>
        )}
      </ul>
    </div>
  );
};
