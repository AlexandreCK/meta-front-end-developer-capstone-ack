import React from 'react';
import MenuCard from './MenuCard';
import image2 from "../assets/2.webp";
import baba from "../assets/baba.jpg";
import dolmas from "../assets/dolmas.jpg";
import lamb from "../assets/lamb.jpg";
import moussaka from "../assets/moussaka.jpg";
import rata from "../assets/rata.jpg";
import tiramisu from "../assets/tiramisu.jpg";
import span from "../assets/span.jpg";
import paella from "../assets/paella.jpg";

const menuItems = [
    { id: 1, name: "Lamb Souvlaki", description: "Grilled lamb skewers marinated in herbs and spices, served with tzatziki.", image: lamb, spiceLevel: 2, price: "$12.99" },
    { id: 2, name: "Calamari Fritti", description: "Crispy fried calamari rings served with a lemon aioli.", image: image2, spiceLevel: 1, price: "$15.49" },
    { id: 3, name: "Vegetarian Ratatouille", description: "A hearty mix of roasted vegetables in a rich tomato sauce, inspired by Provence.", image: rata, spiceLevel: 1, price: "$11.29" },
    { id: 4, name: "Spanakopita", description: "Phyllo pastry filled with spinach, feta cheese, and fresh herbs.", image: span, spiceLevel: 0, price: "$10.99" },
    { id: 5, name: "Moussaka", description: "A classic Greek dish with layers of eggplant, ground beef, and béchamel sauce.", image: moussaka, spiceLevel: 2, price: "$13.49" },
    { id: 6, name: "Baba Ganoush", description: "Smoky eggplant dip with tahini, served with warm pita bread.", image: baba, spiceLevel: 0, price: "$7.99" },
    { id: 7, name: "Dolmas", description: "Grape leaves stuffed with rice, pine nuts, and fresh herbs, served with a lemon sauce.", image: dolmas, spiceLevel: 1, price: "$8.49" },
    { id: 8, name: "Tiramisu", description: "A creamy Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.", image: tiramisu, spiceLevel: 0, price: "$5.99" },
    { id: 9, name: "Paella Valenciana", description: "A traditional Spanish rice dish with saffron, chicken, rabbit, and vegetables.", image: paella, spiceLevel: 2, price: "$18.99" },
  ];
  
const Menu = () => {
  return (
    <div className="bg-customGreen min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-customYellow mb-6 text-center font-markazi">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.id} dish={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;