import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Dashboard() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showScroll, setShowScroll] = useState(false); // State for scroll button visibility

    const handleScrape = async () => {
        setLoading(true);
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
            setResults(data || []);
            setError("");
            console.log(data);
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleScrape();
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-fit w-auto">
            <div className="text-center">
                <h1 className="text-5xl font-semibold mb-9">DealScope</h1>
                <input 
                    type="search" 
                    name="product" 
                    id="product" 
                    placeholder="Search for Product" 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                    onKeyDown={handleKeyDown} // Add this line
                    className="sm:w-full mb-4 lg:w-[1000px] px-2 py-4 border border-gray-300 rounded-lg mr-2 bg-gray-50 focus:bg-transparent" 
                />
                <button type="button" onClick={handleScrape} className="text-white text-xl font-bold bg-black py-3 w-52 rounded-lg border transition duration-100 hover:border-black hover:bg-white hover:text-black" disabled={loading}>Submit</button>
                {loading && <p className="text-black">Loading...</p>}
                <ul className="grid grid-cols-3">
                    {error && <li className="text-red-500">{error}</li>}
                    {results.length === 0 && !loading && <li className="text-gray-500 text-center">No results found.</li>}
                    {Array.isArray(results) && results.map((result, index) => (
                        <Card
                            url={result.url}
                            img={result.img}
                            product_name={result.product_name}
                            price={result.price}
                            platform={result.site}
                            key={index}
                        />
                    ))}
                </ul>
                
                {showScroll && (
                    <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-black text-white py-3 px-6 font-bold rounded-full">
                        ↑
                    </button>
                )}
            </div>
        </div>
    );
}