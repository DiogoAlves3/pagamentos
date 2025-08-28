import React from 'react';
import { Vehicle } from '../types';
import { FaCar, FaGasPump, FaCogs, FaCalendarAlt, FaTachometerAlt, FaTag } from 'react-icons/fa';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const formatMileage = (mileage?: number) => {
    if (!mileage) return '0 km';
    return `${mileage.toLocaleString('pt-BR')} km`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {vehicle.isNew && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Novo
            </span>
          )}
          {vehicle.isSpecialOffer && (
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
              <FaTag className="text-xs" />
              <span>Oferta</span>
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 group/fav">
          <svg
            className="w-5 h-5 text-gray-600 group-hover/fav:text-primary-500 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Brand */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-500 transition-colors duration-300">
            {vehicle.name}
          </h3>
          <p className="text-gray-600 font-medium">{vehicle.brand} • {vehicle.model}</p>
        </div>

        {/* Vehicle Info */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-primary-500" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaTachometerAlt className="text-primary-500" />
            <span>{formatMileage(vehicle.mileage)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGasPump className="text-primary-500" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCogs className="text-primary-500" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {vehicle.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
              >
                {feature}
              </span>
            ))}
            {vehicle.features.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                +{vehicle.features.length - 3} mais
              </span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          {vehicle.originalPrice && (
            <div className="text-gray-500 line-through text-sm mb-1">
              {formatPrice(vehicle.originalPrice)}
            </div>
          )}
          <div className="text-2xl font-bold text-gray-900">
            {formatPrice(vehicle.price)}
          </div>
          <div className="text-sm text-gray-600">
            ou até 60x de {formatPrice(vehicle.price / 60)}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button className="flex-1 btn-primary text-sm py-2 px-4">
            Ver Detalhes
          </button>
          <button className="btn-outline text-sm py-2 px-4">
            Test Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;