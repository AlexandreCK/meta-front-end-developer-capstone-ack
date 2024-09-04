import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showReservation, setShowReservation] = useState(false);

  const toggleReservation = () => {
    setShowReservation(!showReservation);
  };

  return (
    <div className="flex flex-col min-h-screen bg-customGreen">
      <Navbar onReservationClick={toggleReservation} />
      <Header onReserveClick={toggleReservation} />
      <main className="flex-grow bg-customGreen">
        {!showReservation ? (
          <Carousel />
        ) : (
          <section id="reservation">
            <Reservation />
          </section>
        )}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;


