import { getSingleProduct } from '@/actions/server/product';
import CartButton from '@/components/buttons/CartButton';
import Image from 'next/image';
import React from 'react';

export async function generateMetadata({ params }) {
  const { id } = await params
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Hero Kidz",
    };
  }

  const productUrl = `https://herokidz.com/products/${product._id}`;

  return {
    title: `${product.title} | Hero Kidz`,
    description: product.description?.slice(0, 160),

    alternates: {
      canonical: productUrl,
    },

    openGraph: {
      type: "website",
      url: productUrl,
      title: product.title,
      description: product.description?.slice(0, 160),
      siteName: "Hero Kidz",
      images: [
        {
          url: product.image, // must be full URL
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description?.slice(0, 160),
      images: [product.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const ProductDetailes = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;



  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          {/* <img
            
            className="rounded-2xl shadow-lg w-full"
          /> */}
          <Image
            src={product.image}
            alt={product.title} width={600} height={420} className='rounded-2xl shadow-lg w-full'></Image>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.bangla}</p>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-2xl font-bold text-green-600">
              ৳{discountedPrice}
            </span>
            <span className="line-through text-gray-400">
              ৳{product.price}
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              {product.discount}% OFF
            </span>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            ⭐ {product.ratings} | {product.reviews} Reviews | Sold:{" "}
            {product.sold}
          </div>

          <div className='w-9/12 md:w-6/12'>
            <CartButton product={product}></CartButton>
          </div>



          {/* Features */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Key Features:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {product.info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {product.description}
        </p>
      </div>

      {/* Q&A Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Q & A</h2>
        <div className="space-y-4">
          {product.qna.map((item, index) => (
            <div key={index} className="border p-4 rounded-xl">
              <p className="font-semibold">Q: {item.question}</p>
              <p className="text-gray-600 mt-2">A: {item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;