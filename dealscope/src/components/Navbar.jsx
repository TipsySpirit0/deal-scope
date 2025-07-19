import React, { useContext } from "react";
import { NavLink, Link} from "react-router-dom";
import { AuthContext } from '../context/AuthContext.jsx';
import { FaShoppingBag } from "react-icons/fa";

export default function Navbar(){
    const { isAuthenticated, logout } = useContext(AuthContext);

    return(
            <div className="border-b justify-center flex font-roboto border-slate-400 w-auto bg-white sticky top-0 z-10">
                <div className="flex justify-between container w-[100%] px-6 h-14 font-mono font-semibold items-center">
                    <Link to='/dashboard' className="flex gap-1 font-roboto text-base md:text-lg lg:text-2xl cursor-pointer hover:scale-105 hover:bg-stone-900 hover:text-gray-50 px-3 py-[6px] rounded-md transition duration-200 ease-in-out">
                        <FaShoppingBag />
                        DealScope
                    </Link>
                    <nav className="gap-6 flex text-lg ">
                        <NavLink to='/' className={({ isActive }) => `border-b-2 ${isActive ? 'border-black' : 'border-transparent'} hover:border-b-black text-sm lg:text-base`}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => `border-b-2 ${isActive ? 'border-black' : 'border-transparent'} hover:border-b-black text-sm lg:text-base`}>About</NavLink>
                    </nav>

                    { isAuthenticated ? (
                        <div className="gap-4 flex">
                            <button onClick={logout} className="border hover:scale-105 transition duration-200 px-3 py-1 text-white md:text-sm sm:text-xs rounded-md bg-black border-white">Logout</button>  
                        </div>)
                        : (
                        <div className="gap-1 md:gap-2 lg:gap-4 flex">
                            <Link to='/signin' className="border hover:scale-105 transition duration-200 px-3 py-1 text-xs md:text-sm lg:text-base rounded-md border-slate-400">Sign in</Link>
                            <Link to='/signup' className="border hover:scale-105 transition duration-200 px-3 py-1 text-xs md:text-sm text-white lg:text-base rounded-md bg-black border-white">Sign Up</Link>
                        </div>)
                    }
                </div>
            </div>
    )
}