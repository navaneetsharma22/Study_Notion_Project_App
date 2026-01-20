import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SingupFrom";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
  return (
    <div className="flex py-12 relative bottom-5 w-11/12 max-w-290 justify-between mx-auto gap-x-12 gap-y-0  ">
      <div className=" w-11/12 max-w-112.5 "> 

        <h1
         className="text-white font-semibold text-[1.875rem] leading- ">{title}</h1>
        <p className="text-[1.125rem]  leading[1.625rem] mt-4">
          <span className="text-white">{desc1}</span>{" "}
          <br/>
          <span className="text-blue-500 italic">{desc2}</span>
        </p>

        {/* ✅ FIXED condition */}
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full item-center my-4 gap-x-2 ">
          <div className="w-full h-px bg-gray-700"></div>
          <p className="text-gray-700 font-medium leading[1.375rem]">OR</p>
          <div className="w-full h-px bg-gray-700 "></div>
        </div>

        <button className="w-full flex justify-center item-center  rounded-lg font-medium
        text-gray-100 border border-gray-600 px-4 py-2 gap-x-2">
        <FcGoogle/>
          <p>Sign Up With Google</p>
        </button>
      </div>

      {/* ✅ FIXED div */}
      <div className="relative w-11/12  max-w-112.5 ">
        {/* ✅ FIXED src */}
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        {/* ✅ WORKING IMAGE */}
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
}

export default Template;
