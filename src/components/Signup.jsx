import { Link } from "react-router-dom";

export default function Signup(){
    return(
        <div className="flex flex-col bg-slate-50 h-screen justify-center items-center gap-2">
            <div className="flex flex-col text-center px-5 py-8 bg-gray-100 border border-slate-300 min-w-96 max-w-fit max-h-fit rounded-lg">
                <h1 className="font-bold mb-1 text-3xl">Sign Up</h1>
                <br />
                <div>
                    <form action="" className="flex flex-col m-2 text-left gap-3">
                        <input type="text" name="firstname" id="firstname" className="transition duration-200 rounded p-1 border border-gray-300" placeholder="Enter Firstname" required/>
                        <input type="text" name="surname" id="surname" className="transition duration-200 rounded p-1 border border-gray-300" placeholder="Enter Surname" required/>
                        <input type="email" name="email" id="email" className="transition duration-200 rounded p-1 border border-gray-300" placeholder="Enter Email" required/>
                        <input type="password" name="password" id="password" className="transition duration-200 rounded p-1 border border-gray-300" placeholder="Enter Password" required/>
                        <input type="password" name="repeat-password" id="repeat-password" className="transition duration-200 rounded p-1 border border-gray-300" placeholder="Repeat Password" required/>

                        <button type="submit" className="border transition duration-200 font-bold hover:bg-slate-50 hover:border hover:border-black hover:text-black px-5 py-2 text-white rounded-md bg-black">Create Account</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-row justify-center px-5 py-8 bg-gray-100 min-w-96 max-w-fit max-h-fit rounded-lg border border-slate-300">
                <p>Have an account?</p><br /><Link to="/signin" className="text-blue-600">Sign in</Link>
            </div>
        </div>
    );
}