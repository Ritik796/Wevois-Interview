import React from 'react'

const Interview = () => {
  return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-96">
              <h2 className="text-2xl font-semibold mb-4">Interview Form</h2>
              <form>
                <div className='flex'>
                  <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                          Full Name
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                          placeholder="Enter your full name"
                      />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                          Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                          placeholder="Enter your email"
                      />
                  </div>
                  </div>
                  <div className="mb-6">
                      <label htmlFor="interviewDate" className="block text-gray-700 text-sm font-medium mb-1">
                          Interview Date
                      </label>
                      <input
                          type="date"
                          id="interviewDate"
                          name="interviewDate"
                          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      />
                  </div>
                  <button
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="submit"
                  >
                      Submit
                  </button>
              </form>
          </div>
      </div>

  )
}

export default Interview