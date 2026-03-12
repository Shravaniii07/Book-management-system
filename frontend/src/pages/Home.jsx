


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-sky-50">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h2
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-sky-700 cursor-pointer"
        >
          📚 BookManager
        </h2>

        <div className="flex gap-6 items-center text-gray-700 font-medium">

          <span
            onClick={() => navigate("/home")}
            className="cursor-pointer hover:text-sky-600"
          >
            Home
          </span>

          <span
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:text-sky-600"
          >
            About
          </span>

          <span
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:text-sky-600"
          >
            Contact
          </span>

          {!isLoggedIn ? (
            <>
              <span
                onClick={() => navigate("/login")}
                className="cursor-pointer hover:text-sky-600"
              >
                Login
              </span>

              <span
                onClick={() => navigate("/signup")}
                className="bg-sky-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-sky-600"
              >
                Sign Up
              </span>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-500 font-semibold hover:underline"
            >
              Logout
            </button>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-sky-700 mb-6">
          Manage Your Books Smartly
        </h1>

        <p className="text-gray-600 mb-8">
          Organize and manage your book collection easily.
        </p>

        <button
          onClick={() => navigate("#features")}
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg"
        >
          Explore Features
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">

          {/* Add Book */}
          <div className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-sky-600 mb-4">
              Add Books
            </h3>

            <p className="text-gray-600 mb-4">
              Add new books with title, author and category.
            </p>

            <button
              onClick={() => navigate("/addbook")}
              className="bg-sky-500 text-white px-4 py-2 rounded"
            >
              Add Book
            </button>
          </div>

          {/* View Books */}
          <div className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-sky-600 mb-4">
              View Collection
            </h3>

            <p className="text-gray-600 mb-4">
              View all the books you have added.
            </p>

            <button
              onClick={() => navigate("/viewbooks")}
              className="bg-sky-500 text-white px-4 py-2 rounded"
            >
              View Books
            </button>
          </div>


          <div className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-sky-600 mb-4">
              Edit & Delete
            </h3>

            <p className="text-gray-600 mb-4">
              Update or delete books anytime.
            </p>

            <button
              onClick={() => navigate("/deletebook")}
              className="bg-sky-500 text-white px-4 py-2 rounded"
            >
              Delete Books
            </button>
          </div>


          <div className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-sky-600 mb-4">
               Delete
            </h3>

            <p className="text-gray-600 mb-4">
              Delete books.
            </p>

            <button
              onClick={() => navigate("/updatebook")}
              className="bg-sky-500 text-white px-4 py-2 rounded"
            >
              Manage Books
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;

