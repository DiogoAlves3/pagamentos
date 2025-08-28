import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  image: string;
  vehicle: string;
  date: string;
  verified: boolean;
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Silva',
      role: 'Empresário',
      company: 'Tech Solutions Ltda',
      rating: 5,
      comment: 'Excelente experiência! A equipe foi muito profissional desde o primeiro contato. O processo de financiamento foi transparente e rápido. Recomendo para todos que buscam um veículo de qualidade.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'BMW Série 3 2023',
      date: 'Dezembro 2023',
      verified: true
    },
    {
      id: 2,
      name: 'Ana Costa',
      role: 'Advogada',
      company: 'Escritório Costa & Associados',
      rating: 5,
      comment: 'Comprei meu primeiro carro aqui e foi uma experiência incrível. O consultor me ajudou a escolher o modelo ideal para minhas necessidades e o financiamento ficou com condições excelentes.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'Honda Civic 2023',
      date: 'Novembro 2023',
      verified: true
    },
    {
      id: 3,
      name: 'Roberto Santos',
      role: 'Médico',
      company: 'Hospital São Lucas',
      rating: 5,
      comment: 'Já é meu terceiro carro comprado nesta concessionária. A qualidade do atendimento e a confiança que transmitem são incomparáveis. Sempre recomendo para amigos e familiares.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'Mercedes-Benz Classe C 2022',
      date: 'Outubro 2023',
      verified: true
    },
    {
      id: 4,
      name: 'Mariana Lima',
      role: 'Arquiteta',
      company: 'Studio Lima Arquitetura',
      rating: 5,
      comment: 'O processo de troca do meu carro usado foi muito simples e transparente. Recebi uma avaliação justa e o novo veículo superou todas as expectativas. Equipe muito competente!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'Audi A4 2023',
      date: 'Setembro 2023',
      verified: true
    },
    {
      id: 5,
      name: 'Fernando Oliveira',
      role: 'Engenheiro',
      company: 'Construtora Oliveira',
      rating: 5,
      comment: 'Atendimento de primeira linha! O consultor entendeu perfeitamente minhas necessidades e encontrou o veículo ideal. O financiamento ficou com condições muito vantajosas.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'Volkswagen Golf GTI 2021',
      date: 'Agosto 2023',
      verified: true
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentTestimonial(index);
  }, []);

  // Auto-play dos depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Conheça as experiências de quem já confiou em nós.
          </p>
        </div>

        {/* Estatísticas de satisfação */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-dark-600">Satisfação Geral</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-dark-600">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-dark-600">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-dark-600">Recomendariam</div>
          </div>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="relative max-w-4xl mx-auto">
          {/* Botões de navegação */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-dark-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-dark-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slides dos depoimentos */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    {/* Cabeçalho do depoimento */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          {testimonial.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full">
                              <CheckCircle className="w-3 h-3" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-dark-900">{testimonial.name}</h4>
                          <p className="text-dark-600">{testimonial.role}</p>
                          <p className="text-sm text-dark-500">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-sm text-dark-500">{testimonial.date}</p>
                      </div>
                    </div>

                    {/* Comentário */}
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-primary-400 mb-4" />
                      <blockquote className="text-lg text-dark-700 leading-relaxed italic">
                        "{testimonial.comment}"
                      </blockquote>
                    </div>

                    {/* Veículo comprado */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-dark-500">Veículo adquirido:</p>
                          <p className="font-semibold text-dark-900">{testimonial.vehicle}</p>
                        </div>
                        <div className="text-primary-600">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de slide */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA para deixar depoimento */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Fez uma compra conosco?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Compartilhe sua experiência e ajude outros clientes a conhecerem nossos serviços.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Deixar Depoimento
              </a>
              <a
                href="#contato"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>

        {/* Logos de parceiros/clientes */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-dark-600 text-lg">Empresas que confiam em nossos serviços</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Empresa A</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Empresa B</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Empresa C</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-16 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Empresa D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;