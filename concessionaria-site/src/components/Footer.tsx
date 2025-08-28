import React from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Estoque', href: '#vehicles' },
    { label: 'Ofertas', href: '#offers' },
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
  ];

  const services = [
    'Financiamento Veicular',
    'Troca de Usados',
    'Manutenção e Revisão',
    'Garantia Estendida',
    'Seguro Auto',
    'Documentação',
  ];

  const brands = [
    'Honda', 'Toyota', 'Volkswagen', 
    'Hyundai', 'Ford', 'Chevrolet', 
    'BMW', 'Jeep'
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <FaArrowUp />
      </button>

      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">AutoCenter</h3>
                <p className="text-gray-400 text-sm">Concessionária</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 15 anos realizando sonhos e conectando pessoas aos melhores veículos 
              com atendimento excepcional e condições especiais.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Rua das Flores, 123</p>
                  <p>Centro - São Paulo/SP</p>
                  <p>CEP: 01000-000</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a 
                  href="tel:+5511999999999"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  (11) 99999-9999
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-primary-500 flex-shrink-0" />
                <a 
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  WhatsApp 24h
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a 
                  href="mailto:contato@autocenter.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  contato@autocenter.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours & Brands */}
        <div className="py-8 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Business Hours */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <FaClock className="text-primary-500" />
              <h4 className="font-semibold text-lg">Horário de Funcionamento</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="font-medium text-primary-400">Segunda a Sexta</p>
                <p className="text-gray-300">08:00 - 18:00</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="font-medium text-primary-400">Sábado</p>
                <p className="text-gray-300">08:00 - 17:00</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="font-medium text-primary-400">Domingo</p>
                <p className="text-gray-300">09:00 - 15:00</p>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Marcas Disponíveis</h4>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-primary-500 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold mb-4">Fique por Dentro das Ofertas</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cadastre-se em nossa newsletter e receba em primeira mão as melhores ofertas, 
              lançamentos e promoções especiais.
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Cadastrar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>&copy; 2024 AutoCenter Concessionária. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido com ❤️ para realizar seus sonhos automotivos.</p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;