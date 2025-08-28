import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Tag, Star, Eye } from 'lucide-react';

interface Offer {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
  image: string;
  endDate: string;
  features: string[];
}

const SpecialOffers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers: Offer[] = [
    {
      id: 1,
      title: 'Honda Civic 2022',
      description: 'Veículo seminovo com apenas 15.000 km, revisão completa e garantia estendida.',
      originalPrice: 135000,
      discountPrice: 125000,
      discountPercentage: 7,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      endDate: '2024-01-15',
      features: ['Revisão completa', 'Garantia estendida', 'Documentação em dia', 'IPVA pago']
    },
    {
      id: 2,
      title: 'Volkswagen Golf GTI',
      description: 'Esportivo seminovo com performance excepcional e acabamento premium.',
      originalPrice: 195000,
      discountPrice: 180000,
      discountPercentage: 8,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      endDate: '2024-01-20',
      features: ['Performance esportiva', 'Acabamento premium', 'Histórico completo', 'Garantia oficial']
    },
    {
      id: 3,
      title: 'Toyota Corolla 2023',
      description: 'Novo modelo com tecnologia de ponta e eficiência energética.',
      originalPrice: 155000,
      discountPrice: 145000,
      discountPercentage: 6,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      endDate: '2024-01-25',
      features: ['Tecnologia de ponta', 'Eficiência energética', 'Segurança máxima', 'Garantia de fábrica']
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ofertas" className="section-padding bg-gradient-to-br from-dark-900 to-dark-800 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm text-primary-400 px-4 py-2 rounded-full mb-4">
            <Tag className="w-4 h-4" />
            <span className="text-sm font-medium">Ofertas Limitadas</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Ofertas Especiais da Semana
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Aproveite nossas promoções exclusivas com descontos imperdíveis em veículos selecionados.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {offers.map((offer) => (
                <div key={offer.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
                      />
                      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{offer.discountPercentage}%
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-3">{offer.title}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {offer.description}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl font-bold text-primary-400">
                            {formatPrice(offer.discountPrice)}
                          </span>
                          <span className="text-xl text-gray-400 line-through">
                            {formatPrice(offer.originalPrice)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4" />
                          <span>Oferta válida até {formatDate(offer.endDate)}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">Incluso na oferta:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {offer.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-primary-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="btn-primary flex items-center justify-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>Ver Detalhes</span>
                        </button>
                        <button className="btn-secondary">
                          Agendar Visita
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Não perca essas ofertas!
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco para mais informações e agende sua visita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Falar com Consultor
              </button>
              <button className="btn-secondary">
                Receber Novas Ofertas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;