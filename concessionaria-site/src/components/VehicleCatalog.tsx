import React, { useState, useMemo } from 'react';
import { Search, Filter, Car, Calendar, Eye, Star } from 'lucide-react';

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
  featured: boolean;
}

const VehicleCatalog: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Dados simulados de veículos
  const vehicles: Vehicle[] = useMemo(() => [
    {
      id: 1,
      name: 'Honda Civic',
      brand: 'Honda',
      model: 'Civic',
      year: 2023,
      price: 125000,
      mileage: 15000,
      fuel: 'Flex',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      id: 2,
      name: 'Toyota Corolla',
      brand: 'Toyota',
      model: 'Corolla',
      year: 2022,
      price: 110000,
      mileage: 25000,
      fuel: 'Flex',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      featured: false
    },
    {
      id: 3,
      name: 'Volkswagen Golf GTI',
      brand: 'Volkswagen',
      model: 'Golf GTI',
      year: 2021,
      price: 180000,
      mileage: 35000,
      fuel: 'Flex',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      id: 4,
      name: 'BMW Série 3',
      brand: 'BMW',
      model: 'Série 3',
      year: 2023,
      price: 280000,
      mileage: 8000,
      fuel: 'Flex',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      featured: false
    },
    {
      id: 5,
      name: 'Mercedes-Benz Classe C',
      brand: 'Mercedes-Benz',
      model: 'Classe C',
      year: 2022,
      price: 320000,
      mileage: 18000,
      fuel: 'Flex',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      featured: true
    },
    {
      id: 6,
      name: 'Audi A4',
      brand: 'Audi',
      model: 'A4',
      year: 2023,
      price: 250000,
      mileage: 12000,
      fuel: 'Flex',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      featured: false
    }
  ], []);

  const brands = ['all', ...Array.from(new Set(vehicles.map(v => v.brand)))];
  const models = ['all', ...Array.from(new Set(vehicles.map(v => v.model)))];
  const years = ['all', ...Array.from(new Set(vehicles.map(v => v.year)))].sort((a, b) => {
    if (a === 'all' || b === 'all') return 0;
    return (b as number) - (a as number);
  });

  // Filtros aplicados
  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand;
      const matchesModel = selectedModel === 'all' || vehicle.model === selectedModel;
      const matchesYear = selectedYear === 'all' || vehicle.year === parseInt(selectedYear);
      const matchesPrice = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
      const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesBrand && matchesModel && matchesYear && matchesPrice && matchesSearch;
    });
  }, [selectedBrand, selectedModel, selectedYear, priceRange, searchTerm, vehicles]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('pt-BR').format(mileage) + ' km';
  };

  return (
    <section id="estoque" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Nosso <span className="text-gradient">Estoque</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Explore nossa seleção premium de veículos novos e seminovos com as melhores condições do mercado.
          </p>
        </div>

        {/* Filtros e busca */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-end">
            {/* Busca */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-dark-700 mb-2">Buscar veículo</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                <input
                  type="text"
                  placeholder="Nome, marca ou modelo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Marca */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Marca</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand === 'all' ? 'Todas' : brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Modelo */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Modelo</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {models.map(model => (
                  <option key={model} value={model}>
                    {model === 'all' ? 'Todos' : model}
                  </option>
                ))}
              </select>
            </div>

            {/* Ano */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Ano</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'Todos' : year}
                  </option>
                ))}
              </select>
            </div>

            {/* Faixa de preço */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Preço até</label>
              <select
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value={500000}>R$ 500.000</option>
                <option value={300000}>R$ 300.000</option>
                <option value={200000}>R$ 200.000</option>
                <option value={150000}>R$ 150.000</option>
                <option value={100000}>R$ 100.000</option>
                <option value={50000}>R$ 50.000</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-dark-600">
              {filteredVehicles.length} veículo{filteredVehicles.length !== 1 ? 's' : ''} encontrado{filteredVehicles.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center space-x-2 text-dark-500">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filtros aplicados</span>
            </div>
          </div>
        </div>

        {/* Grid de veículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className={`card group ${vehicle.featured ? 'ring-2 ring-primary-500' : ''}`}>
              {/* Imagem do veículo */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {vehicle.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Destaque
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Informações do veículo */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-dark-900 mb-1">{vehicle.name}</h3>
                    <p className="text-dark-600">{vehicle.brand} • {vehicle.model}</p>
                  </div>
                  {vehicle.featured && (
                    <Star className="w-5 h-5 text-primary-500 fill-current" />
                  )}
                </div>

                {/* Especificações */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-dark-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-primary-500" />
                    <span>{formatMileage(vehicle.mileage)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>

                {/* Preço */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary-600">{formatPrice(vehicle.price)}</div>
                  <p className="text-sm text-dark-500">ou 48x de {formatPrice(vehicle.price / 48)}</p>
                </div>

                {/* Botão de ação */}
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Ver Detalhes</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para ver mais veículos */}
        {filteredVehicles.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-outline text-lg px-8 py-4">
              Ver Todos os Veículos
            </button>
          </div>
        )}

        {/* Mensagem quando não há resultados */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-16">
            <Car className="w-16 h-16 text-dark-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-dark-700 mb-2">Nenhum veículo encontrado</h3>
            <p className="text-dark-600 mb-6">
              Tente ajustar os filtros ou entre em contato conosco para mais opções.
            </p>
            <button 
              onClick={() => {
                setSelectedBrand('all');
                setSelectedModel('all');
                setSelectedYear('all');
                setPriceRange([0, 500000]);
                setSearchTerm('');
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