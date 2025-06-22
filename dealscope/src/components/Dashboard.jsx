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
        <div className="flex justify-center items-center h-fit w-auto">
            <div className="text-center">
                <h1 className="text-5xl font-semibold mb-9">DealScope</h1>
                <input type="search" name="product" id="product" placeholder="Search for Product" value={keyword} onChange={(e)=>setKeyword(e.target.value)} className="sm:w-full mb-4 lg:w-[1000px] px-2 py-4 border border-gray-300 rounded-lg mr-2 bg-gray-50 focus:bg-transparent"/>
                <button type="button" onClick={handleScrape} className="text-white text-xl font-bold bg-black py-3 w-52 rounded-lg border transition duration-100 hover:border-black hover:bg-white hover:text-black" disabled={loading}>Submit</button>
                {loading && <p className="text-blue-500">Loading...</p>} {/* Show loading message */}
                <ul className="grid grid-cols-3">
                    {error && <li className="text-red-500">{error}</li>}
                    {results.length === 0 && !loading && <li className="text-gray-500">No results found.</li>}
                    {Array.isArray(results) && results.map((result, index) => (

                        <Card
                        url={result.url}
                        img={result.img}
                        product_name={result.product_name}
                        price={result.price}
                        platform={result.site}
                        key={index} // Use index as key for simplicity, but ideally use a unique identifier
                        />
                    ))}
                </ul>

            </div>
        </div>
    );
}