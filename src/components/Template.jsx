import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SingupFrom";
import LoginForm from "./LoginForm";

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>{" "}
          <span>{desc2}</span>
        </p>

        {/* ✅ FIXED condition */}
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign Up With Google</p>
        </button>
      </div>

      {/* ✅ FIXED div */}
      <div>
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
        />
      </div>
    </div>
  );
}

export default Template;
