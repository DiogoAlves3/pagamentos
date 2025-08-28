import React from 'react';
import { CreditCard, RefreshCw, Wrench, Shield, Calculator, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: CreditCard,
      title: 'Financiamento',
      description: 'Soluções financeiras personalizadas com as melhores taxas do mercado.',
      features: [
        'Aprovação em até 24 horas',
        'Taxas competitivas',
        'Parcelas que cabem no seu bolso',
        'Documentação simplificada'
      ],
      color: 'primary'
    },
    {
      icon: RefreshCw,
      title: 'Troca de Usados',
      description: 'Avaliamos seu veículo atual e oferecemos a melhor proposta de troca.',
      features: [
        'Avaliação gratuita',
        'Proposta em até 1 hora',
        'Documentação facilitada',
        'Financiamento da diferença'
      ],
      color: 'dark'
    },
    {
      icon: Wrench,
      title: 'Manutenção',
      description: 'Serviços de manutenção preventiva e corretiva para todos os veículos.',
      features: [
        'Equipe técnica especializada',
        'Garantia em todos os serviços',
        'Agendamento online',
        'Orçamento gratuito'
      ],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Garantia Estendida',
      description: 'Proteção adicional para seu veículo com cobertura abrangente.',
      features: [
        'Cobertura de até 5 anos',
        'Assistência 24/7',
        'Carro reserva',
        'Reparos em concessionárias autorizadas'
      ],
      color: 'dark'
    }
  ];

  const financingOptions = [
    {
      type: 'Financiamento Direto',
      rate: '1.99%',
      term: 'até 84x',
      description: 'Taxa especial para clientes com bom score'
    },
    {
      type: 'Consórcio',
      rate: '0%',
      term: 'até 120x',
      description: 'Sem juros, apenas taxa administrativa'
    },
    {
      type: 'Leasing',
      rate: '2.49%',
      term: 'até 60x',
      description: 'Ideal para empresas e PJ'
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para suas necessidades automotivas, 
            desde a compra até a manutenção do seu veículo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 text-${service.color}-600`} />
              </div>
              
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-dark-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className={`w-5 h-5 text-${service.color}-600 flex-shrink-0`} />
                    <span className="text-dark-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`bg-${service.color}-600 hover:bg-${service.color}-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2 group`}>
                <span>Saiba Mais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        {/* Financing Section */}
        <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Soluções Financeiras
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos as melhores condições de financiamento para que você 
              realize o sonho de ter seu carro próprio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <h4 className="text-xl font-bold mb-3">{option.type}</h4>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {option.rate}
                </div>
                <div className="text-lg text-gray-300 mb-3">
                  {option.term}
                </div>
                <p className="text-gray-300 text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-primary text-lg px-8 py-4">
              Simular Financiamento
            </button>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trade-in Process */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Como Funciona a Troca
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 mb-2">Avaliação Gratuita</h4>
                  <p className="text-dark-600 text-sm">
                    Nossa equipe técnica avalia seu veículo e fornece uma proposta justa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 mb-2">Proposta em 1 Hora</h4>
                  <p className="text-dark-600 text-sm">
                    Receba uma proposta detalhada em até uma hora após a avaliação.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 mb-2">Documentação Simplificada</h4>
                  <p className="text-dark-600 text-sm">
                    Processo de documentação facilitado com nossa equipe especializada.
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full btn-primary mt-6">
              Agendar Avaliação
            </button>
          </div>

          {/* Maintenance Benefits */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Benefícios da Manutenção
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-dark-700">Equipe técnica certificada pelas montadoras</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-dark-700">Peças originais com garantia</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-dark-700">Agendamento online 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-dark-700">Orçamento gratuito e transparente</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-dark-700">Carro reserva disponível</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-semibold text-primary-700">Promoção Especial</p>
                  <p className="text-sm text-primary-600">20% de desconto na primeira revisão</p>
                </div>
              </div>
            </div>

            <button className="w-full btn-secondary mt-6">
              Agendar Manutenção
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Precisa de Ajuda?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você a encontrar a melhor 
              solução para suas necessidades automotivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Falar com Consultor
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;