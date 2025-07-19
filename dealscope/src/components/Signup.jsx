import { Link } from "react-router-dom";
import { signup } from "../services/authService.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // <- Make sure this is defined
  const [success, setSuccess] = useState(null); // <- Optional success message

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register/",
        formData
      );
      setSuccess(response.data.message);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(JSON.stringify(err.response.data));
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 h-screen justify-center items-center gap-2">
      <div className="flex flex-col text-center px-5 py-8 bg-gray-100 border border-slate-300 min-w-56 md:min-w-96 max-w-fit max-h-fit rounded-lg">
        <h1 className="font-bold mb-1 text-3xl">Sign Up</h1>
        <br />
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col m-2 text-left gap-3"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="transition duration-200 rounded p-1 border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="transition duration-200 rounded p-1 border border-gray-300"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="transition duration-200 rounded p-1 border border-gray-300"
              required
            />

            <button
              type="submit"
              className="border transition duration-200 font-bold hover:bg-slate-50 hover:border hover:border-black hover:text-black px-5 py-2 text-white rounded-md bg-black"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-row justify-center px-5 py-8 bg-gray-100 min-w-60 md:min-w-96 max-w-fit max-h-fit rounded-lg border border-slate-300">
        <p>Have an account?</p>
        <br />
        <Link to="/signin" className="text-blue-600">
          Sign in
        </Link>
      </div>
    </div>
  );
}
