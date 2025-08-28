import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: string;
  vehicleInterest: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'whatsapp',
    vehicleInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Aqui você integraria com seu backend ou serviço de e-mail
    console.log('Formulário enviado:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset do formulário após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'whatsapp',
        vehicleInterest: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 99999-9999',
      link: 'tel:11999999999',
      description: 'Atendimento de segunda a sexta'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@concessionaria.com',
      link: 'mailto:contato@concessionaria.com',
      description: 'Resposta em até 2 horas'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Av. Paulista, 1000 - São Paulo',
      link: 'https://maps.google.com/?q=Av.+Paulista,+1000+-+São+Paulo',
      description: 'Showroom no coração da cidade'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      value: 'Seg-Sex: 8h às 18h | Sáb: 8h às 12h',
      link: '#',
      description: 'Agende sua visita'
    }
  ];

  const subjects = [
    'Consulta sobre veículo',
    'Financiamento',
    'Troca de usado',
    'Manutenção',
    'Garantia estendida',
    'Outros assuntos'
  ];

  const vehicleInterests = [
    'Honda Civic',
    'Toyota Corolla',
    'Volkswagen Golf GTI',
    'BMW Série 3',
    'Mercedes-Benz Classe C',
    'Audi A4',
    'Outro modelo'
  ];

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar o veículo ideal. Entre em contato conosco através de qualquer um dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-1">{info.title}</h4>
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                    <p className="text-sm text-dark-600 mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-dark-900 mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="font-bold">f</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="font-bold">in</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="font-bold">@</span>
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* CTA para WhatsApp */}
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-green-800">Atendimento Rápido via WhatsApp</h4>
              </div>
              <p className="text-green-700 text-sm mb-4">
                Para atendimento imediato, envie uma mensagem no WhatsApp. Nossa equipe responde em até 5 minutos.
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Mensagem</span>
              </a>
            </div>
          </div>

          {/* Formulário de contato */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-8">Envie sua mensagem</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-800 mb-2">Mensagem Enviada!</h4>
                <p className="text-green-700">
                  Obrigado pelo contato. Nossa equipe entrará em contato em breve!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecione um assunto</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="vehicleInterest" className="block text-sm font-medium text-dark-700 mb-2">
                    Veículo de interesse
                  </label>
                  <select
                    id="vehicleInterest"
                    name="vehicleInterest"
                    value={formData.vehicleInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecione um veículo (opcional)</option>
                    {vehicleInterests.map((vehicle, index) => (
                      <option key={index} value={vehicle}>{vehicle}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-3">
                    Forma de contato preferida
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-dark-700">WhatsApp</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-dark-700">Telefone</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-dark-700">E-mail</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mapa Google Maps */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">Nossa Localização</h3>
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96">
            {/* Aqui você integraria com a API do Google Maps */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Mapa Google Maps</p>
                <p className="text-gray-500 text-sm">Av. Paulista, 1000 - São Paulo, SP</p>
                <a
                  href="https://maps.google.com/?q=Av.+Paulista,+1000+-+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;