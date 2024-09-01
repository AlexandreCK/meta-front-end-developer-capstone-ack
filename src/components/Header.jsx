import React from "react";

const Header = ({ onReserveClick }) => {
  return (
    <header className="bg-custom-green text-white py-12 flex flex-col items-center text-center">
      {/* Title and Subtitle */}
      <h1 className="text-5xl font-bold text-[#F4CE14] mb-2">Little Lemon</h1>
      <h2 className="text-2xl font-semibold text-black mb-4">Chicago</h2>
      <p className="text-lg text-white mb-8 max-w-lg">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>

      {/* Button */}
      <button
        onClick={onReserveClick}
        className="bg-[#F4CE14] text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
      >
        Reserve a Table
      </button>
    </header>
  );
};

export default Header;
