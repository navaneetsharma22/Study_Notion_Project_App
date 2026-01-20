import React, { useState} from "react";
import { useNavigate } from "react-router";
import Template from "../components/Template"

import toast from "react-hot-toast";

import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
    const [formData ,setFormData] = useState({
        email: "" , password:""
    })

    const navigate = useNavigate();

    const [showPassword,setShowPassword] = useState(false);

        function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value

        }))

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard");

    }


    return (
        // for Submit Page to Dashboard
        <form onSubmit={submitHandler}
         className="flex flex-col w-full gap-y-4 mt-6">
            <lable className="w-full">
                <p className="text-[0.875rem] text-white mb-1 leading-0.5 mb-3 font-bold">Email Address<sub className="text-pink-400">*</sub></p>
                <input 
                    required
                    type="text"
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"
                    placeholder="Enter email id"
                    className="bg-gray-900 rounded-sm text-white w-full p-3"
                />
            </lable>

                   <lable className="w-full relative">
                <p className="text-[0.875rem] text-white mb-1 leading-0.5 mb-3 font-bold">Password<sub className="text-pink-400">*</sub></p>
                <input 
                    required
                    type= {showPassword ? ("text") : ("passwordS") }
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder ="Enter Your Password"
                    name="password"
                    className="bg-gray-900   rounded-sm text-white w-full p-3"
                />
                <span className="absolute top-6.5 right-3 cursor-pointer "
                onClick={() => setShowPassword((prev) => !prev)}>

                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }

       
                
                </span>

                         <Link to="#"> 

                    <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto ">
                        Forgot Password
                    </p>
                 
                </Link>
            </lable>

            <button className="bg-yellow-500 rounded-sm font-medium h-9 text-gray-900 px-4 mt-5">
                Sign In
            </button>

        </form>
    )

}

export default LoginForm;