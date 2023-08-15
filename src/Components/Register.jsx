import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-20 rounded shadow-md w-106">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <hr className='mb-6 border-t-2 border-gray-300'></hr>
        <form>

          <div className='flex'>
            <div className='mr-10'>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="full name">
                  Full Name
                </label>
                <input
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 "
                  type="text"
                  id="full name"
                  name="full name"
                  placeholder="Enter your full name"

                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="userName">
                UserName
              </label>
              <input
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter your userName"
              />
            </div>
          </div>

          <div className='flex'>
            <div className='mr-10'>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phoneNumber"
              />
            </div>
          </div>
          <div className='flex'>
            <div className='mr-10'>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="Confirmpassword">
                Confirm password
              </label>
              <input
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                type="password"
                id="Confirmpassword"
                name="Confirmpassword"
                placeholder="Enter your Confirm password"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Gender
            </label>
            <div className='flex justify-evenly'>
              <label htmlFor="Male">Male</label>
              <input
                name="gender"
                id="Male"
                type="radio"
              />
              <label htmlFor="Feamle">Female</label>
              <input
                id='Feamle'
                name='gender'
                type="radio"
              />
              <label htmlFor="Others">Others</label>
              <input
                id='Others'
                name='gender'
                type="radio"
              />
            </div>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            SignUp
          </button>
          <h3 className='mt-3'>Already have an account?<Link to="/">Login</Link></h3>
        </form>
      </div>
    </div>

  )
}

export default Register