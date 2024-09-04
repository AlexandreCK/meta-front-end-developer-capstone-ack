import React, { useState } from "react";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.webp";

export const Navbar = ({ onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (page) => {
    setIsOpen(false);
    onPageChange(page);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between relative border-b border-gray-200">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
      >
        <Bars3Icon className="h-8 w-8 text-gray-800" />
      </button>

      <img
        src={logo}
        alt="Logo"
        className="h-12 cursor-pointer"
        onClick={() => handleNavigation("home")}
      />

      <button
        className="p-2 rounded-full hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
      >
        <ShoppingCartIcon className="h-8 w-8 text-gray-800" />
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg border border-gray-200">
          <ul className="flex flex-col items-center">
            <li className="py-2 border-b w-full text-center">
              <button
                onClick={() => handleNavigation("home")}
                className="w-full py-2 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                Home
              </button>
            </li>
            <li className="py-2 border-b w-full text-center">
              <button
                onClick={() => handleNavigation("menu")}
                className="w-full py-2 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                Menu
              </button>
            </li>
            <li className="py-2 border-b w-full text-center">
              <button
                onClick={() => handleNavigation("reservation")}
                className="w-full py-2 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                Reservation
              </button>
            </li>
            <li className="py-2 w-full text-center">
              <button
                onClick={() => handleNavigation("about")}
                className="w-full py-2 hover
                hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                About
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;