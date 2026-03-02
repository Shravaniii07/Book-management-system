import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // ✅ Check login status on load
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const handleFeatureClick = () => {
    if (!isLoggedIn) {
      setShowModal(true);
    } else {
      alert("Feature Access Granted!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-sky-50">
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
      <>
        <span
          onClick={() => alert("Feature Access Granted!")}
          className="cursor-pointer hover:text-sky-600"
        >
          Features
        </span>

        <button
          onClick={handleLogout}
          className="text-red-500 font-semibold hover:underline"
        >
          Logout
        </button>
      </>
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
          onClick={handleFeatureClick}
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg"
        >
          Explore Features
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
          {["Add Books", "View Collection", "Edit & Delete"].map(
            (feature, index) => (
              <div
                key={index}
                className="bg-sky-50 p-8 rounded-xl shadow-md text-center"
              >
                <h3 className="text-xl font-semibold text-sky-600 mb-4">
                  {feature}
                </h3>

                <button
                  onClick={handleFeatureClick}
                  className="bg-sky-500 text-white px-4 py-2 rounded"
                >
                  Use
                </button>
              </div>
            )
          )}
        </div>
      </section>

      {/* LOGIN REQUIRED MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center w-80">
            <h3 className="text-xl font-bold text-sky-700 mb-4">
              Login Required 🔒
            </h3>

            <p className="text-gray-600 mb-6">
              Please login or create an account to access this feature.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/login")}
                className="bg-sky-500 text-white px-4 py-2 rounded"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="border border-sky-500 text-sky-600 px-4 py-2 rounded"
              >
                Sign Up
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 text-gray-500 text-sm hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;


// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Home() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const status = localStorage.getItem("isLoggedIn");
//     if (status === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   const handleFeatureClick = () => {
//     if (!isLoggedIn) {
//       navigate("/login");
//     } else {
//       alert("Feature Access Granted!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-sky-50">

//       {/* Navbar */}
//       <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-sky-700">📚 BookManager</h2>

//         <div className="space-x-6 font-medium text-gray-600">
//           <a href="#home" className="hover:text-sky-600">Home</a>
//           <a href="#features" className="hover:text-sky-600">Features</a>
//           <a href="#about" className="hover:text-sky-600">About</a>
//           <a href="#contact" className="hover:text-sky-600">Contact</a>

//           {!isLoggedIn ? (
//             <>
//               <button
//                 onClick={() => navigate("/login")}
//                 className="text-sky-600 hover:underline"
//               >
//                 Login
//               </button>

//               <button
//                 onClick={() => navigate("/signup")}
//                 className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1 rounded"
//               >
//                 Sign Up
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="py-20 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-6">
//           Manage Your Books Smartly
//         </h1>

//         <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
//           A modern digital solution to organize, track and manage your book collection efficiently.
//         </p>

//         <button
//           onClick={handleFeatureClick}
//           className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg shadow-md transition duration-300"
//         >
//           Explore Features
//         </button>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-white px-8">
//         <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">
//           Our Features
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

//           <div className="bg-sky-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold text-sky-600 mb-4">
//               ➕ Add Books
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Add new books with complete details.
//             </p>
//             <button
//               onClick={handleFeatureClick}
//               className="bg-sky-500 text-white px-4 py-2 rounded"
//             >
//               Use
//             </button>
//           </div>

//           <div className="bg-sky-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold text-sky-600 mb-4">
//               📖 View Collection
//             </h3>
//             <p className="text-gray-600 mb-4">
//               View all your saved books in structured format.
//             </p>
//             <button
//               onClick={handleFeatureClick}
//               className="bg-sky-500 text-white px-4 py-2 rounded"
//             >
//               Use
//             </button>
//           </div>

//           <div className="bg-sky-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-semibold text-sky-600 mb-4">
//               ✏ Edit & Delete
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Modify or remove books anytime.
//             </p>
//             <button
//               onClick={handleFeatureClick}
//               className="bg-sky-500 text-white px-4 py-2 rounded"
//             >
//               Use
//             </button>
//           </div>

//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 px-8 text-center">
//         <h2 className="text-3xl font-bold text-sky-700 mb-6">
//           About Us
//         </h2>
//         <p className="text-gray-600 max-w-3xl mx-auto">
//           Book Management System is a web-based application built using React, Node.js and MongoDB.
//           It helps users manage their books digitally with secure authentication and easy CRUD operations.
//         </p>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-sky-100 px-8 text-center">
//         <h2 className="text-3xl font-bold text-sky-700 mb-6">
//           Contact Us
//         </h2>
//         <p className="text-gray-600 mb-4">
//           📧 Email: support@bookmanager.com
//         </p>
//         <p className="text-gray-600">
//           📞 Phone: +91 9876543210
//         </p>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white py-6 text-center text-gray-500">
//         © 2026 BookManager. All Rights Reserved.
//       </footer>

//     </div>
//   );
// }

// export default Home;



