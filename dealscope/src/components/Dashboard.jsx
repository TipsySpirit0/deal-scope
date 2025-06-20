import React, { useState } from "react";
import Card from "./Card";
export default function Dashboard(){
const [keyword, setKeyword] = useState("");
const [results, setResults] = useState([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false); // Add loading state

    const handleScrape = async () => {
        setLoading(true); // Set loading to true when the request starts
        try {
            const response = await fetch("http://127.0.0.1:8000/api/scrapers/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ keyword }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error || "Something went wrong");
                return;
            }

            const data = await response.json();
            setResults(data || []); // Update results with the fetched data
            setError(""); // Clear any previous errors
            console.log(data); // Log the results to the console for debugging
            
        } catch (err) {
            console.error("Fetch error:", err); // Log the error to the console
            setError("Failed to fetch data");
        } finally {
            setLoading(false); // Set loading to false when the request is complete
        }
    };
    return(
        <div className="flex justify-center items-center bg-slate-50 h-fit w-auto">
            <div className="text-center">
                <h1 className="text-5xl font-semibold mb-9">DealScope</h1>
                <input type="search" name="product" id="product" placeholder="Search for Product" value={keyword} onChange={(e)=>setKeyword(e.target.value)} className="inline sm:w-full lg:w-[1000px] rounded-md border border-gray-300 bg-white py-4 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"/>
                <button type="button" onClick={handleScrape} className="text-white text-xl font-bold bg-black py-3 w-52 rounded-lg border hover:border-black hover:bg-white hover:text-black" disabled={loading}>Submit</button>
                {loading && <p className="text-blue-500">Loading...</p>} {/* Show loading message */}
                <ul className="grid grid-cols-3">
                    {error && <li className="text-red-500">{error}</li>}
                    {results.length === 0 && !loading && <li className="text-gray-500">No results found.</li>}
                    {Array.isArray(results) && results.map((result, index) => (
                        // <li key={index} className="mt-2 grid grid-cols-2">
                        //     <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-black flex border-black border rounded-xl w-[500px] h-[250px] gap-3 items-center p-2">
                                
                        //             <img src={result.img} alt="" className="w-fit h-full" />
                        //             <div className="flex flex-col">
                        //                 <h2 className="text-xl font-bold">{result.product_name}</h2>
                        //                 <p>{result.price}</p>
                        //             </div>
                                
                        //     </a>
                        // </li>
                        <Card
                        url={result.url}
                        img={result.img}
                        product_name={result.product_name}
                        price={result.price}
                        key={index} // Use index as key for simplicity, but ideally use a unique identifier
                        />
                    ))}
                </ul>

            </div>
        </div>
    );
}