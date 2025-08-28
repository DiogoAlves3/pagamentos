import React from 'react';
import { FaAward, FaUsers, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const About: React.FC = () => {
  const values = [
    {
      icon: <FaHandshake className="text-4xl text-primary-500" />,
      title: 'Confiança',
      description: 'Construímos relacionamentos duradouros baseados na transparência e honestidade em cada negociação.',
    },
    {
      icon: <FaAward className="text-4xl text-primary-500" />,
      title: 'Qualidade',
      description: 'Oferecemos apenas veículos rigorosamente selecionados e inspecionados por nossa equipe técnica.',
    },
    {
      icon: <FaUsers className="text-4xl text-primary-500" />,
      title: 'Atendimento',
      description: 'Nossa equipe especializada está sempre pronta para oferecer a melhor experiência de compra.',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-500" />,
      title: 'Garantia',
      description: 'Todos os nossos veículos possuem garantia e suporte pós-venda completo para sua tranquilidade.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '5000+', label: 'Clientes Satisfeitos' },
    { number: '500+', label: 'Veículos Vendidos/Ano' },
    { number: '98%', label: 'Índice de Satisfação' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Sobre a AutoCenter
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Há mais de 15 anos no mercado automotivo, a AutoCenter se consolidou como uma das 
              principais concessionárias da região, oferecendo veículos de qualidade com as 
              melhores condições de financiamento.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é realizar o sonho de nossos clientes, proporcionando uma experiência 
              de compra única, com transparência, qualidade e o melhor atendimento do mercado. 
              Cada veículo é cuidadosamente selecionado e passa por rigorosa inspeção técnica.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary-50 to-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h3>
              <p className="text-gray-700 italic">
                "Conectar pessoas aos seus sonhos sobre rodas, oferecendo veículos de qualidade 
                com atendimento excepcional e condições justas."
              </p>
            </div>

            <button className="btn-primary">
              Conheça Nossa História
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                alt="Showroom AutoCenter"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <FaAward className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Anos de Tradição</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os pilares que sustentam nossa empresa e orientam todas as nossas decisões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Números que Falam por Si
            </h3>
            <p className="text-gray-300 text-lg">
              A confiança dos nossos clientes refletida em números
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;