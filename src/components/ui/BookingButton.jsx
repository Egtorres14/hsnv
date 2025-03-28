import React from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../../contexts/UIContext';

const BookingButton = ({ isSmall, className = '', withIcon = true }) => {
  const { toggleBookingForm } = useUI();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleBookingForm}
      className={`btn ${isSmall ? 'px-4 py-2 text-sm' : 'px-6 py-3'} bg-accent-500 hover:bg-accent-600 text-white rounded-md font-medium transition-all duration-300 ${className}`}
    >
      {withIcon && (
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      )}
      Reserve Ahora
    </motion.button>
  );
};

export default BookingButton;