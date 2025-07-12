import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Signin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:8000/api/token/', formData);
      const { access, refresh } = response.data;

      // Store tokens
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // Redirect to dashboard
      login(response.data);
      navigate('/dashboard');
    } catch (err) {
      if (err.response?.data) {
        setError('Invalid credentials');
      } else {
        setError('Something went wrong.');
      }
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 h-screen justify-center items-center gap-2">
      <div className="flex flex-col text-center px-5 py-8 bg-gray-100 border border-slate-300 min-w-96 rounded-lg">
        <h1 className="font-bold mb-1 text-3xl">Sign In</h1>
        <br />
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col m-2 text-left">
            <label htmlFor="username" className="mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="rounded p-1 mb-7 border border-gray-300"
              placeholder="Enter Username"
              required
            />

            <label htmlFor="password" className="mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded p-1 mb-7 border border-gray-300"
              placeholder="Enter Password"
              required
            />

            {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

            <button
              type="submit"
              className="border hover:scale-105 transition duration-200 font-bold hover:bg-slate-50 hover:border hover:border-black hover:text-black px-5 py-2 text-white rounded-md bg-black"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-row justify-center px-5 py-8 bg-gray-100 min-w-96 rounded-lg border border-slate-300">
        <p>New to DealScope? </p>
        <Link to="/signup" className="ml-1 text-blue-600">Create an account</Link>
      </div>
    </div>
  );
}
