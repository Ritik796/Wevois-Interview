import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
const SiderBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

  return (
     <>
    <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className='ml-44' />    
      <div className={`bg-gray-800 text-white h-screen w-1/6 py-4 ${sidebarOpen ? 'block' : 'hidden'}`}> 
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

export default SiderBar