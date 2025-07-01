import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { IoStatsChart } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="font-roboto">
            <section className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-slate-50 to-gray-100 py-60 pb-52 text-center">
                <div className=" space-y-2">
                    <h1 className="font-roboto text-6xl font-bold">Find the Best Deals Across the Web</h1>
                    <p className="mx-auto max-w-[700px] text-xl text-slate-500">Compare prices. Shop smarter. Save money.</p>
                </div>
                <Link to='/dashboard' className="bg-black font-roboto border hover:bg-slate-50 font-bold hover:text-black scale-105 transition ease-in-out duration-200 hover:border-black text-white rounded-md px-4 py-3 my-3">Get started</Link>
            </section>
            <section className="flex flex-col items-center justify-center w-full py-32 text-center">
                <h1 className="text-4xl font-roboto font-bold">How It Works</h1>
                <p className="text-lg max-w-[700px] text-slate-500">Our advanced web scraping technology finds you the best deals in real-time</p>
                <br />
                <div className=" flex lg:flex-row sm:flex-col justify-between gap-16">
                    <div className="my-5 flex flex-col hover:scale-105 transition ease-in-out duration-200 items-center max-w-[250px] p-5 hover:border hover:border-slate-500 rounded-lg">
                        <div className="p-6 max-w-fit flex justify-center bg-gray-300 rounded-full">
                            <FaSearch />
                        </div>
                        <h1 className="text-2xl font-semibold">Search</h1>
                        <p className="text-slate-500">Enter what you're looking for and our system will start searching across multiple retailers</p>
                    </div>

                    <div className="my-5 flex flex-col hover:scale-105 transition ease-in-out duration-200 items-center max-w-[250px] p-5 hover:border hover:border-slate-500 rounded-lg">
                        <div className="p-6 max-w-fit flex justify-center bg-gray-300 rounded-full">
                            <IoStatsChart />
                        </div>
                        <h1 className="text-2xl font-semibold">Compare</h1>
                        <p className="text-slate-500">We get product information such as product price to make it easier for you to compare</p>
                    </div>
                    
                    {/* <div className="my-5 flex flex-col hover:scale-105 transition ease-in-out duration-200 items-center max-w-[250px] p-5 hover:border hover:border-slate-500 rounded-lg">
                        <div className="p-6 max-w-fit flex justify-center bg-gray-300 rounded-full">
                            <FaSave />
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">Save</h1>
                        <p className="text-slate-500">Get personalized recommendations based on your preferences and purchase history</p>
                    </div> */}
                </div>
            </section>
            <section></section>
        </div>  
    );
}