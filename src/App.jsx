import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  const [showReservation, setShowReservation] = useState(false);

  const toggleReservation = () => {
    setShowReservation(!showReservation);
  };

  return (
    <>
      <Navbar onReservationClick={toggleReservation} />
      <Header onReserveClick={toggleReservation} />
      {showReservation && (
        <section id="reservation">
          <Reservation />
        </section>
      )}
      <Footer />
    </>
  );
}

export default App;

