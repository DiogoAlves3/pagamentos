import React from 'react';
import { CreditCard, RefreshCw, Wrench, Shield, Calculator, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  cta: string;
  color: string;
  bgColor: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: CreditCard,
      title: 'Financiamento',
      description: 'As melhores condições de financiamento com as principais instituições financeiras do país.',
      features: [
        'Taxas a partir de 0,99% ao mês',
        'Aprovação em até 24h',
        'Entrada a partir de 20%',
        'Prazos de até 84 meses',
        'Sem consulta ao SPC/Serasa'
      ],
      cta: 'Simular Financiamento',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: RefreshCw,
      title: 'Troca de Usados',
      description: 'Avaliamos seu veículo usado e oferecemos as melhores condições para troca.',
      features: [
        'Avaliação gratuita e sem compromisso',
        'Melhor preço do mercado',
        'Documentação facilitada',
        'Transferência em 24h',
        'Garantia de procedência'
      ],
      cta: 'Avaliar Meu Carro',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Wrench,
      title: 'Manutenção',
      description: 'Serviços de manutenção preventiva e corretiva com equipe técnica especializada.',
      features: [
        'Revisão completa',
        'Troca de óleo e filtros',
        'Sistema de freios',
        'Suspensão e direção',
        'Garantia de 12 meses'
      ],
      cta: 'Agendar Manutenção',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Shield,
      title: 'Garantia Estendida',
      description: 'Proteção adicional para seu veículo com cobertura abrangente e suporte 24/7.',
      features: [
        'Cobertura de até 5 anos',
        'Assistência 24 horas',
        'Carro reserva incluso',
        'Reparos em concessionárias',
        'Suporte telefônico'
      ],
      cta: 'Contratar Garantia',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: 'Simulação Online',
      description: 'Calcule suas parcelas sem sair de casa'
    },
    {
      icon: Clock,
      title: 'Processo Rápido',
      description: 'Aprovação e liberação em até 24h'
    },
    {
      icon: CheckCircle,
      title: 'Documentação Simplificada',
      description: 'Apenas os documentos essenciais'
    },
    {
      icon: Star,
      title: 'Atendimento Premium',
      description: 'Consultores especializados'
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para tornar sua experiência de compra e posse de veículos ainda mais tranquila e vantajosa.
          </p>
        </div>

        {/* Grid de serviços principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}>
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">{service.title}</h3>
                  <p className="text-dark-600 leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Lista de recursos */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-dark-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de ação */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105 ${
                service.color === 'text-blue-600' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                service.color === 'text-green-600' ? 'bg-green-600 text-white hover:bg-green-700' :
                service.color === 'text-orange-600' ? 'bg-orange-600 text-white hover:bg-orange-700' :
                'bg-purple-600 text-white hover:bg-purple-700'
              }`}>
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Benefícios dos serviços */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-dark-900 mb-4">
              Por que escolher nossos serviços?
            </h3>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Oferecemos vantagens exclusivas que fazem a diferença na sua experiência conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-dark-900 mb-2">{benefit.title}</h4>
                <p className="text-dark-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA para serviços */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Precisa de um serviço específico?</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades e encontrar a melhor solução para você.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contato"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>Falar com Consultor</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              WhatsApp Rápido
            </a>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Aprovação Garantida</h4>
            <p className="text-dark-600 text-sm">
              Trabalhamos com as melhores instituições para garantir a aprovação do seu financiamento.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Processo Rápido</h4>
            <p className="text-dark-600 text-sm">
              Documentação simplificada e processo otimizado para sua comodidade.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Segurança Total</h4>
            <p className="text-dark-600 text-sm">
              Seus dados estão seguros e protegidos em todas as transações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;