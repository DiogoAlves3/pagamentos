import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, CreditCard, Shield, Car, FileText } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const faqData: FAQItem[] = [
    // Compra de Veículos
    {
      id: 1,
      question: 'Como funciona o processo de compra de um veículo?',
      answer: 'O processo é simples: escolha o veículo, faça o test drive, escolha a forma de pagamento (à vista ou financiado), assine os documentos e retire seu carro. Nossa equipe acompanha você em cada etapa.',
      category: 'compra'
    },
    {
      id: 2,
      question: 'Posso fazer test drive antes de comprar?',
      answer: 'Sim! Oferecemos test drive gratuito em todos os nossos veículos. Basta agendar um horário e trazer sua CNH e RG. O test drive é essencial para você conhecer o veículo antes da compra.',
      category: 'compra'
    },
    {
      id: 3,
      question: 'Quais documentos preciso para comprar um carro?',
      answer: 'Para pessoa física: RG, CPF, CNH, comprovante de residência e comprovante de renda. Para pessoa jurídica: contrato social, documentos dos sócios e comprovante de faturamento.',
      category: 'compra'
    },
    {
      id: 4,
      question: 'Vocês aceitam troca de veículos usados?',
      answer: 'Sim! Avaliamos seu veículo atual e oferecemos uma proposta de troca. A avaliação é gratuita e a proposta é apresentada em até 1 hora. Você pode financiar a diferença se necessário.',
      category: 'compra'
    },

    // Financiamento
    {
      id: 5,
      question: 'Quais são as opções de financiamento disponíveis?',
      answer: 'Oferecemos financiamento direto, consórcio e leasing. As taxas variam conforme o perfil do cliente e o valor financiado. Aprovação em até 24 horas para clientes com documentação completa.',
      category: 'financiamento'
    },
    {
      id: 6,
      question: 'Qual é a taxa de juros para financiamento?',
      answer: 'As taxas variam de 1.99% a 2.49% ao mês, dependendo do perfil do cliente, valor financiado e prazo escolhido. Para consórcio, não há juros, apenas taxa administrativa.',
      category: 'financiamento'
    },
    {
      id: 7,
      question: 'Qual é o prazo máximo para financiamento?',
      answer: 'O prazo máximo é de 84 meses para financiamento direto e 120 meses para consórcio. Quanto maior o prazo, menores as parcelas, mas maior o valor total pago.',
      category: 'financiamento'
    },
    {
      id: 8,
      question: 'Preciso de fiador para financiar?',
      answer: 'Não necessariamente. Avaliamos o perfil de crédito do cliente. Para clientes com bom score, não é necessário fiador. Para outros casos, podemos aceitar fiador ou cônjuge como co-titular.',
      category: 'financiamento'
    },

    // Garantia e Manutenção
    {
      id: 9,
      question: 'Qual é a garantia dos veículos seminovos?',
      answer: 'Todos os nossos veículos seminovos vêm com garantia de 3 meses ou 5.000 km, o que ocorrer primeiro. Oferecemos também garantia estendida de até 5 anos com cobertura abrangente.',
      category: 'garantia'
    },
    {
      id: 10,
      question: 'Vocês fazem manutenção dos veículos vendidos?',
      answer: 'Sim! Temos oficina própria com equipe técnica especializada e certificada pelas montadoras. Oferecemos manutenção preventiva e corretiva com garantia em todos os serviços.',
      category: 'garantia'
    },
    {
      id: 11,
      question: 'Como funciona a garantia estendida?',
      answer: 'A garantia estendida cobre defeitos de fabricação e falhas mecânicas por até 5 anos. Inclui assistência 24/7, carro reserva e reparos em concessionárias autorizadas. É renovável anualmente.',
      category: 'garantia'
    },
    {
      id: 12,
      question: 'Os veículos passam por inspeção antes da venda?',
      answer: 'Sim! Todos os veículos passam por rigorosa inspeção técnica de 150 itens antes de serem oferecidos para venda. Só vendemos veículos em perfeitas condições de funcionamento.',
      category: 'garantia'
    },

    // Documentação e Processos
    {
      id: 13,
      question: 'Quanto tempo leva para transferir o veículo?',
      answer: 'O processo de transferência leva de 5 a 10 dias úteis, dependendo do DETRAN da região. Nossa equipe cuida de toda a documentação para facilitar o processo.',
      category: 'documentacao'
    },
    {
      id: 14,
      question: 'Vocês ajudam com a documentação?',
      answer: 'Sim! Nossa equipe especializada cuida de toda a documentação necessária para a compra, venda e transferência de veículos. Você não precisa se preocupar com burocracia.',
      category: 'documentacao'
    },
    {
      id: 15,
      question: 'Posso parcelar o IPVA e licenciamento?',
      answer: 'Sim! Oferecemos parcelamento do IPVA e licenciamento em até 12x sem juros. Isso facilita o planejamento financeiro e evita surpresas no início do ano.',
      category: 'documentacao'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todas', icon: HelpCircle },
    { id: 'compra', name: 'Compra', icon: Car },
    { id: 'financiamento', name: 'Financiamento', icon: CreditCard },
    { id: 'garantia', name: 'Garantia', icon: Shield },
    { id: 'documentacao', name: 'Documentação', icon: FileText }
  ];

  const filteredFAQs = activeCategory === 'todos' 
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossos serviços, 
            processos de compra e financiamento.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-dark-700 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-dark-900 pr-4">
                    {item.question}
                  </span>
                  {openItems.includes(item.id) ? (
                    <Minus className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-dark-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-dark-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-dark-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-dark-700 mb-2">
              Nenhuma dúvida encontrada
            </h3>
            <p className="text-dark-600">
              Tente selecionar outra categoria ou entre em contato conosco.
            </p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para responder todas as suas perguntas 
              e ajudar você a encontrar a melhor solução.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Falar com Consultor
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Dicas Importantes
            </h3>
            <p className="text-dark-600">
              Informações úteis para uma compra segura e tranquila
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-dark-900 mb-2">
                Sempre peça o laudo técnico
              </h4>
              <p className="text-sm text-dark-600">
                Verifique se o veículo passou por inspeção técnica completa antes da compra.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-dark-900 mb-2">
                Documentação em dia
              </h4>
              <p className="text-sm text-dark-600">
                Certifique-se de que IPVA, licenciamento e multas estão em dia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-dark-900 mb-2">
                Compare as opções de financiamento
              </h4>
              <p className="text-sm text-dark-600">
                Analise diferentes prazos e taxas para encontrar a melhor opção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;