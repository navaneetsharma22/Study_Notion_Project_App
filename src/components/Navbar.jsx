import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="flex relative bottom-1 justify-between items-center w-11/12 max-w-290 py-4 mx-auto font-bold">

      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} />
      </Link>

      {/* Nav Links */}
      <nav>
        <ul className="flex gap-x-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>

      {/* Auth Buttons */}
      <div className="flex item-center gap-x-4 ">

        {/* Login */}
        {!isLoggedIn && (
          <Link
            to="/login"
            onClick={() =>
              toast("Redirecting to Login 🔐", { id: "login-toast" })
            }
          >
            <button className=" bg- bg-gray-800 text-white py-2 
            px-3 rounded-sm border-gray-700">Login</button>
          </Link>
        )}

        {/* Signup */}
        {!isLoggedIn && (
          <Link
            to="/signup"
            onClick={() =>
              toast.success("Create your account ✨", { id: "signup-toast" })
            }
          >
            <button className=" bg- bg-gray-800 text-white py-2 
            px-3 rounded-sm border-gray-700">Sign Up</button>
          </Link>
        )}

        {/* Logout */}
        {isLoggedIn && (
          <Link
            to="/"
            onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged out successfully 👋", {
                id: "logout-toast",
              });
            }}
          >
            <button className=" bg- bg-gray-800 text-white py-2 
            px-3 rounded-sm border-gray-700">Log Out</button>
          </Link>
        )}

        {/* Dashboard */}
        {isLoggedIn && (
          <Link
            to="/dashboard"
            onClick={() =>
              toast("Welcome to Dashboard 🚀", { id: "dashboard-toast" })
            }
          >
            <button className=" bg- bg-gray-800 text-white py-2 
            px-3 rounded-sm border-gray-700">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
