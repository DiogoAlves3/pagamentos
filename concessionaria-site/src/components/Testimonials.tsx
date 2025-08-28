import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de clientes que confiaram na AutoCenter para realizar seus sonhos
          </p>
        </div>

        {/* Testimonials Carousel */}
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
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideTestimonials = testimonials.slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                );
                
                return (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                      {slideTestimonials.map((testimonial) => (
                        <div 
                          key={testimonial.id}
                          className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
                        >
                          {/* Quote Icon */}
                          <div className="absolute top-6 right-6 text-primary-200">
                            <FaQuoteLeft size={24} />
                          </div>

                          {/* Rating */}
                          <div className="flex space-x-1 mb-4">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Comment */}
                          <p className="text-gray-700 mb-6 leading-relaxed italic">
                            "{testimonial.comment}"
                          </p>

                          {/* Customer Info */}
                          <div className="flex items-center space-x-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {testimonial.vehicle} • {formatDate(testimonial.date)}
                              </p>
                            </div>
                          </div>
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
                  onClick={() => setCurrentSlide(index)}
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

        {/* Overall Rating */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Avaliação Geral dos Nossos Clientes
            </h3>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-5xl font-bold">4.9</div>
              <div>
                <div className="flex space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-sm opacity-90">Baseado em 500+ avaliações</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-2xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Recomendariam a AutoCenter</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">4.8/5</div>
                <div className="text-sm opacity-90">Qualidade do Atendimento</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">4.9/5</div>
                <div className="text-sm opacity-90">Processo de Compra</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Quer Fazer Parte Dessas Histórias de Sucesso?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Venha conhecer nosso showroom e descubra por que somos a concessionária 
            mais bem avaliada da região
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Agendar Visita
            </button>
            <button className="btn-outline">
              Ver Mais Depoimentos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;