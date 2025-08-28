export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage?: number;
  fuelType: 'Flex' | 'Gasolina' | 'Diesel' | 'Elétrico' | 'Híbrido';
  transmission: 'Manual' | 'Automático' | 'CVT';
  color: string;
  features: string[];
  isNew: boolean;
  isSpecialOffer?: boolean;
  originalPrice?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  vehicle: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'compra' | 'financiamento' | 'garantia' | 'geral';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  vehicleInterest?: string;
}