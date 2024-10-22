import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white shadow relative z-10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-black text-3xl font-bold">
            <h1 className="text-violet-500">Travel</h1>
          </div>

          {/* Hamburger Button for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-violet-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Links for medium to large screens */}
          <div className="hidden md:flex justify-center space-x-16 text-blue-700 text-xl">
            <Link to="/TourPackage" className="hover:text-blue-300">
              Tour Packages
            </Link>
            <Link to="/hotel" className="hover:text-blue-300">
              Hotels
            </Link>
            <Link to="/Flight" className="hover:text-blue-300">
              Flights
            </Link>
          </div>

          {/* Search Input */}
          <div className="hidden md:block">
            <input
              className="p-2 border border-blue-500 focus:outline-none rounded"
              placeholder="Search"
            />
          </div>

          {/* My Account */}
          <div className="hidden md:block ml-4">
            <a href="#" className="hover:text-blue-300 text-black-700">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/gender-neutral-user--v1.png"
                alt="User Icon"
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 items-center">
              <Link to="/TourPackage" className="text-blue-700 text-lg hover:text-blue-300">
                Tour Packages
              </Link>
              <Link to="/hotel" className="text-blue-700 text-lg hover:text-blue-300">
                Hotels
              </Link>
              <Link to="/Flight" className="text-blue-700 text-lg hover:text-blue-300">
                Flights
              </Link>
              <input
                className="p-2 border border-blue-500 focus:outline-none rounded mt-4"
                placeholder="Search"
              />
              <a href="#" className="hover:text-blue-300 text-black-700 mt-4">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/gender-neutral-user--v1.png"
                  alt="User Icon"
                />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
