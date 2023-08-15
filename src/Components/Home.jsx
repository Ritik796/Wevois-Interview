import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Home = () => {

    return (
        <>


            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-semibold text-xl">Logo</div>
                    <ul className="flex space-x-4">
                        <li><Link to="/login" className="text-white hover:text-gray-300">Registeration</Link></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Add Users</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Listing Users</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Home