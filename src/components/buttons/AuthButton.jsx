"use client"

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthButton = () => {
  const session = useSession();
  console.log(session)
  return (
    <div>
      {
        session.status == "authenticated" ? <>
          <button className='btn btn-primary' onClick={() => signOut()}>LogOut</button>
        </> : <>

          <Link href={"/login"} className='btn btn-outline btn-primary'>LogIn</Link></>
      }
    </div>
  );
};

export default AuthButton;