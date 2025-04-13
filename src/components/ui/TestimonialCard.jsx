import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const { name, comment, rating, image, reviewUrl } = testimonial; 
  
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar 
      key={index} 
      className={`${index < rating ? 'text-accent-500' : 'text-secondary-300'} w-4 h-4`} 
    />
  ));

  return (
    <div 
      className="block h-full w-full p-6 bg-white rounded-lg shadow-lg transition-all duration-300 transform-gpu select-none cursor-grab"
    >
      <div className="flex flex-col h-full">
        <div className="flex-grow overflow-hidden">
          <FaQuoteLeft className="mb-4 text-primary-300 text-xl" />
          <p className="text-secondary-600 line-clamp-6 text-sm md:text-base italic leading-relaxed pointer-events-none">
            {comment}
          </p>
        </div>
        
        <div className="flex items-center pt-4 mt-4 border-t border-secondary-200">
          <img 
            src={image} 
            alt={name} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 object-cover pointer-events-none"
            draggable="false"
          />
          <div className="pointer-events-none">
            <h4 className="font-medium text-secondary-800 text-sm md:text-base">{name}</h4>
            <div className="flex mt-1 space-x-1">
              {stars}
            </div>
          </div>
          {reviewUrl && (
            <a 
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-primary-600 hover:text-primary-700"
              onClick={(e) => e.stopPropagation()}
            >
              <FaStar className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
