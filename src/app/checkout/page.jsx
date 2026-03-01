import { getCart } from '@/actions/server/cart';
import Checkout from '@/components/home/Checkout';
import React from 'react';

const checkout = async () => {
  const cartItems = await getCart();
  const formatedItems = cartItems.map((item) => ({ ...item, _id: item._id.toString(), }))
  return (
    <div>
      <div className="">
        <h2 className='text-4xl py-4 font-bold border-l-12 border-primary pl-3'>CheckOut</h2>
      </div>

      <Checkout cartItems={formatedItems}></Checkout>
    </div>
  );
};

export default checkout;