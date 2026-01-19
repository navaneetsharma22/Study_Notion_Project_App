import React from "react";
import loginImg from "../assets/login.png";
import Template from "../components/Template";

// ✅ FIX: destructure props correctly
function Login({ setIsLoggedIn }) {

    return (
       <Template 
        title="Welcome Back"
        desc1="Build skills for today"
        desc2="Education to future-proof your Career"
        image={loginImg}              // ✅ image is passed correctly
        formType="login"
        setIsLoggedIn={setIsLoggedIn} // ✅ now works
       />
    );
}

export default Login;
