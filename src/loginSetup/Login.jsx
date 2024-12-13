import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/AuthSlice";
import loginImage from "../assets/images/LoginNewImage.png";

const initialState = {
  email: "",
  username: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(loginData);

    setLoginData({ ...loginData, [name]: value });
  };

  const { email, username, password } = loginData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      toast.error("All fields required");
    }


    const response =await dispatch(loginUser(loginData));

    console.log("login response",response);
    

    if (response.payload.success) {
      toast.success("Logged in successfully!");
      navigate("/");
      setLoginData(initialState);
    } else {
      toast.error(response.payload.message || "Login failed");
    }
  };

  return (
    <div className="w-[100%] h-[100%] fixed flex">
      <div className="w-[60%] h-[100%] hidden md:block ">
        <img src={loginImage} alt="" className="h-[100vh] w-[100%]" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-[40%] w-[100%] h-[100%] flex md:items-left items-center justify-center flex-col pl-6 gap-1"
      >
        <h2 className="font-semibold text-[20px] mb-4">
          Sign in to your account
        </h2>
        <div className="flex flex-col gap-1 w-[80%]">
          <label
            className="text-[#000] text-[14px] font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            className=" border border-[#ccc] p-1 w-[100%] rounded"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 w-[80%]">
          <label
            className="text-[#000] text-[14px] font-semibold"
            htmlFor="username"
          >
            username
          </label>
          <input
            type="text"
            className=" border border-[#ccc] p-1 w-[100%] rounded"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 w-[80%]">
          <label
            className="text-[#000] text-[14px] font-semibold"
            htmlFor="password"
          >
            password
          </label>
          <input
            type="text"
            className=" border border-[#ccc] p-1 w-[100%] rounded"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white cursor-pointer text-[13px] font-semibold p-2 px-3 rounded-md w-fit float-left hover:scale-105 my-3 flex justify-center gap-3"
        >
          Login<i class="bi bi-arrow-right-circle-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default Login;
