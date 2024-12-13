import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../redux/slices/AuthSlice";
import Lmslogin from "../assets/images/Lmslogin.jpg";

const initialState = {
  fullName: "",
  username: "",
  password: "",
  email: "",
  avatar: "",
};

const Register = () => {
  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState("");
  const [signupData, setSignupData] = useState(initialState);

  const { fullName, username, password, email, avatar } = signupData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });

    console.log(signupData);
  };

  function getImage(e) {
    e.preventDefault();

    const uploadImage = e.target.files[0];

    if (uploadImage) {
      setSignupData({
        ...signupData,
        avatar: uploadImage,
      });
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadImage);
    fileReader.addEventListener("load", function () {
      console.log(this.result);

      setPreviewImage(this.result);
    });
  }

  const createNewAccount = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !fullName || !avatar) {
      toast.error("All fields required");
      return;
    }

    const formData = new FormData();
    formData.append("fullName",fullName);
    formData.append("username",username);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("avatar",avatar);


    const response = await dispatch(createAccount(formData));

    if (response.payload.success) {

    navigate("/login");
    }

    setSignupData(initialState);
    setPreviewImage("");
  };

  return (
    <div className="w-[100%] flex h-[100vh] fixed ">
      <div className="md:w-[50%] h-[100%] hidden md:block ">
        <img src={Lmslogin} alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="md:w-[50%] w-[100%] h-[100%] flex justify-center items-center flex-col  p-4 bg-[E5E5E5]">
        <h1 className="text-center font-semibold text-[#000] mb-[20px] text-[24px] ">
          Create Your Account
        </h1>
        <form
          onSubmit={createNewAccount}
          className="flex flex-col md:items-left items-center justify-center gap-3 md:w-[53%] w-[80%]"
        >
          <div className="flex flex-col gap-1 w-[90%]">
            <label className="cursor-pointer">
              <div className="flex justify-center items-center">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-[73px] h-[73px] rounded-full m-auto"
                  />
                ) : (
                  <i className="bi bi-person-circle text-[73px] leading-[73px] "></i>
                )}
              </div>

              <input
                type="file"
                id="image_upload"
                className="hidden"
                name="image_uploads"
                onChange={getImage}
                accept=".jpeg, .jpg, .png, .svg"
              />
            </label>
          </div>
          <div className="flex flex-col gap-1 w-[90%]">
            <label
              className="text-[#000] text-[14px] font-semibold "
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              className=" border border-[#ccc] p-1 w-[100%] rounded"
              name="fullName"
              value={fullName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-[90%]">
            <label
              className="text-[#000] text-[14px] font-semibold "
              htmlFor="username"
            >
              UserName
            </label>
            <input
              type="text"
              className=" border border-[#ccc] p-1 w-[100%] rounded"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-[90%]">
            <label
              className="text-[#000] text-[14px] font-semibold "
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
          <div className="flex flex-col gap-1 w-[90%]">
            <label
              className="text-[#000] text-[14px] font-semibold "
              htmlFor="password"
            >
              Password
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
            onSubmit={createNewAccount}
            className="bg-black text-white cursor-pointer text-[13px] font-semibold p-1 px-2 rounded-md w-fit float-left hover:scale-105"
          >
            create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
