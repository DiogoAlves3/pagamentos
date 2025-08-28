import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleCatalog from './components/VehicleCatalog';
import SpecialOffers from './components/SpecialOffers';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <VehicleCatalog />
        <SpecialOffers />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
