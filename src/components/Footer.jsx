import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customGreen text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
          <div className="flex-grow md:flex-grow-0 mb-8 md:mb-0 md:mr-4 text-center md:text-left">
            <h1 className="text-xl font-bold mb-4 text-customYellow">
              Little Lemon
            </h1>
            <p className="text-lg mb-4">Chicago</p>
            <p className="text-sm mb-2">Phone: (000) 000-0000</p>
            <p className="text-sm">Email: info@littlelemon.com</p>
          </div>

          <div className="flex flex-col items-center md:items-start text">
            <h2 className="text-xl font-semibold mb-4 text-customYellow text-center">
              Stay Updated
            </h2>
            <form className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded-lg border border-gray-300 mb-2 md:mb-0 md:mr-2 text-black"
              />
              <button
                type="submit"
                className="bg-customYellow text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
        <p className="text-sm">
          Website by{" "}
          <a
            href="https://github.com/AlexandreCK"
            className="text-white hover:text-customYellow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexandre C.K.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;