import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Estoque', href: '#estoque' },
    { name: 'Ofertas', href: '#ofertas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      {/* Top bar com informações de contato */}
      <div className="bg-dark-900 text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-500" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span>Av. Paulista, 1000 - São Paulo</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary-500" />
              <span>Seg-Sex: 8h às 18h | Sáb: 8h às 12h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="bg-white border-b border-dark-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark-900">Concessionária</h1>
                <p className="text-sm text-dark-600">Excelência em automóveis</p>
              </div>
            </div>

            {/* Navegação desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-700 hover:text-primary-600 font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Botão de contato */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-dark-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-dark-200">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-700 hover:text-primary-600 font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;