import React from 'react';

const Header = ({ onReserveClick }) => {
  return (
    <header className="bg-customGreen text-white py-12 flex flex-col items-center text-center">
      {/* Title and Subtitle */}
      <h1 className="text-5xl font-bold text-customYellow mb-2 font-markazi">Little Lemon</h1>
      <h2 className="text-2xl font-semibold text-black mb-4 font-markazi">Chicago</h2>
      <p className="text-lg text-white mb-8 max-w-lg font-karla">
        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
      </p>

      {/* Button */}
      <button
        onClick={() => {
          console.log('Reserve button clicked');
          onReserveClick();
        }}
        className="bg-customYellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 font-karla"
      >
        Reserve a Table
      </button>
    </header>
  );
};

export default Header;


