import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const ScrapedDataView = () => {
  const [scrapedData, setScrapedData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.products.map((item) => ({
          url: `https://example.com/${item.title.toLowerCase().replace(/\s+/g, "-")}`,
          status: Math.random() > 0.5 ? "Scraped" : "Pending", // Random status
        }));
        setScrapedData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="flex justify-center items-center text-3xl text-gray-600 mt-6">Loading scraped data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center registration-container h-[600px] bg-gray-100 p-4">
      <div className="w-full max-w-md  p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Scraped Web Pages</h2>
        <div className="space-y-4">
          {scrapedData.map((page, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 truncate text-sm sm:text-base mb-2 sm:mb-0">{page.url}</span>
              <Button
                variant={page.status === "Scraped" ? "primary" : "secondary"}
                className="w-full sm:w-auto"
                onClick={() => setSelectedPage(page.url)}
              >
                {page.status}
              </Button>
            </div>
          ))}
        </div>
        <Button onClick={() => navigate("/chatbot-integration")} className="w-full mt-6 hover-scale">
          Next
        </Button>
      </div>

      {selectedPage && (
        <div className="w-full max-w-md mt-0 p-2 bg-white rounded-lg shadow-md">
          <h3 className="text-sm font-semibold">Scraped Data from {selectedPage}</h3>
          <p className="text-sm text-gray-600">Here are the extracted chunks...</p>
        </div>
      )}
    </div>
  );
};

export default ScrapedDataView;