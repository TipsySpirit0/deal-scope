import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b justify-center flex font-roboto border-slate-400 bg-white sticky top-0 z-10">
      <div className="flex justify-between container px-6 h-14 font-mono font-semibold items-center">
        <Link
          to="/dashboard"
          className="flex gap-1 font-roboto text-base md:text-lg lg:text-2xl cursor-pointer hover:scale-105 hover:bg-stone-900 hover:text-gray-50 px-3 py-[6px] rounded-md transition duration-200 ease-in-out"
        >
          <FaShoppingBag />
          DealScope
        </Link>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="m-4 text-2xl" />
        ) : (
          <FaBars className="m-4 text-2xl" />
        )}
      </div>
      <nav
        className={`gap-6 mr-4 flex items-center text-center ${
          isMenuOpen
            ? "flex-col absolute bg-white w-full top-14 left-0"
            : "hidden md:flex"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `border-b-2 ${
              isActive ? "border-black" : "border-transparent"
            } hover:border-b-black h-fit font-roboto`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `border-b-2 ${
              isActive ? "border-black" : "border-transparent"
            } hover:border-b-black h-fit font-roboto`
          }
        >
          About
        </NavLink>
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="border hover:scale-105 transition duration-200 px-3 py-1 text-white rounded-md bg-black border-white"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-2 w-44">
            <Link
              to="/signin"
              className="border hover:scale-105 transition duration-200 px-3 py-1 rounded-md border-slate-400"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="border hover:scale-105 transition duration-200 px-3 py-1 text-white rounded-md bg-black border-white"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
