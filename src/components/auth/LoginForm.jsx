"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react"
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import SocialButton from "../buttons/SocialButton";

export default function LoginForm() {
  const params = useSearchParams();
  const callback = params.get("callbackUrl") || "/"
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    const result = await signIn('credentials', { password: formData.password, email: formData.email, redirect: false, callbackUrl: params.get("callbackUrl") || "/" })

    if (!result.ok) {
      Swal.fire("Error", "Email and password not matched", "error")
    } else {
      Swal.fire("Success", "Welcome to hero kidz", "success");
      router.push(callback)

    }

    // TODO: connect with backend login API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Login to Hero Kidz
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>


        </form>
        <SocialButton></SocialButton>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          {/* <a href="/signup" className="text-primary font-medium">
            Sign Up
          </a> */}
          <Link href={`/register?callbackUrl=${callback}`} className="text-primary font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}