import React from 'react';
import { FaArrowDown, FaPlay } from 'react-icons/fa';

const Hero: React.FC = () => {
  const scrollToVehicles = () => {
    const element = document.querySelector('#vehicles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop"
            alt="Carros em destaque"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Encontre o
            <span className="text-primary-500 block">Carro dos Seus Sonhos</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Na AutoCenter, oferecemos os melhores veículos com condições especiais de financiamento. 
            Sua próxima aventura começa aqui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToVehicles}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-3"
            >
              <span>Ver Estoque</span>
              <FaArrowDown className="animate-bounce-light" />
            </button>
            
            <button className="btn-outline text-lg px-8 py-4 flex items-center space-x-3">
              <FaPlay />
              <span>Assistir Vídeo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-gray-300">Carros Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">15</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">24h</div>
              <div className="text-gray-300">Aprovação Crédito</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToVehicles}
          className="text-white hover:text-primary-500 transition-colors duration-300 animate-bounce"
        >
          <FaArrowDown size={24} />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary-500/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-primary-500/20 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;