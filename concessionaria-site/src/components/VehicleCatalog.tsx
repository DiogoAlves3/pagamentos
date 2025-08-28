import React, { useState } from 'react';
import { Filter, Search, Car, Calendar, DollarSign, Eye, Heart } from 'lucide-react';

interface Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  image: string;
  isNew: boolean;
  isPromotion: boolean;
}

const VehicleCatalog: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - em um projeto real viria de uma API
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Honda Civic',
      brand: 'Honda',
      model: 'Civic',
      year: 2022,
      price: 125000,
      mileage: 15000,
      fuel: 'Flex',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isNew: false,
      isPromotion: true
    },
    {
      id: 2,
      name: 'Toyota Corolla',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2023,
      price: 145000,
      mileage: 8000,
      fuel: 'Flex',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isNew: true,
      isPromotion: false
    },
    {
      id: 3,
      name: 'Volkswagen Golf GTI',
      brand: 'Volkswagen',
      model: 'Golf GTI',
      year: 2021,
      price: 180000,
      mileage: 25000,
      fuel: 'Gasolina',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isNew: false,
      isPromotion: true
    },
    {
      id: 4,
      name: 'BMW 320i',
      brand: 'BMW',
      model: '320i',
      year: 2022,
      price: 280000,
      mileage: 18000,
      fuel: 'Gasolina',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isNew: false,
      isPromotion: false
    },
    {
      id: 5,
      name: 'Mercedes-Benz Classe A',
      brand: 'Mercedes-Benz',
      model: 'Classe A',
      year: 2023,
      price: 320000,
      mileage: 5000,
      fuel: 'Gasolina',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isNew: true,
      isPromotion: false
    },
    {
      id: 6,
      name: 'Audi A3',
      brand: 'Audi',
      model: 'A3',
      year: 2021,
      price: 220000,
      mileage: 22000,
      fuel: 'Gasolina',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isNew: false,
      isPromotion: true
    }
  ];

  const brands = Array.from(new Set(vehicles.map(v => v.brand)));
  const models = Array.from(new Set(vehicles.map(v => v.model)));
  const years = Array.from(new Set(vehicles.map(v => v.year))).sort((a, b) => b - a);

  const filteredVehicles = vehicles.filter(vehicle => {
    if (selectedBrand && vehicle.brand !== selectedBrand) return false;
    if (selectedModel && vehicle.model !== selectedModel) return false;
    if (selectedYear && vehicle.year !== parseInt(selectedYear)) return false;
    if (vehicle.price < priceRange[0] || vehicle.price > priceRange[1]) return false;
    return true;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <section id="estoque" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            Nosso Estoque
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Encontre o veículo perfeito para você. Todos os nossos carros passam por 
            rigorosa inspeção e vêm com garantia.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filtros</span>
              </button>
              <span className="text-sm text-dark-600">
                {filteredVehicles.length} veículos encontrados
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-dark-400" />
              <input
                type="text"
                placeholder="Buscar veículos..."
                className="px-3 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-dark-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Brand Filter */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Marca
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-3 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Todas as marcas</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Model Filter */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Modelo
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-3 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Todos os modelos</option>
                    {models.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>

                {/* Year Filter */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Ano
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-3 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Todos os anos</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Faixa de Preço
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full px-3 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-dark-400">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500000])}
                      className="w-full px-3 py-2 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              {/* Vehicle Image */}
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {vehicle.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Novo
                    </span>
                  )}
                  {vehicle.isPromotion && (
                    <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Promoção
                    </span>
                  )}
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-dark-600" />
                </button>
              </div>

              {/* Vehicle Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-dark-900">{vehicle.name}</h3>
                    <p className="text-sm text-dark-600">{vehicle.brand} • {vehicle.model}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">{formatPrice(vehicle.price)}</p>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-dark-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4" />
                    <span>{vehicle.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Combustível: {vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Câmbio: {vehicle.transmission}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Ver Detalhes</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredVehicles.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-3">
              Carregar Mais Veículos
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <Car className="w-16 h-16 text-dark-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-dark-700 mb-2">
              Nenhum veículo encontrado
            </h3>
            <p className="text-dark-600 mb-4">
              Tente ajustar os filtros ou entre em contato conosco.
            </p>
            <button 
              onClick={() => {
                setSelectedBrand('');
                setSelectedModel('');
                setSelectedYear('');
                setPriceRange([0, 500000]);
              }}
              className="btn-primary"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleCatalog;