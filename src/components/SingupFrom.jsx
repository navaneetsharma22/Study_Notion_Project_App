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
      <form onSubmit={submitHandler}>
        {/* First & Last Name */}
        <div>
          <label>
            <p>First Name<sub>*</sub></p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
            />
          </label>

          <label>
            <p>Last Name<sub>*</sub></p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* Email */}
        <label>
          <p>Email Address<sub>*</sub></p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </label>

        {/* Passwords */}
        <div>
          {/* PASSWORD */}
          <label>
            <p>Password<sub>*</sub></p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          {/* CONFIRM PASSWORD */}
          <label>
            <p>Confirm Password<sub>*</sub></p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SingupForm;
