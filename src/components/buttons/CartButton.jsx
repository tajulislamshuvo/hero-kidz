"use client"
import { handleCart } from '@/actions/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartButton = ({ product }) => {
  const [isLoading, setIsLoading] = useState();
  const session = useSession()
  const router = useRouter();
  const isLogin = session?.status == "authenticated";
  const path = usePathname()
  console.log("router", router, "path", path)


  const add2cart = async () => {
    setIsLoading(true)
    if (isLogin) {
      console.log({ product, inc: true })
      const result = await handleCart({ product, inc: true })
      if (result.success) {
        Swal.fire("Added to cart", product?.title, "success")
        setIsLoading(false)
      } else {
        Swal.fire("Opps", "something went wrong", "error")

      }
    } else {
      router.push(`/login?callbackUrl=${path}`)
      setIsLoading(false)
    }
  }
  return (
    <div className='w-full'>
      <button
        disabled={session.loading == "loading" || isLoading}
        onClick={add2cart} className="mt-6 btn btn-primary px-15 py-3  shadow-md hover:bg-orange-700 transition flex w-full">
        <FaCartPlus></FaCartPlus>
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;