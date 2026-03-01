import Link from 'next/link';
import React from 'react';
import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center space-y-5'>
      <BiSolidErrorAlt size={140} className='text-primary' />
      <h2 className='text-4xl font-bold'>Page not found </h2>
      <Link href={"/"} className='btn'>Back to home</Link>
    </div>
  );
};

export default Error404;