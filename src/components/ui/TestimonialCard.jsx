import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const { name, location, comment, rating, image } = testimonial;
  
  // Generar estrellas basadas en la calificación
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar 
      key={index} 
      className={`${index < rating ? 'text-accent-500' : 'text-secondary-300'}`} 
    />
  ));
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md h-full flex flex-col">
      <div className="flex-grow">
        <FaQuoteLeft className="mb-4 text-primary-300 text-2xl" />
        <p className="mb-4 italic text-secondary-600">{comment}</p>
      </div>
      
      <div className="flex items-center mt-4">
        <img 
          src={image || "/images/placeholder-avatar.jpg"} 
          alt={name} 
          className="object-cover w-12 h-12 mr-4 rounded-full"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-secondary-500">{location}</p>
          <div className="flex mt-1">
            {stars}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;