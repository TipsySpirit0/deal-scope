import { NavLink, Link } from "react-router-dom";

export default function Navbar(){
    return(
            <div className="border-b flex justify-center font-roboto border-slate-400 fixed w-screen z-10 bg-white">
                <div className="flex container h-14 font-mono font-semibold items-center justify-between px-6">
                    <Link to='/dashboard' className="font-roboto text-2xl cursor-pointer hover:scale-105 hover:bg-stone-900 hover:text-gray-50 px-3 py-1 rounded transition duration-200 ease-in-out">
                        DealScope
                    </Link>
                    <nav className="gap-6 flex text-lg ">
                        <NavLink to='/' className={({ isActive }) => `border-b-2 ${isActive ? 'border-black' : 'border-transparent'} hover:border-b-black`}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => `border-b-2 ${isActive ? 'border-black' : 'border-transparent'} hover:border-b-black`}>About</NavLink>
                    </nav>            
                    {/* <div className="gap-4 flex">
                        <Link to='/signin' className="border hover:scale-105 transition duration-200 px-3 py-1 rounded-md border-slate-400">Sign in</Link>
                        <Link to='/signup' className="border hover:scale-105 transition duration-200 px-3 py-1 text-white rounded-md bg-black border-white">Sign Up</Link>
                    </div> */}
                </div>
            </div>
    );
}