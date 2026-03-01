"use client"
import { usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react';
import { BsCartPlus } from 'react-icons/bs';

const CardCartButton = () => {
  const router = useRouter();
  const isLogin = false;
  const path = usePathname()
  console.log("router", router, "path", path)


  const add2cart = () => {
    console.log('hi')
    if (isLogin) {
      alert("hi")
    } else {
      router.push(`/login?callbackUrl=${path}`)
    }
  }
  return (
    <button onClick={add2cart} className="btn btn-primary w-full gap-2 text-base normal-case group-hover:btn-active transition-colors">
      <BsCartPlus className="text-xl" />
      Add to Cart
    </button>
  );
};

export default CardCartButton;