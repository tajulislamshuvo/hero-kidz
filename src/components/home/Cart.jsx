"use client"
import React, { useMemo, useState } from 'react';
import CartItem from '../cardds/CartItem';
import Link from 'next/link';

const Cart = ({ cartItem = [] }) => {
  const [items, setItems] = useState(cartItem);
  const totalItems = useMemo(() => items.reduce((acm, item) => acm + item.quantity, 0), [items])

  const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items])

  const removeItem = (id) => {
    setItems((prevlue) => prevlue.filter(item => item._id != id))
  }

  const updateQuantity = (id, q) => {
    setItems((prevItems) => prevItems.map((item) => item._id == id ? { ...item, quantity: q } : item))
  }


  return (
    <div className="flex gap-8">

      {/* LEFT SIDE - Cart Items */}
      <div className="flex-[3] space-y-3.5">
        {items.map((item) => (
          <CartItem
            key={item._id.toString()}
            item={item}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      {/* RIGHT SIDE - Summary Card */}
      <div className="flex-[1]">
        <div className="border rounded-xl p-5 shadow-md bg-white sticky top-20">

          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>

          {/* Product List */}
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item._id} className="flex justify-between text-sm">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-gray-500">
                    {item.quantity} × ৳ {item.price}
                  </p>
                </div>
                <p className="font-medium">
                  ৳ {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t my-4"></div>

          {/* Total Items */}
          <div className="flex justify-between text-sm mb-2">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          {/* Total Price */}
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total Price</span>
            <span>৳ {totalPrice}</span>
          </div>

          {/* Confirm Button */}
          <Link href={"/checkout"} disabled={!items.length} className="w-full bg-primary btn text-white py-2 rounded-lg hover:opacity-90 transition">
            Confirm Order
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Cart;