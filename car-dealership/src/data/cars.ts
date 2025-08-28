export type Car = {
  id: string
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuel: 'Gasolina' | 'Diesel' | 'Flex' | 'Elétrico' | 'Híbrido'
  transmission: 'Automático' | 'Manual'
  image: string
}

export const cars: Car[] = [
  {
    id: 'a4-2022',
    brand: 'Audi',
    model: 'A4',
    year: 2022,
    price: 209900,
    mileage: 18000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'a3-2021',
    brand: 'Audi',
    model: 'A3',
    year: 2021,
    price: 159900,
    mileage: 24000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '320i-2020',
    brand: 'BMW',
    model: '320i',
    year: 2020,
    price: 179900,
    mileage: 36000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'x1-2022',
    brand: 'BMW',
    model: 'X1',
    year: 2022,
    price: 239900,
    mileage: 12000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'c200-2019',
    brand: 'Mercedes',
    model: 'C 200',
    year: 2019,
    price: 169900,
    mileage: 52000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1616422285623-13ff0162193a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'gla-2021',
    brand: 'Mercedes',
    model: 'GLA 200',
    year: 2021,
    price: 229900,
    mileage: 27000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1511910849309-0dffb71f51ba?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'corolla-2023',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023,
    price: 139900,
    mileage: 8000,
    fuel: 'Híbrido',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'hilux-2018',
    brand: 'Toyota',
    model: 'Hilux',
    year: 2018,
    price: 189900,
    mileage: 78000,
    fuel: 'Diesel',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'civic-2020',
    brand: 'Honda',
    model: 'Civic',
    year: 2020,
    price: 129900,
    mileage: 42000,
    fuel: 'Gasolina',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'hrv-2022',
    brand: 'Honda',
    model: 'HR-V',
    year: 2022,
    price: 144900,
    mileage: 15000,
    fuel: 'Flex',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'model3-2021',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2021,
    price: 259900,
    mileage: 22000,
    fuel: 'Elétrico',
    transmission: 'Automático',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'onix-2022',
    brand: 'Chevrolet',
    model: 'Onix',
    year: 2022,
    price: 79900,
    mileage: 18000,
    fuel: 'Flex',
    transmission: 'Manual',
    image:
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1600&auto=format&fit=crop',
  },
]

