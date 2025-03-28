import React from 'react';
import { motion } from 'framer-motion';
import BookingButton from './BookingButton';
import { FaBed, FaUsers, FaWifi, FaTv, FaSnowflake, FaCoffee } from 'react-icons/fa';

const RoomCard = ({ room }) => {
  const { 
    title, 
    description, 
    image, 
    price, 
    capacity, 
    bedType, 
    services = ['wifi', 'tv', 'ac', 'coffee'] 
  } = room;

  const serviceIcons = {
    wifi: <FaWifi className="text-primary-500" />,
    tv: <FaTv className="text-primary-500" />,
    ac: <FaSnowflake className="text-primary-500" />,
    coffee: <FaCoffee className="text-primary-500" />
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden bg-white rounded-lg shadow-md"
    >
      <div className="relative">
        <img 
          src={image || "/images/placeholder.jpg"} 
          alt={title} 
          className="object-cover w-full h-64"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-xl font-bold">{price} <span className="text-sm font-normal">/ noche</span></p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        
        <div className="flex items-center mb-4 space-x-4 text-sm text-secondary-600">
          <div className="flex items-center">
            <FaBed className="mr-1 text-primary-500" />
            <span>{bedType}</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-primary-500" />
            <span>Max: {capacity} personas</span>
          </div>
        </div>
        
        <p className="mb-4 text-secondary-600">{description}</p>
        
        <div className="flex items-center justify-between py-4 mb-4 border-t border-b border-secondary-200">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {serviceIcons[service]}
              <span className="mt-1 text-xs text-secondary-500">
                {service === 'wifi' && 'WiFi'}
                {service === 'tv' && 'Smart TV'}
                {service === 'ac' && 'A/C'}
                {service === 'coffee' && 'Cafetera'}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <BookingButton isSmall={true} className="w-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;