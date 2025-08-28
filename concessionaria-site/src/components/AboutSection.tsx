import React from 'react';
import { Award, Users, Target, Shield, Heart, Zap, CheckCircle, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: '15 anos de mercado com milhares de clientes satisfeitos'
    },
    {
      icon: Heart,
      title: 'Transparência',
      description: 'Processo claro e honesto em todas as negociações'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Sempre à frente com as melhores tecnologias automotivas'
    },
    {
      icon: Users,
      title: 'Atendimento',
      description: 'Equipe especializada para cuidar de cada cliente'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '5000+', label: 'Veículos Vendidos' },
    { number: '1000+', label: 'Clientes Satisfeitos' },
    { number: '98%', label: 'Taxa de Satisfação' }
  ];

  const certifications = [
    'ISO 9001 - Gestão da Qualidade',
    'ISO 14001 - Gestão Ambiental',
    'Certificação ANFAVEA',
    'Prêmio Melhor Concessionária 2023'
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo textual */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                <span>Concessionária Premium</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
                Sobre a <span className="text-gradient">Concessionária</span>
              </h2>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                Somos uma concessionária de referência no mercado automotivo, especializada em veículos novos e seminovos das melhores marcas do mundo. Nossa missão é proporcionar uma experiência excepcional de compra, oferecendo qualidade, confiança e o melhor atendimento.
              </p>
              <p className="text-lg text-dark-600 mb-8 leading-relaxed">
                Com mais de 15 anos de atuação, construímos uma reputação sólida baseada na transparência, honestidade e compromisso com a satisfação total de nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Nossos Valores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <value.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-dark-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Certificações e Prêmios</h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-dark-600">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagem e estatísticas */}
          <div className="relative">
            {/* Imagem principal */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Showroom da concessionária"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Showroom Premium</h4>
                <p className="text-sm opacity-90">Infraestrutura de primeira linha</p>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.number}</div>
                  <div className="text-sm text-dark-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Badge de qualidade */}
            <div className="absolute -top-4 -right-4 bg-primary-600 text-white p-4 rounded-full shadow-lg">
              <Star className="w-8 h-8 fill-current" />
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores expandidos */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Nossa Missão</h3>
            <p className="text-dark-600 leading-relaxed">
              Proporcionar a melhor experiência de compra de veículos, oferecendo produtos de qualidade, preços justos e um atendimento personalizado que supere as expectativas de nossos clientes.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-dark-50 to-dark-100 rounded-2xl">
            <div className="w-16 h-16 bg-dark-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Nossa Visão</h3>
            <p className="text-dark-600 leading-relaxed">
              Ser reconhecida como a concessionária de referência no mercado automotivo, líder em inovação, qualidade e satisfação do cliente, expandindo nossa presença para outras regiões.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Nossos Valores</h3>
            <p className="text-dark-600 leading-relaxed">
              Ética, transparência, qualidade, inovação, respeito ao cliente e compromisso com a excelência em todos os nossos serviços e relacionamentos.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Pronto para conhecer nossa concessionária?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Agende uma visita e descubra por que somos a escolha certa para sua próxima aquisição.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#contato"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Agendar Visita
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;