import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

      {/* Image Skeleton */}
      <div className="h-56 w-full bg-gray-300"></div>

      <div className="p-4 space-y-3">

        {/* Title */}
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Rating */}
        <div className="flex gap-2">
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="h-4 bg-gray-200 rounded w-10"></div>
        </div>

        {/* Sold */}
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>

        {/* Price */}
        <div className="flex gap-3">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
          <div className="h-6 bg-gray-200 rounded w-16"></div>
        </div>

        {/* Button */}
        <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;