"use client";

import { decreaseItemDB, deleteItemsFromCart, increaseItemDB } from "@/actions/server/cart";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function CartItem({ item, removeItem, updateQuantity }) {
  const { image, title, quantity, price, _id } = item;
  const [loading, setLoading] = useState(false)

  const subtotal = quantity * price;
  const handleRemoveCart = async () => {
    setLoading(true)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemsFromCart(_id)

        if (result.success) {
          removeItem(_id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Opps",
            text: "Something went wrong",
            icon: "Error"
          });
        }

      }
      setLoading(false)
    });
  }

  const onIncrease = async () => {
    setLoading(true)
    const result = await increaseItemDB(_id, quantity);
    if (result.success) {
      Swal.fire("success", "Quantity increased", "success")
      updateQuantity(_id, quantity + 1)
    } else {
      Swal.fire("error", `${result.message}`, "error")
    }
    setLoading(false)
  }

  const onDecrease = async () => {
    setLoading(true)
    const result = await decreaseItemDB(_id, quantity);
    if (result.success) {
      Swal.fire("success", "Quantity decreased", "success")
      updateQuantity(_id, quantity - 1)
    } else {
      Swal.fire("error", `${result.message}`, "error")
    }
    setLoading(false)
  }
  return (
    <div className="flex items-center gap-4 border rounded-xl p-4 shadow-sm bg-white">

      {/* Product Image */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        {/* Single Price */}
        <p className="text-sm text-gray-500 mt-1">
          Price: ৳ {price}
        </p>

        {/* Subtotal */}
        <p className="text-primary font-bold mt-1">
          Subtotal: ৳ {subtotal}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => onDecrease()}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
            disabled={quantity === 1 || loading}
          >
            <FaMinus size={12} />
          </button>

          <span className="font-medium text-gray-700">
            {quantity}
          </span>

          <button
            onClick={() => onIncrease()}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
            disabled={quantity === 10 || loading}
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => handleRemoveCart(item)}
        className="text-red-500 hover:text-red-600"
      >
        <FaTrash size={18} />
      </button>
    </div>);
}