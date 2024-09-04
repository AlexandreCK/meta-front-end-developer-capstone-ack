import React from 'react';

const CallToAction = ({ onNavigateToMenu }) => {
  return (
    <div className="bg-customGreen py-12 text-center">
      <p className="text-lg text-white mb-6 font-karla">
        Explore our diverse range of dishes and find your new favorites!
      </p>
      <button
        onClick={onNavigateToMenu}
        className="bg-customYellow text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-400 transition duration-300 font-karla"
      >
        Check Out the Menu
      </button>
    </div>
  );
};

export default CallToAction;