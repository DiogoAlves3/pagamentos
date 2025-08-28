import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CreditCard, Shield, Car, FileText } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    // Compra de Veículos
    {
      id: 1,
      question: 'Quais documentos são necessários para comprar um veículo?',
      answer: 'Para comprar um veículo, você precisará de: RG e CPF, comprovante de residência, comprovante de renda (últimos 3 meses), e comprovante de endereço. Para financiamento, também será necessário histórico bancário e comprovantes adicionais.',
      category: 'compra'
    },
    {
      id: 2,
      question: 'Posso fazer um test drive antes de comprar?',
      answer: 'Sim! Oferecemos test drives gratuitos para todos os veículos em nosso estoque. Basta agendar um horário com nossos consultores. O test drive é uma excelente oportunidade para conhecer o veículo e sentir como ele se comporta na estrada.',
      category: 'compra'
    },
    {
      id: 3,
      question: 'Vocês aceitam veículos usados como parte do pagamento?',
      answer: 'Sim! Aceitamos veículos usados como entrada ou parte do pagamento. Nossa equipe fará uma avaliação gratuita e sem compromisso do seu veículo, oferecendo o melhor preço do mercado.',
      category: 'compra'
    },
    {
      id: 4,
      question: 'Qual a garantia dos veículos seminovos?',
      answer: 'Todos os nossos veículos seminovos passam por uma rigorosa inspeção técnica e vêm com garantia de 12 meses ou 20.000 km, o que vier primeiro. Além disso, oferecemos garantia estendida opcional.',
      category: 'compra'
    },

    // Financiamento
    {
      id: 5,
      question: 'Quais são as taxas de juros para financiamento?',
      answer: 'Nossas taxas de financiamento começam a partir de 0,99% ao mês, dependendo do seu perfil de crédito e da instituição financeira. Oferecemos as melhores condições do mercado com as principais bancos e financeiras.',
      category: 'financiamento'
    },
    {
      id: 6,
      question: 'Em quantas vezes posso financiar?',
      answer: 'Oferecemos prazos de financiamento de até 84 meses (7 anos), dependendo do valor do veículo e do seu perfil de crédito. Quanto maior o prazo, menores as parcelas mensais.',
      category: 'financiamento'
    },
    {
      id: 7,
      question: 'Qual a entrada mínima necessária?',
      answer: 'A entrada mínima é de 20% do valor do veículo. No entanto, quanto maior a entrada, melhores serão as condições de financiamento e menores as parcelas mensais.',
      category: 'financiamento'
    },
    {
      id: 8,
      question: 'Quanto tempo leva para aprovação do financiamento?',
      answer: 'Nossa aprovação é rápida! Em média, o processo leva de 2 a 24 horas, dependendo da complexidade da análise. Trabalhamos com as principais instituições para agilizar o processo.',
      category: 'financiamento'
    },

    // Garantia e Serviços
    {
      id: 9,
      question: 'O que cobre a garantia estendida?',
      answer: 'A garantia estendida cobre componentes mecânicos, elétricos e eletrônicos do veículo por até 5 anos ou 100.000 km. Inclui assistência 24 horas, carro reserva e reparos em concessionárias autorizadas.',
      category: 'garantia'
    },
    {
      id: 10,
      question: 'Vocês oferecem serviços de manutenção?',
      answer: 'Sim! Temos uma oficina completa com equipe técnica especializada. Oferecemos desde revisões preventivas até reparos corretivos, sempre com peças originais e garantia de 12 meses.',
      category: 'garantia'
    },
    {
      id: 11,
      question: 'Como funciona o seguro do veículo?',
      answer: 'Trabalhamos com as principais seguradoras do mercado. Oferecemos diferentes tipos de cobertura e podemos fazer uma cotação personalizada baseada no seu perfil e necessidades.',
      category: 'garantia'
    },
    {
      id: 12,
      question: 'Posso agendar uma revisão online?',
      answer: 'Sim! Você pode agendar revisões e serviços de manutenção através do nosso site, WhatsApp ou telefone. Nossa equipe entrará em contato para confirmar o horário e preparar tudo para sua chegada.',
      category: 'garantia'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: HelpCircle },
    { id: 'compra', name: 'Compra', icon: Car },
    { id: 'financiamento', name: 'Financiamento', icon: CreditCard },
    { id: 'garantia', name: 'Garantia', icon: Shield }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Dúvidas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossos serviços, processos e produtos.
          </p>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-dark-600 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Lista de FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-dark-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-dark-600 leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA para mais dúvidas */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas e ajudar você a tomar a melhor decisão.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#contato"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Enviar Mensagem
              </a>
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Documentação</h4>
            <p className="text-dark-600 text-sm">
              Lista completa de documentos necessários para sua compra.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Simulação</h4>
            <p className="text-dark-600 text-sm">
              Simule seu financiamento online com as melhores taxas.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-dark-900 mb-2">Garantias</h4>
            <p className="text-dark-600 text-sm">
              Conheça todas as garantias e proteções disponíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;