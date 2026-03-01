import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-300 h-96 rounded-2xl"></div>

        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2 mt-6"></div>

          <div className="space-y-2 mt-6">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
