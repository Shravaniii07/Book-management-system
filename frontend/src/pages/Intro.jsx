import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pink/80">
      
      {/* Background Image */}
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-stack-of-books-in-a-library-with-blurred-bookshelves-background-image_16181415.jpg"
        alt="Books Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Light Blue Overlay */}
      <div className="absolute inset-0 bg-blue-200/60"></div>

      {/* Content */}
      <div className="relative bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-2xl text-center max-w-2xl">
        
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          📚 Book Management System
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          Organize, track and manage your books effortlessly.
          A smart and simple way to handle your library digitally.
        </p>

      <Link to="/home">
  <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg">
    Get Started
  </button>
</Link>
      
        {/* <div className="flex justify-center gap-6">
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition duration-300">
              Login
            </button>
          </Link>
        </div> */}

      </div>
    </div>
  );
}

export default Intro;