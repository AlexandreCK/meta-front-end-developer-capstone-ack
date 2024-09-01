// src/components/Navbar.jsx
import React, { useState } from "react";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <button onClick={toggleMenu} className="focus:outline-none">
        <Bars3Icon className="h-8 w-8 text-gray-800" />
      </button>
      <div>
        <ShoppingCartIcon className="h-8 w-8 text-gray-800" />
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center">
            <li className="py-2 border-b w-full text-center">
              <a href="#header" onClick={toggleMenu}>
                Header
              </a>
            </li>
            <li className="py-2 border-b w-full text-center">
              <a href="#reservation" onClick={toggleMenu}>
                Reservation
              </a>
            </li>
            <li className="py-2 w-full text-center">
              <a href="#footer" onClick={toggleMenu}>
                Footer
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
