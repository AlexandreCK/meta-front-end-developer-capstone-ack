// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen bg-customGreen">
      <Navbar onPageChange={handlePageChange} />
      {currentPage === "home" && (
        <>
          <Header onReserveClick={() => handlePageChange("reservation")} />
          <main className="flex-grow bg-customGreen">
            <Carousel />
          </main>
        </>
      )}
      {currentPage === "reservation" && (
        <>
          <Header />
          <section id="reservation">
            <Reservation />
          </section>
        </>
      )}
      {currentPage === "menu" && (
        <>
          <Header onReserveClick={() => handlePageChange("reservation")} /> {/* this line */}
          <section id="menu">
            <Menu />
          </section>
        </>
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
