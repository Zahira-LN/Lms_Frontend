import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {addToCart} from '../redux/slices/AuthSlice.js'

const CourseDescription = () => {
  const navigator = useLocation();
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState(navigator.state);
  // const [addToCart, setAddtoCart] = useState(false);


  useEffect(() => {
    console.log(navigator);
    setCourseData(navigator.state);
  }, []);

  const handleAddtoCart = () => {
    dispatch(addToCart({ productId: courseData._id, quantity: 1 }));
    console.log("courseData._id",courseData._id);
    
    // setAddtoCart(!addToCart);
  };
  const { author,coverImage, description, title } = courseData;
  return (
    <div className="flex p-[10px] gap-4  flex-col md:flex-row">
      <div className="flex flex-col justify-center gap-2 md:items-start items-center  order-2 md:order-1 md:w-[50%] w-[100%]">
        <span className=" text-center md:text-left font-monsterrtate font-bold text-[20px]">{title}</span>
        <span className=" text-center md:text-left font-notosans line-clamp-3">{description}</span>
        <span className=" text-center md:text-left font-monsterrtate font-semibold text-slate-700 text-[14px]">created by:<span className="font-notosans text-black"> {author}</span></span>
        <div className="  row-span-2 flex justify-center items-center">
          <button
            type="button"
            onClick={handleAddtoCart}
            className="bg-black text-white py-2 px-2 rounded hover:scale-105 cursor-pointer w-fit  font-Montserrat font-sans text-[12px] font-semibold"
          >
          Add to Cart +
          </button>
        </div>
      </div>

      <div className="order-1 md:order-2 md:w-[50%] w-[100%] flex justify-center items-center">
        <img
          src={coverImage}
          alt=""
          className="rounded-md h-[250px] w-[80%]"
        />
      </div>
    </div>
  );
};

export default CourseDescription;
