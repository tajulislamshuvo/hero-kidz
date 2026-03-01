import React from 'react';
// import pruducts from '@/data/toys.json'
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/server/product';
import ProductSkeleton from '../skeleton/ProductSkeleton';

const Products = async () => {
  const products = await getProducts() || []
  return (
    <div>
      <h2 className='text-4xl font-bold mb-10 text-center'>Our products</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 px-2.5 mx-auto'>
        {
          products.map((product, index) => <ProductCard key={product.title} product={product}></ProductCard>)
        }
      </div>
      {/* <ProductSkeleton></ProductSkeleton> */}
    </div>
  );
};

export default Products;