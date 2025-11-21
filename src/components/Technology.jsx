import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import Card from "./Card";
import axios from "axios";

export default function Technology({ apiKey }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchNews() {
            try {
                const res = await axios.get(
                    `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&category=technology`
                );

                setData(res.data.results); // ✅ Correct key
            } catch (err) {
                console.error("Error fetching news:", err);
                setError("Failed to load news. Check your API key.");
            }
        }
        fetchNews();
    }, [apiKey]);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-10 px-4">
                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {data.map((item, i) => (
                        <Card key={i} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
