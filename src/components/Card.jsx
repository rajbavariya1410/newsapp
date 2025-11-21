import React from "react";

export default function Card({ item }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {item.description?.slice(0, 100)}...
        </p>
        <a
          href={item.link}
          target="_blank"
          className="text-blue-600 font-medium hover:underline"
        >
          Read More →
        </a>
        <p className="text-gray-400 text-xs mt-3">
          {new Date(item.pubDate).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
