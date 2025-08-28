import React from 'react';
import { ChevronRight, Star, Shield, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-dark-900/60"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Mais de 20 anos de experiência</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Encontre o Carro dos
            <span className="text-primary-400 block">Seus Sonhos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            A maior concessionária da região com veículos seminovos e novos, 
            financiamento facilitado e garantia estendida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 flex items-center group">
              Ver Estoque Completo
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Agendar Test Drive
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-semibold">Garantia Estendida</h3>
              <p className="text-sm text-gray-300">Proteção completa para seu veículo</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-semibold">Financiamento Rápido</h3>
              <p className="text-sm text-gray-300">Aprovação em até 24 horas</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-semibold">Qualidade Garantida</h3>
              <p className="text-sm text-gray-300">Veículos rigorosamente inspecionados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;