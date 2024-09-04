import React from "react";
import logo from "../assets/logo.webp";
import baba from "../assets/baba.jpg";
import dolmas from "../assets/dolmas.jpg";
import lamb from "../assets/lamb.jpg";
import moussaka from "../assets/moussaka.jpg";
import rata from "../assets/rata.jpg";
import tiramisu from "../assets/tiramisu.jpg";

const About = () => {
  return (
    <div className="bg-customGreen min-h-screen text-white">
      <header className="bg-white text-gray-800 py-8">
        <div className="container mx-auto text-center">
          <img src={logo} alt="Restaurant Logo" className="h-24 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-xl mb-6">
            Experience the authentic flavors of Southern Europe in every bite.
            Our restaurant is dedicated to bringing you the best Mediterranean
            cuisine.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Founded with a passion for Mediterranean cuisine, we aim to offer an
            unforgettable dining experience with a blend of traditional and
            modern dishes. Our chefs use only the freshest ingredients to bring
            you a taste of Southern Europe.
          </p>
          <p className="text-lg mb-6">
            From our family to yours, we strive to provide not just a meal, but
            a memorable experience. Join us and savor the essence of
            Mediterranean culture through our carefully crafted dishes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src={baba}
              alt="Baba Ghanoush"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
            <img
              src={dolmas}
              alt="Dolmas"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
            <img
              src={lamb}
              alt="Spicy Lamb Kofta"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
            <img
              src={moussaka}
              alt="Vegetable Moussaka"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />

            <img
              src={rata}
              alt="Ratatouille"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
            <img
              src={tiramisu}
              alt="Tiramisu"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>

    </div>
  );
};

export default About;
