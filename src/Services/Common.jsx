import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo2.png';
const Common = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
       
            <nav className="bg-gray-800">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-semibold text-xl ml-0 flex">
                    <img src={logo} alt="Icon" className='w-12' />
                    <FontAwesomeIcon className='mt-5 ml-10' icon={faBars} onClick={toggleSidebar}  />    
                    </div>
                    <ul className="flex space-x-4">
                        <li><Link to="/login" className="text-white hover:text-gray-300">Registeration</Link></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Add Users</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Listing Users</a></li>
                    </ul>
                </div>
            </nav>
          
            <div className={`bg-gray-800 text-white h-screen w-1/6 py-3 px-6 ${sidebarOpen ? 'block' : 'hidden'}`}>
                <div className="text-center mb-4">
                    {/* Sidebar logo or profile image */}
                </div>
                <nav>
                    <ul>
                        <li className="mb-2">
                            <Link to="/" className="text-gray-300 hover:text-white">
                                Dashboard
                            </Link>
                        </li>
                        {/* Add more navigation links */}
                    </ul>
                </nav>
            </div>  
          
        </>
    )
}

export default Common