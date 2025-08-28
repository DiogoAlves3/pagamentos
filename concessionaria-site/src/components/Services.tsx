import React from 'react';
import { services } from '../data/services';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para todas as suas necessidades automotivas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-8">
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="btn-outline w-full flex items-center justify-center space-x-2 group">
                  <span>Saiba Mais</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Precisa de Ajuda Especializada?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Nossa equipe de consultores está pronta para ajudá-lo a encontrar 
                a melhor solução para suas necessidades automotivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Falar com Consultor
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Agendar Visita
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">24h</div>
                <div className="text-sm opacity-80">Atendimento</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-80">Satisfação</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-80">Anos</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">5k+</div>
                <div className="text-sm opacity-80">Clientes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Como Funciona
            </h3>
            <p className="text-lg text-gray-600">
              Processo simples e transparente para adquirir seu veículo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Escolha',
                description: 'Navegue pelo nosso estoque e encontre o veículo ideal'
              },
              {
                step: '02',
                title: 'Avaliação',
                description: 'Analisamos seu perfil e oferecemos as melhores condições'
              },
              {
                step: '03',
                title: 'Financiamento',
                description: 'Aprovação rápida com as menores taxas do mercado'
              },
              {
                step: '04',
                title: 'Entrega',
                description: 'Documentação e entrega do seu novo veículo'
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
                )}
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;