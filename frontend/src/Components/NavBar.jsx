import React, { useState } from 'react';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sticky top-0 z-50 bg-gray-800'>
            <div className='flex items-center justify-between p-4'>
                {/* Logo */}
                <Link to="/">
                <div className='w-16 h-10'>
                    <img 
                        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" 
                        alt="Logo" 
                        className='h-full w-full rounded object-cover'
                    />
                </div>
                 </Link>
               
                
                {/* Mobile Menu Button */}
                <button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation Links */}
                <div className={`absolute md:static top-16 left-0 w-full bg-gray-800 md:flex md:items-center md:space-x-4 p-4 md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
                    <Link to="/tournament" className="block px-4 p-2 text-white bg-blue-800 rounded-md hover:bg-blue-500 md:inline md:py-1">Tournaments</Link>
                    <Link to="/winner" className="block px-4 p-2 text-white bg-blue-800 rounded-md hover:bg-blue-500 md:inline md:py-1">Winners</Link>
                </div>

                {/* Login/Register Buttons */}
                <div className={`absolute md:static top-32 left-0 w-full bg-gray-800 md:flex md:items-center md:space-x-4 p-4 md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
                    <Link to="/login" className="m-1 block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 md:inline">Login</Link>
                    <Link to="/signup" className="block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 md:inline">Register</Link>
                </div>

                {/* Profile Dropdown */}
                <div className='hidden md:block'>
                
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
