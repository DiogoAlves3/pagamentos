import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  image: string;
  vehicle: string;
  date: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Silva',
      role: 'Empresário',
      company: 'Silva & Associados',
      rating: 5,
      content: 'Excelente experiência! A equipe foi muito profissional desde o primeiro contato. O processo de financiamento foi transparente e rápido. Recomendo fortemente para quem busca um veículo de qualidade.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'BMW 320i 2022',
      date: 'Dezembro 2023'
    },
    {
      id: 2,
      name: 'Ana Costa',
      role: 'Advogada',
      company: 'Escritório Costa',
      rating: 5,
      content: 'Comprei meu primeiro carro aqui e foi uma experiência incrível. A equipe me orientou em cada etapa, explicou todas as opções de financiamento e me ajudou a escolher o veículo ideal para minhas necessidades.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'Honda Civic 2022',
      date: 'Novembro 2023'
    },
    {
      id: 3,
      name: 'Roberto Santos',
      role: 'Médico',
      company: 'Hospital São Lucas',
      rating: 5,
      content: 'Troquei meu carro usado por um seminovo aqui. A avaliação foi justa e o processo de troca foi muito simples. O novo veículo está em perfeito estado, exatamente como descrito.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'Volkswagen Golf GTI 2021',
      date: 'Outubro 2023'
    },
    {
      id: 4,
      name: 'Mariana Lima',
      role: 'Arquiteta',
      company: 'Studio Lima',
      rating: 5,
      content: 'Atendimento excepcional! A equipe foi muito atenciosa e paciente com todas as minhas dúvidas. O financiamento foi aprovado rapidamente e as parcelas cabem perfeitamente no meu orçamento.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'Toyota Corolla 2023',
      date: 'Setembro 2023'
    },
    {
      id: 5,
      name: 'Fernando Oliveira',
      role: 'Engenheiro',
      company: 'Oliveira Construções',
      rating: 5,
      content: 'Já é minha terceira compra nesta concessionária. A qualidade dos veículos e o atendimento sempre superam as expectativas. Eles realmente se preocupam com a satisfação do cliente.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      vehicle: 'Mercedes-Benz Classe A 2023',
      date: 'Agosto 2023'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Conheça a experiência de quem já realizou o sonho de ter um carro 
            através da nossa concessionária.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
          >
            <ChevronLeft className="w-6 h-6 text-dark-600 group-hover:text-primary-600 transition-colors duration-200" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
          >
            <ChevronRight className="w-6 h-6 text-dark-600 group-hover:text-primary-600 transition-colors duration-200" />
          </button>

          {/* Testimonial Content */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl text-dark-700 leading-relaxed mb-8 max-w-3xl mx-auto italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h4 className="text-xl font-bold text-dark-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-dark-600">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-2 text-sm text-dark-500">
                    <span>Veículo: {testimonials[currentTestimonial].vehicle}</span>
                    <span>•</span>
                    <span>{testimonials[currentTestimonial].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Por que confiar em nós?
            </h3>
            <p className="text-lg text-dark-600">
              Números que comprovam nossa excelência no atendimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-dark-900 mb-2">98%</div>
              <div className="text-dark-600">Satisfação dos Clientes</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-dark-900 mb-2">5000+</div>
              <div className="text-dark-600">Veículos Vendidos</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-dark-900 mb-2">24h</div>
              <div className="text-dark-600">Aprovação de Crédito</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-dark-900 mb-2">20+</div>
              <div className="text-dark-600">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Junte-se aos nossos clientes satisfeitos!
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
                Ver Mais Depoimentos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;