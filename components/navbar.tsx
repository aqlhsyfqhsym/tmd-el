import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/path-to-logo.png"
            alt="TMD Energy Logo"
            className="h-8 w-auto"
          />
          <span className="text-sm font-medium text-gray-500">
            TMD ENERGY LIMITED
          </span>
        </div>

        {/* Navbar Links */}
        <ul className="flex items-center space-x-8 text-gray-700">
          <li className="relative group">
            <a
              href="#"
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>Home</span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>About Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>Business</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>Investor Relations</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>Media</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-blue-600 flex items-center space-x-1"
            >
              <span>Sustainability</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
