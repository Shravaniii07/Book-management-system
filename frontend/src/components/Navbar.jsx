import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup"
  ) {
    return null;
  }

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <h2
        onClick={() => navigate("/home")}
        className="text-2xl font-bold text-sky-700 cursor-pointer"
      >
        📚 BookManager
      </h2>

      <div className="flex gap-6 text-gray-700 font-medium">

        <span
          onClick={() => navigate("/home")}
          className="cursor-pointer hover:text-sky-600"
        >
          Home
        </span>

        <span
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer hover:text-sky-600"
        >
          Dashboard
        </span>

        <span
          onClick={() => navigate("/login")}
          className="cursor-pointer hover:text-sky-600"
        >
          Login
        </span>

        <span
          onClick={() => navigate("/signup")}
          className="cursor-pointer hover:text-sky-600"
        >
          Signup
        </span>

      </div>

    </nav>
  );
}

export default Navbar;