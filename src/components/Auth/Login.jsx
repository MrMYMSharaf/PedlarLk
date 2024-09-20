import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="bg-[url('assets/Auth/Login.png')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full bg-opacity-75">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to Pedlar</h1>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="flex justify-end">
            <Link to="forgotPasswort" className="text-red-500 text-sm hover:underline">Forgot your password?</Link>
          </div>

          <button className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300">
            Log in
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300">
              <i className="fab fa-facebook mr-2"></i> Continue with Facebook
            </button>
            <button className="w-full bg-white border border-gray-300 text-gray-600 p-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300">
              <i className="fab fa-google mr-2"></i> Continue with Google
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            By continuing, you agree to pedlarlk's <a href="#" className="text-red-500 hover:underline">Terms of Service</a> and acknowledge you've read our <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>. <a href="#" className="text-red-500 hover:underline">Notice at collection</a>.
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Not on pedlarlk yet? <Link to="register" className="text-red-500 hover:underline">Sign up</Link>
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Are you a business? <a href="#" className="text-red-500 hover:underline">Get started here!</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
