import { Link } from "react-router-dom";

export default function Navbar(){
    return(
            <div className="border-b flex justify-center border-slate-400 fixed w-screen z-10 bg-white">
                <div className="flex container h-14 font-mono font-semibold items-center justify-between px-6">
                    <Link to='/dashboard' className="text-2xl font-roboto cursor-pointer hover:scale-105 hover:bg-stone-900 hover:text-gray-50 px-3 py-1 rounded transition duration-200 ease-in-out">
                        DealScope
                    </Link>
                    <nav className="gap-6 text-slate-600 flex text-lg ">
                        <Link to='/' className="active:text-black hover:text-black">Home</Link>
                        <Link to='/about' className="active:text-black hover:text-black">About</Link>
                    </nav>            
                    <div className="gap-4 flex">
                        <Link to='/signin' className="border hover:scale-105 transition duration-200 px-3 py-1 rounded-md border-slate-400">Sign in</Link>
                        <Link to='/signup' className="border hover:scale-105 transition duration-200 px-3 py-1 text-white rounded-md bg-black border-white">Sign Up</Link>
                    </div>
                </div>
            </div>
    );
}