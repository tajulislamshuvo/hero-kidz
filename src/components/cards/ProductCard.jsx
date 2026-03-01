// components/ProductCard.jsx
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaShoppingCart } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';
import Link from 'next/link';
import CartButton from '../buttons/CartButton';
import CardCartButton from '../buttons/CardCartButton';

export default function ProductCard({ product }) {
  // If no product and not loading → don't render
  if (!product) return null;

  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold, _id
  } = product || {};

  // Calculate discounted price
  const discountedPrice = discount > 0
    ? Math.round(price * (1 - discount / 100))
    : price;

  // Star rating logic
  const fullStars = Math.floor(ratings);
  const hasHalfStar = ratings % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200 rounded-xl overflow-hidden max-w-[320px] mx-auto group">
      {/* Image + Badge section */}
      <figure className="relative">

        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />

        {discount > 0 && (
          <div className="absolute top-3 left-3 badge badge-error text-white font-bold px-3 py-3 text-sm">
            -{discount}%
          </div>
        )}

      </figure>

      <div className="card-body p-4 pt-3">
        {/* Title */}

        <h2 className="card-title text-lg font-semibold line-clamp-2 min-h-[3rem]">
          {title}
          <div className="badge badge-outline badge-sm ml-2">শিক্ষামূলক</div>
        </h2>


        {/* Bangla subtitle */}

        <p className="text-base-content/70 text-sm mb-2 line-clamp-1">
          {bangla}
        </p>


        {/* Rating */}

        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center gap-1">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={`full-${i}`} className="text-yellow-500" />
            ))}

            {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}

            {[...Array(emptyStars)].map((_, i) => (
              <FaStar key={`empty-${i}`} className="text-gray-300" />
            ))}
          </div>
          <span className="text-sm font-medium">
            {ratings.toFixed(1)}
          </span>
          <span className="text-sm text-base-content/60">
            ({reviews})
          </span>
        </div>


        {/* Sold count */}

        <div className="text-sm text-base-content/70 mb-3">
          বিক্রি হয়েছে: <span className="font-semibold">{sold}</span> টি
        </div>


        {/* Price */}

        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="text-base-content/60 line-through text-lg">
              ৳{price}
            </span>
          )}
        </div>


        {/* Action Button */}
        <div className="card-actions">

          {/* <button className="btn btn-primary w-full gap-2 text-base normal-case group-hover:btn-active transition-colors">
            <BsCartPlus className="text-xl" />
            Add to Cart
          </button> */}
          {/* <CardCartButton></CardCartButton> */}
          <CartButton product={{ ...product, _id: _id.toString() }}></CartButton>
          {/* <CartButton></CartButton> */}
          <Link href={`/products/${_id}`} className=' w-full'>
            <button className="btn btn-primary btn-outline w-full gap-2 text-base normal-case group-hover:btn-active transition-colors">
              <BsCartPlus className="text-xl" />
              View detailes
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}