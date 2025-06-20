import { Link } from "react-router-dom";

export default function Signin(){
    return(
        <div className="flex flex-col bg-slate-50 h-screen justify-center items-center gap-2">
            <div className="flex flex-col text-center px-5 py-8 bg-gray-100 border border-slate-300 min-w-96 max-w-fit max-h-fit rounded-lg">
                <h1 className="font-bold mb-1 text-3xl">Sign In</h1>
                <br />
                <div>
                    <form action="" className="flex flex-col m-2 text-left">
                        <label htmlFor="email" className="mb-1">Email</label>
                        <input type="email" name="email" id="email" className="hover:scale-105 transition duration-200 rounded p-1 mb-7 border border-gray-300" placeholder="Enter Email" required/>

                        <label htmlFor="password" className="mb-1">Password <Link to="" className="float-end">forgot password?</Link></label>
                        <input type="password" name="password" id="password" className="hover:scale-105 transition duration-200 rounded p-1 mb-7 border border-gray-300" placeholder="Enter Password" required/>

                        <button type="submit" className="border hover:scale-105 transition duration-200 font-bold hover:bg-slate-50 hover:border hover:border-black hover:text-black px-5 py-2 text-white rounded-md bg-black">Sign In</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-row justify-center px-5 py-8 bg-gray-100 min-w-96 max-w-fit max-h-fit rounded-lg border border-slate-300">
                <p>New to DealScope?</p><br /><Link to="/signup" className="text-blue-600">Create an account</Link>
            </div>
        </div>
    );
}