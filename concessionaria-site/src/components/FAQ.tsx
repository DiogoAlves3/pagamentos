import React, { useState } from 'react';
import { faqs } from '../data/faq';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'compra', label: 'Compra' },
    { id: 'financiamento', label: 'Financiamento' },
    { id: 'garantia', label: 'Garantia' },
    { id: 'geral', label: 'Geral' },
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaQuestionCircle className="text-primary-500 text-3xl mr-3" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Dúvidas Frequentes
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre compra, financiamento e garantia
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-500 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center transition-all duration-300 ${
                    openItems.includes(faq.id) ? 'bg-primary-500 text-white rotate-180' : 'text-primary-500'
                  }`}>
                    {openItems.includes(faq.id) ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Não Encontrou Sua Dúvida?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Nossa equipe está pronta para esclarecer todas as suas questões. 
            Entre em contato conosco através dos canais abaixo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-semibold mb-2">Telefone</h4>
              <p className="text-sm opacity-90">(11) 99999-9999</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <p className="text-sm opacity-90">Atendimento 24h</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl mb-3">✉️</div>
              <h4 className="font-semibold mb-2">E-mail</h4>
              <p className="text-sm opacity-90">contato@autocenter.com</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Falar por WhatsApp
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Enviar E-mail
            </button>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Dicas Rápidas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: 'Documentos Necessários',
                tip: 'Tenha RG, CPF, comprovante de renda e residência em mãos para agilizar o processo.'
              },
              {
                icon: '💰',
                title: 'Financiamento',
                tip: 'Consulte seu CPF no SPC/Serasa antes de solicitar financiamento para evitar surpresas.'
              },
              {
                icon: '🚗',
                title: 'Test Drive',
                tip: 'Agende seu test drive com antecedência e traga sua CNH válida.'
              },
              {
                icon: '🔧',
                title: 'Vistoria',
                tip: 'Todos os carros passam por vistoria técnica completa antes da entrega.'
              },
              {
                icon: '📱',
                title: 'Atendimento',
                tip: 'Use nosso WhatsApp para atendimento rápido e personalizado.'
              },
              {
                icon: '🎯',
                title: 'Melhor Oferta',
                tip: 'Compare preços e condições - garantimos as melhores ofertas do mercado.'
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                <p className="text-gray-600 text-sm">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;