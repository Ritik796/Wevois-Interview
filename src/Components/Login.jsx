import React from 'react'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
const Login = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="username">
                                Email
                            </label>
                            <input
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                type="text"
                                id="username"
                                name="username"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="submit"
                        >
                            Login
                        </button>
                        <h3 className='mt-3'>Don't have an account?<Link to="/register">Register</Link></h3>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login