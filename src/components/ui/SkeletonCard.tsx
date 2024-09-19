// components/ui/CardMovieSkeleton.tsx

import React from "react";

export default function CardMovieSkeleton() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg animate-pulse">
      <div className="w-full h-40 bg-gray-600 rounded-lg mb-4"></div>
      <div className="w-full h-6 bg-gray-600 rounded mb-2"></div>
      <div className="w-full h-4 bg-gray-600 rounded"></div>
    </div>
  );
}