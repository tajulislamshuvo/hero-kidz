import { getCart } from '@/actions/server/cart';
import CartItem from '@/components/cardds/CartItem';
import Cart from '@/components/home/Cart';
import React from 'react';

const CartPage = async () => {
  const cartItem = await getCart();
  const formatedCart = cartItem.map(item => ({ ...item, _id: item._id.toString() }))
  console.log(cartItem)
  return (
    <div>

      <div className=''>
        <div className=''>
          <Cart cartItem={formatedCart}></Cart>
        </div>

        {/* <div className="flex-1"></div> */}
      </div>
    </div>
  );
};

export default CartPage;