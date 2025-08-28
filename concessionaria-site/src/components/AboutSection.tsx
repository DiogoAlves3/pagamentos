import React from 'react';
import { Award, Users, Target, Heart, CheckCircle, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '5000+', label: 'Clientes Satisfeitos', icon: Users },
    { number: '20+', label: 'Anos de Experiência', icon: Award },
    { number: '98%', label: 'Taxa de Aprovação', icon: CheckCircle },
    { number: '24h', label: 'Aprovação de Crédito', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Transparência',
      description: 'Sempre honestos em nossas negociações e preços, sem surpresas desagradáveis.'
    },
    {
      icon: CheckCircle,
      title: 'Qualidade',
      description: 'Todos os veículos passam por rigorosa inspeção antes de serem oferecidos.'
    },
    {
      icon: Users,
      title: 'Atendimento',
      description: 'Equipe especializada e dedicada para oferecer a melhor experiência possível.'
    },
    {
      icon: Target,
      title: 'Compromisso',
      description: 'Comprometidos em superar as expectativas de nossos clientes.'
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                <span>Desde 2003</span>
              </div>
              <h2 className="text-4xl font-bold text-dark-900 mb-6">
                Mais de 20 anos de 
                <span className="text-primary-600 block">excelência no mercado</span>
              </h2>
              <p className="text-lg text-dark-600 leading-relaxed mb-6">
                Somos uma concessionária comprometida em oferecer a melhor experiência 
                na compra e venda de veículos. Nossa missão é conectar pessoas aos 
                carros dos seus sonhos com transparência, qualidade e atendimento excepcional.
              </p>
              <p className="text-lg text-dark-600 leading-relaxed">
                Ao longo de duas décadas, construímos uma reputação sólida baseada na 
                confiança de nossos clientes, na qualidade dos veículos que oferecemos 
                e no compromisso com a satisfação total.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-dark-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-dark-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Nossa concessionária"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-600 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-dark-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto">
              Princípios que guiam nossa atuação no mercado e nosso relacionamento com clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-dark-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-dark-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-dark-900 mb-4">
              Nossa Missão
            </h4>
            <p className="text-dark-700 leading-relaxed">
              Facilitar o acesso a veículos de qualidade, oferecendo soluções 
              financeiras acessíveis e um atendimento personalizado que supere 
              as expectativas de nossos clientes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-dark-50 to-dark-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-dark-600 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-dark-900 mb-4">
              Nossa Visão
            </h4>
            <p className="text-dark-700 leading-relaxed">
              Ser reconhecida como a concessionária de referência na região, 
              líder em satisfação do cliente e inovação no setor automotivo.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Venha nos conhecer!
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Agende uma visita e descubra por que somos a escolha certa 
              para sua próxima aquisição de veículo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Agendar Visita
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;