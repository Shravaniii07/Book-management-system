import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    // Later you will connect backend here

    navigate("/home"); // Redirect to Home
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-8">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-sky-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

// //homepage addbook-form and fields as book.js
// displau book - 5 static findbook
// 
export default Signup;