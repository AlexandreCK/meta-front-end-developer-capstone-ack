import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import About from './components/About';
import CallToAction from './components/CallToAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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
            <CallToAction onNavigateToMenu={() => handlePageChange("menu")} />
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
          <Header onReserveClick={() => handlePageChange("reservation")} />
          <section id="menu">
            <Menu />
          </section>
        </>
      )}
      {currentPage === "about" && (
        <>
          <section id="about">
            <About />
          </section>
        </>
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;