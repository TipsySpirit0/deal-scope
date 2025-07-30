import React, { useState, useEffect } from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";

export default function Compare() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(""); // New state for selected platform

  const handleScrape = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://deal-scope-7yha.onrender.com/api/scrapers/", {
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
    if (e.key === "Enter") {
      handleScrape();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filter results based on selected platform
  const filteredResults = selectedPlatform
    ? results.filter((result) => result.site === selectedPlatform)
    : results;

  return (
    <div className=" px-3 h-fit w-[100%]">
      <div className="text-center w-[100%] flex flex-col justify-center content-center items-center">
        <div className="p-3 flex items-center gap-2 w-[100%] justify-center flex-col md:flex-row">
          <input
            type="search"
            name="product"
            id="product"
            placeholder="Search for Product"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
            className="sm:w-full max-w-[75%] px-2 py-3 border border-gray-300 rounded-lg mr-2 bg-gray-50 appearance-none outline-none focus:border-gray-300 active:border-gray-300 focus:bg-gray-50"
          />
          <button
            type="button"
            onClick={handleScrape}
            className="text-white text-base md:text-xl font-bold bg-black border-2 py-2 px-4 rounded-lg border-black transition duration-100 hover:border-black hover:bg-white hover:text-black"
            disabled={loading}
          >
            Submit
          </button>
        </div>

        {/* Dropdown for platform selection */}
        <select
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="mb-4 appearance-none focus:outline-none"
        >
          <option value="">All Platforms</option>
          <option value="Jumia">Jumia</option>
          <option value="Slot">Slot</option>
          <option value="Jiji">Jiji</option>
          {/* Add more platforms as needed */}
        </select>

        {filteredResults.length === 0 && !loading && (
          <li className="text-gray-500">No results found.</li>
        )}

        {loading && <p className="text-black">Loading...</p>}
        <div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {error && <li className="text-red-500">{error}</li>}
            {Array.isArray(filteredResults) &&
              filteredResults.map((result, index) => (
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
        </div>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 bg-black text-white py-3 px-6 font-bold rounded-full"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
}
