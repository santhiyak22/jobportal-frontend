"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      
      {/* Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to your account 🔐
        </h2>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400">OR</div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
            Continue with Google
          </button>
          <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
            Continue with Facebook
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}