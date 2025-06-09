import { Link } from "react-router-dom";

export default function Signup(){
    return(
        <div className="flex flex-col bg-slate-50 h-screen justify-center items-center gap-2">
            <div className="flex flex-col text-center px-5 py-8 bg-gray-100 border border-slate-300 min-w-96 max-w-fit max-h-fit rounded-lg">
                <h1 className="font-bold mb-1 text-3xl">Sign Up</h1>
                <br />
                <div>
                    <form action="" className="flex flex-col m-2 text-left gap-2">
                        <input type="text" name="firstname" id="firstname" className="hover:scale-105 transition duration-200 rounded p-1 border border-gray-300" placeholder="Enter Firstname" required/>
                        <input type="text" name="surname" id="surname" className="hover:scale-105 transition duration-200 rounded p-1 border border-gray-300" placeholder="Enter Surname" required/>
                        <input type="email" name="email" id="email" className="hover:scale-105 transition duration-200 rounded p-1 border border-gray-300" placeholder="Enter Email" required/>
                        <input type="password" name="password" id="password" className="hover:scale-105 transition duration-200 rounded p-1 border border-gray-300" placeholder="Enter Password" required/>
                        <input type="password" name="repeat-password" id="repeat-password" className="hover:scale-105 transition duration-200 rounded p-1 border border-gray-300" placeholder="Repeat Password" required/>
                    </form>
                </div>
            </div>
        </div>
    );
}