import React from 'react';
import { motion } from 'framer-motion';
import BookingButton from './BookingButton';
import OptimizedImage from './OptimizedImage';
import { FaUsers, FaWifi, FaTv, FaSnowflake } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const RoomCard = ({ room }) => {
  const { 
    title, 
    description, 
    images, 
    price, 
    capacity, 
    services = ['wifi', 'tv', 'ac'] 
  } = room;

  const serviceIcons = {
    wifi: <FaWifi className="text-primary-500" />,
    tv: <FaTv className="text-primary-500" />,
    ac: <FaSnowflake className="text-primary-500" />
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden bg-white rounded-lg shadow-md"
    >
      <Swiper 
        modules={[Navigation, Pagination]} 
        spaceBetween={0} 
        slidesPerView={1} 
        navigation 
        pagination={{ clickable: true }}
        className="h-64"
        preloadImages={false}
        lazy={{
          loadPrevNext: true,
          loadOnTransitionStart: true
        }}
      >
        {(images && images.length > 0 ? images : ['/assets/images/placeholder.jpg']).map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <OptimizedImage 
              src={imgSrc} 
              alt={`${title} - Imagen ${index + 1}`} 
              className="object-cover w-full h-full"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
         <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-xl font-bold">{price} <span className="text-sm font-normal">/ noche</span></p>
        </div>
      </Swiper>
      
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        
        <div className="flex items-center mb-4 text-sm text-secondary-600">
          <div className="flex items-center">
            <FaUsers className="mr-1 text-primary-500" />
            <span>Max: {capacity} personas</span>
          </div>
        </div>
        
        <p className="mb-4 text-secondary-600">{description}</p>
        
        <div className="flex items-center justify-center gap-8 py-4 mb-4 border-t border-b border-secondary-200">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {serviceIcons[service]}
              <span className="mt-1 text-xs text-secondary-500">
                {service === 'wifi' && 'WiFi'}
                {service === 'tv' && 'Smart TV'}
                {service === 'ac' && 'A/C'}
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
