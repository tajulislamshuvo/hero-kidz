"use server"

import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";

const { dbConnect, collections } = require("@/lib/dbConnect")

const orderCollection = dbConnect(collections.ORDER);

export const createOrder = async (payload) => {
  const { user } = await getServerSession(authOptions);
  if (!user) return { success: false };

  const cart = await getCart();
  if (cart.length == 0) {
    return { success: false };
  }

  const payLoad = {
    createdAt: new Date().toISOString(),
    ...payload,
    items: cart
  }

  const result = await orderCollection.insertOne(payLoad);

  if (Boolean(result.insertedId)) {
    const result = await clearCart()
  }

  return {
    success: result.insertedId
  }

}