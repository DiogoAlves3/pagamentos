import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Financiamento',
    description: 'Condições especiais de financiamento com as melhores taxas do mercado',
    icon: '💳',
    features: [
      'Taxas a partir de 1,29% a.m.',
      'Até 60 meses para pagar',
      'Aprovação em até 24h',
      'Sem entrada para aprovados',
      'Simulação online gratuita',
    ],
  },
  {
    id: '2',
    title: 'Troca de Usados',
    description: 'Avaliação justa do seu veículo usado para troca por um novo',
    icon: '🔄',
    features: [
      'Avaliação gratuita e justa',
      'Aceita qualquer marca/modelo',
      'Processo rápido e transparente',
      'Documentação inclusa',
      'Quitação de financiamento',
    ],
  },
  {
    id: '3',
    title: 'Manutenção',
    description: 'Oficina especializada com técnicos certificados e peças originais',
    icon: '🔧',
    features: [
      'Técnicos certificados',
      'Peças originais',
      'Garantia dos serviços',
      'Agendamento online',
      'Carro reserva disponível',
    ],
  },
  {
    id: '4',
    title: 'Garantia Estendida',
    description: 'Proteja seu investimento com planos de garantia estendida',
    icon: '🛡️',
    features: [
      'Cobertura nacional',
      'Até 5 anos de garantia',
      'Carro reserva incluso',
      'Assistência 24h',
      'Sem franquia',
    ],
  },
];