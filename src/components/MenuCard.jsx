// src/components/MenuCard.jsx
import React from 'react';
import { StarIcon, FireIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

// Function to render spice level icons
const SpiceLevel = ({ level }) => {
  const icons = [];
  for (let i = 0; i < level; i++) {
    icons.push(<FireIcon key={i} className="h-5 w-5 text-red-600" />);
  }
  return <div className="flex space-x-1">{icons}</div>;
};

const MenuCard = ({ dish }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
        <p className="text-gray-600 mb-2">{dish.description}</p>
        <div className="flex items-center mb-2">
          <span className="text-gray-700 font-semibold mr-2">Spice Level:</span>
          <SpiceLevel level={dish.spiceLevel} />
        </div>
        <div className="flex items-center mb-2">
          <CurrencyDollarIcon className="h-5 w-5 text-gray-700 mr-2" />
          <span className="text-gray-800 font-bold">{dish.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

