import React, { useState} from "react";
import { useNavigate } from "react-router";
import Template from "../components/Template"

import toast from "react-hot-toast";

import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
    const [formData ,setFormData] = useState({
        email: "" , password:" "
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
        <form onSubmit={submitHandler}>
            <lable>
                <p>Email Address<sub>*</sub></p>
                <input 
                    required
                    type="text"
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"
                    placeholder="Enter email id"
                />
            </lable>

                   <lable>
                <p>Password<sub>*</sub></p>
                <input 
                    required
                    type= {showPassword ? ("text") : ("passwordS") }
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Your password"
                    name="password"
                />
                <span onClick={() => setShowPassword((prev) => !prev)}>

                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }

       
                
                </span>

                         <Link to="#"> 

                    <p>
                        Forgot Password
                    </p>
                
                </Link>
            </lable>

            <button>
                Sign In
            </button>

        </form>
    )

}

export default LoginForm;