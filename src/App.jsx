import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <section id="header">
        <Header />
      </section>
      <section id="reservation">
        <Reservation />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;

