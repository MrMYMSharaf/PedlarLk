import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="bg-[url('assets/Auth/Login.png')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full bg-opacity-75">
        <h1 className="text-xl font-semibold text-center mb-4">Join pedlarlk</h1>

        <form className="space-y-3">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400 text-sm"
            />
          </div>

          {/* Username Field */}
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400 text-sm"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400 text-sm"
            />
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="number"
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400 text-sm"
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-400 text-sm"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-red-500 text-white p-2 rounded-lg font-semibold text-sm hover:bg-red-600 transition duration-300">
            Sign up
          </button>
        </form>

        {/* Social Media Sign-up Section */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full bg-blue-500 text-white p-2 rounded-lg flex items-center justify-center text-sm hover:bg-blue-600 transition duration-300">
            <i className="fab fa-facebook mr-1"></i> Sign up with Facebook
          </button>
          <button className="w-full bg-white border border-gray-300 text-gray-600 p-2 rounded-lg flex items-center justify-center text-sm hover:bg-gray-100 transition duration-300">
            <i className="fab fa-google mr-1"></i> Sign up with Google
          </button>
        </div>

        {/* Terms and Links Section */}
        <div className="mt-4 text-center text-xs text-gray-600">
          <p>
            By continuing, you agree to pedlarlk's <a href="#" className="text-red-500 hover:underline">Terms of Service</a> and acknowledge you've read our <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>.
          </p>
        </div>

        <div className="mt-3 text-center text-xs">
          <p className="text-gray-600">
            Already have an account? <Link to="/auth" className="text-red-500 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register;
