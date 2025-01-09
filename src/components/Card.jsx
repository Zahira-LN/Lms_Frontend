import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Card = ({ course }) => {
  const [addToCart, setAddtoCart] = useState(false);
  const navigate = useNavigate();
  const handleAddtoCart = () => {
    setAddtoCart(!addToCart);
  };
  return (
    <div
    className="w-[200px] h-[250px] bg-white border shadow rounded-md grid grid-rows-9 font-notosans"
    onClick={() => navigate("/courses/description", { state: { ...course } })}
  >
      <img src={course.coverImage}
        alt=""
        className="h-[100%] w-[100%] row-span-4 rounded-t-sm"
      />
      <span className="text-center font-semibold text-[14px] p-2 row-span-1 ">
        {course.title}
      </span>
      <span className="p-2 text-left text-[12px] row-span-1 font-notosans">
        By {course.author}
      </span>
      <span className="text-center text-[16px] font-semibold row-span-1 ">
        ${course.price}
      </span>
      <div className=" row-span-2 flex justify-center items-center">
        <button
          type="button"
          onClick={handleAddtoCart}
          className="bg-black text-white py-1 px-2 rounded hover:scale-105 cursor-pointer w-fit  font-Montserrat font-sans text-[12px] font-semibold"
        >
          {!addToCart ? "Add to Cart +" : "Remove From Cart -"}
        </button>
      </div>
    </div>
  );
};
