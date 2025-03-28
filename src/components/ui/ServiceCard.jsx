import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-primary-600">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-secondary-600 flex-grow">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;