import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-green text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-2">Little Lemon</h1>
            <p className="mb-4">Chicago</p>
            <p className="mb-2">Phone: (000) 000-0000</p>
            <p>Email: info@littlelemon.com</p>
          </div>

          <div className="mt-8 md:mt-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#header" className="hover:underline">Home</a></li>
              <li><a href="#reservation" className="hover:underline">Reserve a Table</a></li>
              <li><a href="#menu" className="hover:underline">Menu</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div className="mt-8 md:mt-0">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            Website by <a href="https://github.com/AlexandreCK" className="text-black-400 hover:underline" target="_blank" rel="noopener noreferrer">ACK</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

