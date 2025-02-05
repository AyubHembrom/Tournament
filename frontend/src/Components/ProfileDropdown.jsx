import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = { // Example user data
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://esports.battlegroundsmobileindia.com/images/static-images/BGIS_2023/thumbnail.png', // Replace with actual image URL
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative inline-block text-left mt-3 ">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          id="user-menu-button"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          {user.profilePicture ? (
            <img
              className="h-full w-full rounded-full object-cover"
              src={user.profilePicture}
              alt="User profile"
            />
          ) : (
            <span className="text-xl font-medium text-gray-700">{user.name.charAt(0).toUpperCase()}</span>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
            <div className="px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
              <div className="font-medium">{user.name}</div>
              <div className="text-xs text-gray-500">{user.email}</div>
            </div>
            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1" id="user-menu-item-1">
              Your Profile
            </Link>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1" id="user-menu-item-2">
               My Teams
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex="-1" id="user-menu-item-2">
              My Tournaments
            </a>
            
            <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100" role="menuitem" tabIndex="-1" id="user-menu-item-3">
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;