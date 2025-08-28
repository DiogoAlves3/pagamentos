import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VehicleCatalog from './components/VehicleCatalog';
import SpecialOffers from './components/SpecialOffers';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <VehicleCatalog />
        <SpecialOffers />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
