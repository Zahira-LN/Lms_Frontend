import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/AuthSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="bg-black h-16 flex justify-between items-center p-2 font-monsterrtate">
      <div className="text-white text-[20px] font-semibold font-monsterrtate">LMS System</div>
      <ul className="flex gap-2 justify-center items-center list-none">
       {!isLoggedIn ? (
        <>
          <Link to={"/login"}>
            <li className="bg-white rounded px-2 py-1 text-black font-semibold text-[13px]">
              Sign in
            </li>
          </Link>
          <Link to={"/register"}>
            <li className="bg-white rounded px-2 py-1 text-black font-semibold text-[13px]">
              Sign Up
            </li>
          </Link>
        </>
        ) : (
        <div className="flex gap-2">
          <Link to={"/courses"} className="text-white font-semibold">
            Courses
          </Link>
          <i
            className="bi bi-person-circle text-white"
            onClick={handleLogout}
          ></i>
        </div>
        )}
      </ul>
    </div>
  );
};

export default Header;
