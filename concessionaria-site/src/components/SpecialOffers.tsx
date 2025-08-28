import React, { useState, useEffect } from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from './VehicleCard';
import { FaChevronLeft, FaChevronRight, FaFire } from 'react-icons/fa';

const SpecialOffers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const specialOffers = vehicles.filter(vehicle => vehicle.isSpecialOffer);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(specialOffers.length / itemsPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentSlideVehicles = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return specialOffers.slice(startIndex, startIndex + itemsPerSlide);
  };

  if (specialOffers.length === 0) return null;

  return (
    <section id="offers" className="section-padding bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaFire className="text-primary-500 text-3xl mr-3" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Ofertas Especiais
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aproveite as melhores promoções da semana com condições imperdíveis
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-primary-500 transition-all duration-300 hover:scale-110"
            disabled={totalSlides <= 1}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-primary-500 transition-all duration-300 hover:scale-110"
            disabled={totalSlides <= 1}
          >
            <FaChevronRight />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideVehicles = specialOffers.slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                );
                
                return (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                      {slideVehicles.map((vehicle) => (
                        <div key={vehicle.id} className="animate-fade-in">
                          <VehicleCard vehicle={vehicle} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Promotion Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎉 Promoção Especial do Mês!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Financiamento com taxa zero para carros selecionados + seguro grátis no primeiro ano
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-sm opacity-80">Taxa de juros</div>
              <div className="text-2xl font-bold">0% a.m.*</div>
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-sm opacity-80">Entrada</div>
              <div className="text-2xl font-bold">Sem entrada*</div>
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <div className="text-sm opacity-80">Aprovação</div>
              <div className="text-2xl font-bold">24 horas</div>
            </div>
          </div>
          <p className="text-sm mt-4 opacity-70">
            *Condições especiais para clientes aprovados. Consulte regulamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;