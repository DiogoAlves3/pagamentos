import React, { useState, useMemo } from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from './VehicleCard';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';

interface Filters {
  brand: string;
  model: string;
  yearMin: string;
  yearMax: string;
  priceMin: string;
  priceMax: string;
  fuelType: string;
  transmission: string;
  isNew: string;
}

const VehicleCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    brand: '',
    model: '',
    yearMin: '',
    yearMax: '',
    priceMin: '',
    priceMax: '',
    fuelType: '',
    transmission: '',
    isNew: '',
  });

  // Extract unique values for filter options
  const brands = [...new Set(vehicles.map(v => v.brand))].sort();
  const models = [...new Set(vehicles.map(v => v.model))].sort();
  const fuelTypes = [...new Set(vehicles.map(v => v.fuelType))].sort();
  const transmissions = [...new Set(vehicles.map(v => v.transmission))].sort();

  // Filter vehicles based on search and filters
  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());

      // Brand filter
      const matchesBrand = filters.brand === '' || vehicle.brand === filters.brand;
      
      // Model filter
      const matchesModel = filters.model === '' || vehicle.model === filters.model;
      
      // Year filter
      const matchesYearMin = filters.yearMin === '' || vehicle.year >= parseInt(filters.yearMin);
      const matchesYearMax = filters.yearMax === '' || vehicle.year <= parseInt(filters.yearMax);
      
      // Price filter
      const matchesPriceMin = filters.priceMin === '' || vehicle.price >= parseFloat(filters.priceMin);
      const matchesPriceMax = filters.priceMax === '' || vehicle.price <= parseFloat(filters.priceMax);
      
      // Fuel type filter
      const matchesFuelType = filters.fuelType === '' || vehicle.fuelType === filters.fuelType;
      
      // Transmission filter
      const matchesTransmission = filters.transmission === '' || vehicle.transmission === filters.transmission;
      
      // New/Used filter
      const matchesIsNew = filters.isNew === '' || 
        (filters.isNew === 'new' && vehicle.isNew) ||
        (filters.isNew === 'used' && !vehicle.isNew);

      return matchesSearch && matchesBrand && matchesModel && 
             matchesYearMin && matchesYearMax && matchesPriceMin && 
             matchesPriceMax && matchesFuelType && matchesTransmission && matchesIsNew;
    });
  }, [searchTerm, filters]);

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      brand: '',
      model: '',
      yearMin: '',
      yearMax: '',
      priceMin: '',
      priceMax: '',
      fuelType: '',
      transmission: '',
      isNew: '',
    });
    setSearchTerm('');
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '') || searchTerm !== '';

  return (
    <section id="vehicles" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Nosso Estoque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre o veículo perfeito para você com nossa seleção cuidadosa de carros novos e seminovos
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por marca, modelo ou nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-outline flex items-center space-x-2"
            >
              <FaFilter />
              <span>Filtros</span>
              {hasActiveFilters && (
                <span className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Brand */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Marca</label>
                  <select
                    value={filters.brand}
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Todas as marcas</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Modelo</label>
                  <select
                    value={filters.model}
                    onChange={(e) => handleFilterChange('model', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Todos os modelos</option>
                    {models.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>

                {/* Year Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ano (De)</label>
                  <input
                    type="number"
                    placeholder="2010"
                    min="2000"
                    max="2024"
                    value={filters.yearMin}
                    onChange={(e) => handleFilterChange('yearMin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ano (Até)</label>
                  <input
                    type="number"
                    placeholder="2024"
                    min="2000"
                    max="2024"
                    value={filters.yearMax}
                    onChange={(e) => handleFilterChange('yearMax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preço (De)</label>
                  <input
                    type="number"
                    placeholder="50000"
                    step="1000"
                    value={filters.priceMin}
                    onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preço (Até)</label>
                  <input
                    type="number"
                    placeholder="500000"
                    step="1000"
                    value={filters.priceMax}
                    onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Combustível</label>
                  <select
                    value={filters.fuelType}
                    onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Todos</option>
                    {fuelTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transmissão</label>
                  <select
                    value={filters.transmission}
                    onChange={(e) => handleFilterChange('transmission', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Todas</option>
                    {transmissions.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t">
                <span className="text-sm text-gray-600">
                  {filteredVehicles.length} veículo(s) encontrado(s)
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm"
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FaSearch size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum veículo encontrado
            </h3>
            <p className="text-gray-600 mb-4">
              Tente ajustar os filtros ou termo de busca
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="btn-primary"
              >
                Limpar filtros
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleCatalog;