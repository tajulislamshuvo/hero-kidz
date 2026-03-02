"use client"
import { createOrder } from '@/actions/server/order';
import { useSession } from 'next-auth/react';
import React, { useMemo, useState } from 'react';
import Swal from 'sweetalert2';

const Checkout = ({ cartItems }) => {

  const session = useSession();
  console.log(session)
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   city: "",
  //   notes: "",
  // });

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const payload = {
      name: form.fullName.value,
      email: form.email.value,
      contact: form.phone.value,
      address: form.address.value,
      city: form.address.city,
      instruction: form.notes.value,
    };

    const result = await createOrder(payload)
    if (result.success) {
      Swal.fire("success", "Order created", "success")
    } else {
      Swal.fire("error", "Something went wrong", "error")
    }
    console.log("Order Data:", { payload, cartItems });
  };

  if (session.status == "loading") {
    return <h2>Loading....</h2>
  }

  return (
    <div>
      <div className='flex flex-col-reverse md:flex-col  lg:flex-row gap-10 '>
        <div className="flex-2 shadow-2xl p-4 m-5">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className='md:flex gap-2.5 space-y-5 md:space-y-0'>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={session?.data?.user?.name}

                required
                readOnly

                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={session?.data?.email}
                // onChange={handleChange}
                readOnly
                required
                className="w-full border p-3 rounded-lg"
              />

            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"


              required
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="address"
              placeholder="Full Address"


              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="city"
              placeholder="City"


              required
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="notes"
              placeholder="Order Notes (Optional)"


              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Check out with cash on delivery
            </button>
          </form>
        </div>
        <div className="flex-1">
          <div className="border rounded-xl p-5 shadow-md bg-white sticky top-20">

            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Order Summary
            </h2>

            <div className="space-y-3 max-h-60 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500">
                      {item.quantity} × ৳ {item.price}
                    </p>
                  </div>
                  <p className="font-medium">
                    ৳ {(item.quantity * item.price).toLocaleString("en-BD")}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between text-sm mb-2">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total Price</span>
              <span>৳ {totalPrice.toLocaleString("en-BD")}</span>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Checkout;