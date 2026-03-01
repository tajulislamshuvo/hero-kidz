"use client"

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialButton = () => {
  const params = useSearchParams();
  console.log(params.get("callbackUrl") || "/")
  const handleSignIn = async () => {
    const result = await signIn("google", { redirect: "false", callbackUrl: params.get("callbackUrl") || "/" });
    if (result.ok) {
      Swal.fire("Success", "Welcome", "success")
    } else {
      Swal.fire("Error", "Sorry", "error")
    }
  }
  return (
    <div className='flex gap-3 mt-4'>
      <button onClick={handleSignIn} className='btn btn-outline btn-error flex-1'>
        <FaGoogle className='text-lg'></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialButton;