import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0"> {/* Added margin bottom for small screens */}
          <p className="text-sm">&copy; {new Date().getFullYear()} OnlinePlayer. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">About Us</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Services</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
        </div>

        <div className="flex mt-6 md:mt-0 space-x-6"> {/* Social icons container */}
          <a href="#" className="text-gray-300 hover:text-white">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.94 0 3.59.347 3.59 3.89V12h-3.59v2.988h3.59V22H10.438C14.309 21.43 18 17.494 18 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.13 0-.259-.005-.389A8.288 8.288 0 0022 5.92a5.64 5.64 0 01-1.631.564 5.457 5.457 0 002.384-3.086 5.457 5.457 0 01-2.56 1.063 2.723 2.723 0 00-4.601 2.482 5.457 5.457 0 01-4.69-2.368 2.723 2.723 0 00-.993 3.462 5.457 5.457 0 01-4.69-2.368 2.723 2.723 0 00-.993 3.462 5.457 5.457 0 01-4.69-2.368 2.723 2.723 0 00-.993 3.462c0 1.873.985 3.524 2.477 4.492a9.124 9.124 0 01-3.779-1.011v.07c0 2.605 1.865 4.779 4.327 5.267a5.358 5.358 0 01-2.419.102 2.715 2.715 0 002.53 2.115 5.572 5.572 0 01-3.692 1.284 5.605 5.605 0 01-.665-.032 2.715 2.715 0 002.53 2.115 5.572 5.572 0 01-3.692 1.284 5.605 5.605 0 01-.665-.032 10.216 10.216 0 006.485 2.099z" />
            </svg>
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;