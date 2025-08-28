import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Clock, Tag, Star } from 'lucide-react';

interface Offer {
  id: number;
  title: string;
  vehicle: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  image: string;
  endDate: string;
  features: string[];
  featured: boolean;
}

const SpecialOffers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers: Offer[] = [
    {
      id: 1,
      title: 'Promoção da Semana',
      vehicle: 'Honda Civic 2023',
      originalPrice: 135000,
      discountPrice: 119900,
      discount: 11,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      endDate: '2024-01-15',
      features: ['0km', 'Automático', 'Flex', 'Garantia Estendida'],
      featured: true
    },
    {
      id: 2,
      title: 'Liquidação de Estoque',
      vehicle: 'Toyota Corolla 2022',
      originalPrice: 118000,
      discountPrice: 99900,
      discount: 15,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      endDate: '2024-01-20',
      features: ['25.000km', 'Automático', 'Flex', 'Revisão Completa'],
      featured: false
    },
    {
      id: 3,
      title: 'Oferta Imperdível',
      vehicle: 'Volkswagen Golf GTI',
      originalPrice: 195000,
      discountPrice: 169900,
      discount: 13,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      endDate: '2024-01-25',
      features: ['35.000km', 'Automático', 'Flex', 'Performance'],
      featured: true
    },
    {
      id: 4,
      title: 'Desconto Especial',
      vehicle: 'BMW Série 3 2023',
      originalPrice: 295000,
      discountPrice: 259900,
      discount: 12,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      endDate: '2024-01-30',
      features: ['8.000km', 'Automático', 'Flex', 'Luxo'],
      featured: false
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
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const daysUntilEnd = (dateString: string) => {
    const endDate = new Date(dateString);
    const today = new Date();
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  }, [offers.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  }, [offers.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="ofertas" className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-6 py-3 mb-6">
            <Tag className="w-5 h-5 text-primary-400" />
            <span className="text-primary-200 font-medium">Ofertas Limitadas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Ofertas</span> Especiais
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aproveite nossas promoções exclusivas com descontos imperdíveis em veículos selecionados.
          </p>
        </div>

        {/* Carrossel de ofertas */}
        <div className="relative max-w-6xl mx-auto">
          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {offers.map((offer) => (
                <div key={offer.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Imagem do veículo */}
                      <div className="relative h-80 lg:h-full">
                        <img
                          src={offer.image}
                          alt={offer.vehicle}
                          className="w-full h-full object-cover"
                        />
                        {offer.featured && (
                          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Destaque</span>
                          </div>
                        )}
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          -{offer.discount}%
                        </div>
                      </div>

                      {/* Informações da oferta */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-dark-900 mb-2">{offer.title}</h3>
                          <h4 className="text-xl text-primary-600 font-semibold mb-4">{offer.vehicle}</h4>
                        </div>

                        {/* Preços */}
                        <div className="mb-6">
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="text-3xl font-bold text-primary-600">{formatPrice(offer.discountPrice)}</span>
                            <span className="text-lg text-dark-400 line-through">{formatPrice(offer.originalPrice)}</span>
                          </div>
                          <p className="text-sm text-dark-600">
                            Economia de {formatPrice(offer.originalPrice - offer.discountPrice)}
                          </p>
                        </div>

                        {/* Características */}
                        <div className="mb-6">
                          <div className="grid grid-cols-2 gap-3">
                            {offer.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2 text-sm text-dark-600">
                                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contador regressivo */}
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-center space-x-2 text-red-600 mb-2">
                            <Clock className="w-5 h-5" />
                            <span className="font-semibold">Oferta termina em:</span>
                          </div>
                          <div className="text-2xl font-bold text-red-700">
                            {daysUntilEnd(offer.endDate)} dias
                          </div>
                          <p className="text-sm text-red-600">Até {formatDate(offer.endDate)}</p>
                        </div>

                        {/* Botão de ação */}
                        <button className="btn-primary w-full text-lg py-4">
                          Aproveitar Oferta
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de slide */}
          <div className="flex justify-center mt-8 space-x-3">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Não perca essas ofertas exclusivas! Entre em contato para mais detalhes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Falar com Consultor
            </a>
            <a
              href="#estoque"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark-900"
            >
              Ver Todo Estoque
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;