import React, { useState } from 'react';
import { ContactForm } from '../types';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
    vehicleInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        vehicleInterest: '',
      });
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Telefone',
      info: '(11) 99999-9999',
      action: 'tel:+5511999999999',
      actionText: 'Ligar Agora'
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      action: 'https://wa.me/5511999999999',
      actionText: 'Conversar'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'E-mail',
      info: 'contato@autocenter.com',
      action: 'mailto:contato@autocenter.com',
      actionText: 'Enviar E-mail'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Endereço',
      info: 'Rua das Flores, 123 - Centro\nSão Paulo - SP',
      action: 'https://maps.google.com',
      actionText: 'Ver no Mapa'
    }
  ];

  const businessHours = [
    { day: 'Segunda a Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: '08:00 - 17:00' },
    { day: 'Domingo', hours: '09:00 - 15:00' },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudá-lo a encontrar o carro dos seus sonhos. 
            Fale conosco através dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interesse em Veículo
                  </label>
                  <select
                    name="vehicleInterest"
                    value={formData.vehicleInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um veículo</option>
                    <option value="Honda Civic">Honda Civic</option>
                    <option value="Toyota Corolla">Toyota Corolla</option>
                    <option value="Volkswagen Jetta">Volkswagen Jetta</option>
                    <option value="Hyundai HB20S">Hyundai HB20S</option>
                    <option value="Ford Mustang">Ford Mustang</option>
                    <option value="Chevrolet Onix Plus">Chevrolet Onix Plus</option>
                    <option value="BMW 320i">BMW 320i</option>
                    <option value="Jeep Compass">Jeep Compass</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-nos como podemos ajudá-lo..."
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.includes('sucesso') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}

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
                    <FaPaperPlane />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-primary-500 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">{item.info}</p>
                  <a
                    href={item.action}
                    target={item.action.startsWith('http') ? '_blank' : undefined}
                    rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-300"
                  >
                    {item.actionText} →
                  </a>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <FaClock className="text-primary-500 text-2xl mr-3" />
                <h3 className="text-xl font-bold">Horário de Funcionamento</h3>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-primary-400">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-500/20 rounded-lg">
                <p className="text-sm">
                  <strong>Atendimento de Emergência:</strong> 24h via WhatsApp
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Ações Rápidas</h3>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um test drive."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp />
                  <span>Agendar Test Drive</span>
                </a>
                
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer uma simulação de financiamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-center flex items-center justify-center space-x-2"
                >
                  <span>Simular Financiamento</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nossa Localização
          </h3>
          
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975631784134!2d-46.63481842474477!3d-23.561414562883766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sSé%2C%20São%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1703123456789!5m2!1sen!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              <strong>AutoCenter Concessionária</strong><br />
              Rua das Flores, 123 - Centro, São Paulo - SP<br />
              CEP: 01000-000
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver Direções no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;