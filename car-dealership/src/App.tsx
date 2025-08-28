import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Catalog } from './components/Catalog'
import { OffersCarousel } from './components/OffersCarousel'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { MapEmbed } from './components/MapEmbed'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="mt-16">
        <Hero />
        <Catalog />
        <OffersCarousel />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
        <MapEmbed />
      </main>
      <Footer />
    </div>
  )
}

export default App
