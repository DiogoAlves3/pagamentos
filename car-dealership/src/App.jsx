import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Offers from "./components/Offers";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-100 scroll-smooth">
      <Header />
      <main className="mt-16">
        <Hero />
        <Catalog />
        <Offers />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
