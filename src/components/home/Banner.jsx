import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='flex justify-between flex-col-reverse md:flex-row items-center mx-auto'>
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h2 className={`${fontBangla.className}  text-5xl font-bold leading-16`}>
          আপনার শিশুকে দিন একটি{" "}
          <span className="text-primary">সুন্দর ভবিষ্যত</span>
        </h2>
        <p className=''>Buy Every toy with up to 15% discount</p>
        <button className='btn btn-primary btn-outline '>Explore Product</button>
      </div>
      <div className="flex-1 ">
        <Image alt='Buy Every toy with up to 15% discount' src={"/assets/hero.png"} height={400} width={500}>

        </Image>
      </div>
    </div>
  );
};

export default Banner;