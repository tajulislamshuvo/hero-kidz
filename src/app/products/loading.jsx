import ProductSkeleton from '@/components/skeleton/ProductSkeleton';
import React from 'react';

const loading = () => {
  return (
    <div className='grid grid-cols-1 w-[11/12] p-3.5 mx-auto sm:grid-cols-2 md:grid-cols-4 gap-9'>
      {
        [...Array(9)].map((_, index) =>
          <ProductSkeleton key={index}></ProductSkeleton>
        )
      }
    </div>
  );
};

export default loading;