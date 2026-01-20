import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SingupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [accountType,setAccountType] = useState("student");


  // ✅ SEPARATE STATES
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Account created successfully");
    setIsLoggedIn(true);

    console.log("Account Data:", formData);

    navigate("/dashboard");
  }

  return (
    <div>
    <div className="flex flex-row bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
        className= {`${accountType === "student" ? " bg-gray-900 text-gray-300  "
         : "bg-transparent text-gray-500" } py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("student")}>Student</button>
        <button
         className= {`${accountType === "instructor" ? " bg-gray-900 text-gray-300  "
         : "bg-transparent text-gray-500" } py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("instructor")}>Instructor</button>
    </div>
      <form onSubmit={submitHandler}>
        {/* First & Last Name */}
        <div className="mt-5 flex flex-row justify-between">
          <label>
            <p className="text-[0.875rem] text-white mt-2 leading-0.5 mb-3 font-bold">First Name<sub className="text-pink-400" >*</sub></p>
            <input
              required
              type="text"
              name="firstName"
              placeholder="Enter firstname"
              value={formData.firstName}
              onChange={changeHandler}
              className="bg-gray-900 rounded-sm h-11 mt-0.2 text-white w-full p-3"
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-white  mt-2 leading-0.5 mb-3 font-bold">Last Name<sub className="text-pink-400">*</sub></p>
            <input
              required
              type="text"
              placeholder="Enter lastname"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="bg-gray-900 h-11 rounded-sm mt-0.2 text-white w-full p-3"
            />
          </label>
        </div>

        {/* Email */}
        <label>
          <p className="text-[0.875rem] text-white mb-1  mt-5 leading-0.5 mb-3 font-bold">Email Address<sub className="text-pink-400">*</sub></p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter  email"
            value={formData.email}
            onChange={changeHandler}
            className="bg-gray-900 h-11 rounded-sm mt-0.2 text-white w-full p-3"
          />
        </label>

        {/* Passwords */}
        <div className="flex flex-row  mt-5 justify-between">
          {/* PASSWORD */}
          <label className="relative">
            <p  className="text-[0.875rem] text-white mt-2 leading-0.5 mt-0.8 mb-3 font-bold"> Password<sub className="text-pink-400">*</sub></p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={changeHandler}
              className="bg-gray-900  h-11 rounded-sm mt-0.2 text-white w-full p-3"
            />
            <span className="absolute top-8 right-3 cursor-pointer "
            onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/> : <AiOutlineEye  fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>

          {/* CONFIRM PASSWORD */}
          <label className="relative">
            <p  className="text-[0.875rem]  mt-2 text-white  leading-0.5 mb-3 mt-0.8 font-bold">Confirm Password<sub className="text-pink-400">*</sub></p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Your Password"
              value={formData.confirmPassword}
              onChange={changeHandler}
              className="bg-gray-900 h-11 rounded-sm text-white w-full mt-0.2 p-3"
            />
            <span className="absolute top-8  right-1 cursor-pointer "
             onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye  fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
        </div>

        <button  className="bg-yellow-500 rounded-sm font-medium h-9 w-full  text-gray-900 px-4 mt-6"
         type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SingupForm;
