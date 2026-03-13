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

return ( <div className="min-h-screen bg-sky-50 flex flex-col">




  {/* Hero Section */}
  <section className="py-24 text-center">
    <h1 className="text-5xl font-bold text-sky-700 mb-6">
      Welcome to BookManager 📚
    </h1>

    <p className="text-gray-600 mb-10 max-w-xl mx-auto">
      BookManager is a simple web application that helps you
      organize and manage your personal book collection easily.
      You can store details of books, update them when needed,
      and maintain your own digital library.
    </p>

    <button
      onClick={() => navigate("/dashboard")}
      className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg text-lg"
    >
      Open Dashboard
    </button>
  </section>


  {/* About Section */}
  <section className="bg-white py-16 px-8">
    <div className="max-w-5xl mx-auto text-center">

      <h2 className="text-3xl font-bold text-sky-700 mb-6">
        About BookManager
      </h2>

      <p className="text-gray-600 leading-relaxed">
        BookManager is designed to make book management simple and efficient.
        Instead of keeping track of books manually, users can store book
        details digitally and access them anytime. This application allows
        users to add new books, view their collection, update information,
        and remove books when necessary. It demonstrates the concept of
        CRUD operations (Create, Read, Update, Delete) in a web application.
      </p>

    </div>
  </section>


  {/* Footer */}
  <footer className="bg-gray-800 text-white text-center py-6 mt-auto">

    <p className="text-lg font-semibold">
      📚 BookManager
    </p>

    <p className="text-sm text-gray-300 mt-1">
      A simple CRUD web application built using React and Node.js
    </p>

    <p className="text-xs text-gray-400 mt-2">
      © 2026 BookManager | All Rights Reserved
    </p>

  </footer>

</div>

);
}

export default Home;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const status = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(status === "true");
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-sky-50">

//       {/* Navbar */}
//       <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
//         <h2
//           onClick={() => navigate("/")}
//           className="text-2xl font-bold text-sky-700 cursor-pointer"
//         >
//           📚 BookManager
//         </h2>

//         <div className="flex gap-6 items-center text-gray-700 font-medium">

//           <span
//             onClick={() => navigate("/home")}
//             className="cursor-pointer hover:text-sky-600"
//           >
//             Home
//           </span>

//           <span
//             onClick={() => navigate("/about")}
//             className="cursor-pointer hover:text-sky-600"
//           >
//             About
//           </span>

//           <span
//             onClick={() => navigate("/contact")}
//             className="cursor-pointer hover:text-sky-600"
//           >
//             Contact
//           </span>

//           {!isLoggedIn ? (
//             <>
//               <span
//                 onClick={() => navigate("/login")}
//                 className="cursor-pointer hover:text-sky-600"
//               >
//                 Login
//               </span>

//               <span
//                 onClick={() => navigate("/signup")}
//                 className="bg-sky-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-sky-600"
//               >
//                 Sign Up
//               </span>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="text-red-500 font-semibold hover:underline"
//             >
//               Logout
//             </button>
//           )}

//         </div>
//       </nav>

//       {/* Hero Section
//       <section className="py-20 text-center">
//         <h1 className="text-4xl font-bold text-sky-700 mb-6">
//           Manage Your Books Smartly
//         </h1>

//         <p className="text-gray-600 mb-8">
//           Organize and manage your book collection easily.
//         </p>

//         <button
//           onClick={() => navigate("#features")}
//           className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg"
//         >
//           Explore Features
//         </button>
//       </section> */}

//       {/* Hero Section */}
// <section className="py-24 text-center">

//   <h1 className="text-5xl font-bold text-sky-700 mb-6">
//     Welcome to BookManager 📚
//   </h1>

//   <p className="text-gray-600 mb-10 max-w-xl mx-auto">
//     BookManager helps you organize and manage your personal
//     book collection easily. Add books, view them anytime,
//     update information or remove books whenever needed.
//   </p>

//   <button
//     onClick={() => navigate("/dashboard")}
//     className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg text-lg"
//   >
//     Go To Dashboard
//   </button>

// </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-white">
//         <h2 className="text-3xl font-bold text-center text-sky-700 mb-10">
//           Our Features
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">

//           {/* Add Book */}
//           <div className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
//             <h3 className="text-xl font-semibold text-sky-600 mb-4">
//               Add Books
//             </h3>

//             <p className="text-gray-600 mb-4">
//               Add new books with title, author and category.
//             </p>

//             <button
//               onClick={() => navigate("/addbook")}
//               className="bg-sky-500 text-white px-4 py-2 rounded"
//             >
//               Add Book
//             </button>
//           </div>

//           {/* View Books */}
//           <div className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
//             <h3 className="text-xl font-semibold text-sky-600 mb-4">
//               View Collection
//             </h3>

//             <p className="text-gray-600 mb-4">
//               View all the books you have added.
//             </p>

//             <button
//               onClick={() => navigate("/viewbooks")}
//               className="bg-sky-500 text-white px-4 py-2 rounded"
//             >
//               View Books
//             </button>
//           </div>


//           <div className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
//             <h3 className="text-xl font-semibold text-sky-600 mb-4">
//               Edit & Delete
//             </h3>

//             <p className="text-gray-600 mb-4">
//               Update or delete books anytime.
//             </p>

//             <button
//               onClick={() => navigate("/deletebook")}
//               className="bg-sky-500 text-white px-4 py-2 rounded"
//             >
//               Delete Books
//             </button>
//           </div>


//           <div className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
//             <h3 className="text-xl font-semibold text-sky-600 mb-4">
//                Delete
//             </h3>

//             <p className="text-gray-600 mb-4">
//               Delete books.
//             </p>

//             <button
//               onClick={() => navigate("/updatebook")}
//               className="bg-sky-500 text-white px-4 py-2 rounded"
//             >
//               Manage Books
//             </button>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

// export default Home;

