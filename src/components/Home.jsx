import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { IoStatsChart } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="font-roboto">
            <section className="flex flex-col font-mono items-center justify-center w-full bg-gradient-to-b from-slate-50 to-gray-100 py-40 text-center">
                <div className=" space-y-2">
                    <h1 className="font-mono text-6xl font-bold tracking-tighter">Find the Best Deals Across the Web</h1>
                    <p className="mx-auto max-w-[700px] text-xl tracking-tight text-slate-500">Compare prices from various retailers and get personalized recommendations</p>
                </div>
                <br />
                <Link to='/dashboard' className="bg-black border hover:bg-slate-50 hover:font-bold hover:text-black scale-105 transition ease-in-out duration-200 hover:border-black text-white rounded-md px-4 py-3 my-3">Get started</Link>
            </section>
            <section className="flex flex-col font-mono items-center justify-center w-full py-28 text-center">
                <h1 className="text-4xl font-mono font-bold tracking-tight">How It Works</h1>
                <p className="text-lg max-w-[700px] tracking-tight text-slate-500">Our advanced web scraping technology finds you the best deals in real-time</p>
                <br />
                <div className=" flex flex-row justify-between gap-16">
                    <div className="my-6 flex flex-col hover:scale-105 transition ease-in-out duration-200 items-center max-w-[250px] p-5 hover:border hover:border-slate-500 rounded-lg">
                        <div className="p-6 max-w-fit flex justify-center bg-gray-300 rounded-full">
                            <FaSearch />
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">Search</h1>
                        <p className="text-slate-500">Enter what you're looking for and our system will start searching across hundreds of retailers</p>
                    </div>

                    <div className="my-6 flex flex-col hover:scale-105 transition ease-in-out duration-200 items-center max-w-[250px] p-5 hover:border hover:border-slate-500 rounded-lg">
                        <div className="p-6 max-w-fit flex justify-center bg-gray-300 rounded-full">
                            <IoStatsChart />
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">Compare</h1>
                        <p className="text-slate-500">We analyze prices, shipping costs, and seller ratings to find you the best overall value</p>
                    </div>
                    
                    <div className="my-6 flex flex-col hover:scale-105 transition ease-in-out duration-200 items-center max-w-[250px] p-5 hover:border hover:border-slate-500 rounded-lg">
                        <div className="p-6 max-w-fit flex justify-center bg-gray-300 rounded-full">
                            <FaSave />
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">Save</h1>
                        <p className="text-slate-500">Get personalized recommendations based on your preferences and purchase history</p>
                    </div>
                </div>
            </section>
            <section></section>
        </div>  
    );
}