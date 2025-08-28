import React from 'react';
import { ChevronRight, Star, Shield, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente e imagem */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-800/80 to-primary-900/70 z-0" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Conteúdo principal */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge de destaque */}
          <div className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-primary-400" />
            <span className="text-primary-200 font-medium">Concessionária Premium</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Encontre o Carro</span>
            <br />
            <span className="text-white">dos Seus Sonhos</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A maior seleção de veículos novos e seminovos com as melhores condições de financiamento e garantia estendida.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="#estoque"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <span>Ver Estoque</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contato"
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark-900"
            >
              Falar com Consultor
            </a>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
              <div className="text-gray-300">Veículos em Estoque</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">1000+</div>
              <div className="text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">15+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de qualidade */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-8 text-white/80">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary-400" />
            <span className="text-sm">Garantia Estendida</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-primary-400" />
            <span className="text-sm">Financiamento Rápido</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;