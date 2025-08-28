import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Estoque', href: '#estoque' },
    { name: 'Ofertas', href: '#ofertas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    { name: 'Financiamento', href: '#servicos' },
    { name: 'Troca de Usados', href: '#servicos' },
    { name: 'Manutenção', href: '#servicos' },
    { name: 'Garantia Estendida', href: '#servicos' },
    { name: 'Seguros', href: '#servicos' },
    { name: 'Test Drive', href: '#estoque' }
  ];

  const brands = [
    'Honda',
    'Toyota',
    'Volkswagen',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Ford',
    'Chevrolet'
  ];

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-blue-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:bg-red-600' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-900 text-white">
      {/* Conteúdo principal do footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da empresa */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Concessionária</h3>
                <p className="text-sm text-gray-400">Excelência em automóveis</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 15 anos no mercado automotivo, oferecendo os melhores veículos e serviços com qualidade e confiança.
            </p>

            {/* Informações de contato */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>contato@concessionaria.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Av. Paulista, 1000 - São Paulo</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-primary-400" />
                <span>Seg-Sex: 8h às 18h | Sáb: 8h às 12h</span>
              </div>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Marcas e Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Marcas</h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {brands.map((brand, index) => (
                <span key={index} className="text-gray-300 text-sm hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                  {brand}
                </span>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-md font-semibold mb-3 text-white">Newsletter</h5>
              <p className="text-gray-300 text-sm mb-4">
                Receba ofertas exclusivas e novidades em primeira mão.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg transition-colors duration-300">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 ${social.color} text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Concessionária. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/politica-privacidade" className="hover:text-primary-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="hover:text-primary-400 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="/cookies" className="hover:text-primary-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Botão voltar ao topo */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        title="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;