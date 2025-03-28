import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import BookingButton from '../components/ui/BookingButton';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import RoomCard from '../components/ui/RoomCard';

import { FaClock, FaUtensils, FaSwimmer, FaConciergeBell, FaSpa } from 'react-icons/fa';

const Home = () => {
  // Datos de ejemplo para servicios
  const services = [
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Recepción 24 Horas',
      description: 'Asistencia en recepción las 24 horas del día para check-in, check-out y consultas de huéspedes.',
    },
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: 'Restaurante y Bar',
      description: 'Disfrute de nuestra deliciosa gastronomía local e internacional en nuestro restaurante y bar.',
    },
    {
      icon: <FaSwimmer className="w-6 h-6" />,
      title: 'Piscina Exterior',
      description: 'Relájese en nuestra piscina exterior con vistas panorámicas a la ciudad de Santa Marta.',
    },
    {
      icon: <FaConciergeBell className="w-6 h-6" />,
      title: 'Servicio de Conserjería',
      description: 'Nuestro equipo le asistirá con reservas, recomendaciones y planificación de actividades en la ciudad.',
    },
    {
      icon: <FaSpa className="w-6 h-6" />,
      title: 'Spa y Bienestar',
      description: 'Revitalice cuerpo y mente con nuestros tratamientos de spa y servicios de bienestar.',
    },
  ];

  // Datos de ejemplo para habitaciones
  const featuredRooms = [
    {
      id: 1,
      title: 'Suite Real',
      description: 'Nuestra suite más lujosa con vistas panorámicas, sala de estar separada y todas las comodidades premium.',
      image: '/images/placeholder.jpg',
      price: 'COP 650.000',
      capacity: 6,
      bedType: '3 Camas King',
      services: ['wifi', 'tv', 'ac', 'coffee'],
    },
    {
      id: 2,
      title: 'Suite Presidencial',
      description: 'Elegante suite con amplio espacio, zona de estar y todas las comodidades de lujo para una estancia perfecta.',
      image: '/images/placeholder.jpg',
      price: 'COP 450.000',
      capacity: 4,
      bedType: '2 Camas King',
      services: ['wifi', 'tv', 'ac', 'coffee'],
    },
    {
      id: 3,
      title: 'Habitación Deluxe',
      description: 'Espaciosa habitación con cama king y todas las comodidades para una estancia confortable y relajante.',
      image: '/images/placeholder.jpg',
      price: 'COP 320.000',
      capacity: 2,
      bedType: '1 Cama King',
      services: ['wifi', 'tv', 'ac', 'coffee'],
    },
  ];

  // Datos de ejemplo para testimonios
  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      location: 'Bogotá, Colombia',
      comment: 'Nuestra estancia en el Hotel Sierra Nevada fue excepcional. El personal fue atento y las instalaciones son de primera clase. Las vistas desde nuestra habitación eran impresionantes.',
      rating: 5,
      image: '/images/placeholder-avatar.jpg',
    },
    {
      name: 'María González',
      location: 'Medellín, Colombia',
      comment: 'Un oasis de tranquilidad en Santa Marta. El servicio fue impecable y la ubicación perfecta para explorar el centro histórico. Definitivamente volveremos.',
      rating: 5,
      image: '/images/placeholder-avatar.jpg',
    },
    {
      name: 'Pedro Sánchez',
      location: 'Barranquilla, Colombia',
      comment: 'Excelente relación calidad-precio. La habitación era espaciosa y limpia, y el desayuno fue delicioso. El personal hizo todo lo posible para hacer nuestra estancia memorable.',
      rating: 4,
      image: '/images/placeholder-avatar.jpg',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          {[1, 2, 3].map((item) => (
            <SwiperSlide key={item} className="relative">
              <div 
                className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
                style={{ 
                  backgroundImage: `url('/images/placeholder.jpg')`,
                  backgroundColor: '#1a202c'
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
              <div className="container relative flex flex-col items-center justify-center h-full text-center text-white">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl font-serif"
                >
                  Su puerta de entrada a<br /> memorias inolvidables
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl mb-8 text-lg"
                >
                  Experimente alojamiento de lujo, servicios de clase mundial y atención personalizada en el corazón de Santa Marta.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <BookingButton />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Bienvenido al mundo de lujo y confort</h2>
            <p className="mb-8 text-lg text-secondary-600">
              Experimente una estadía como ninguna otra, donde la indulgencia no conoce límites y cada uno de sus deseos es nuestra prioridad. Únase a nosotros para redefinir el arte de la hospitalidad, y déjenos consentirlo en un mundo donde el lujo y la comodidad se entrelazan a la perfección. Bienvenido a un viaje de elegancia, bienvenido a su escape extraordinario.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="animate-on-scroll">
              <img src="/images/placeholder.jpg" alt="Hotel Lobby" className="object-cover w-full h-64 mb-4 rounded-lg" />
            </div>
            <div className="animate-on-scroll">
              <img src="/images/placeholder.jpg" alt="Hotel Pool" className="object-cover w-full h-64 mb-4 rounded-lg" />
            </div>
            <div className="animate-on-scroll">
              <img src="/images/placeholder.jpg" alt="Hotel Restaurant" className="object-cover w-full h-64 mb-4 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Instalaciones y Servicios</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Descubra un reino donde la opulencia se encuentra con la tranquilidad, donde cada momento es una sinfonía de relajación y refinamiento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Nuestras Habitaciones de Lujo</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Elija entre nuestras elegantes habitaciones y suites, todas diseñadas con su comodidad y relajación en mente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
              <div key={room.id} className="animate-on-scroll">
                <RoomCard room={room} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/habitaciones" 
              className="btn btn-secondary"
            >
              Ver todas las habitaciones
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Excelencia Reconocida</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Nuestros huéspedes hablan por nosotros. Descubra por qué somos la opción preferida en Santa Marta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-on-scroll">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/placeholder.jpg')` 
        }}
      >
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Reserve su estancia hoy</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Disfrute de una experiencia inolvidable en el corazón de Santa Marta. Reserve ahora y obtenga las mejores tarifas garantizadas.
          </p>
          <BookingButton />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Ubicación Privilegiada</h2>
              <p className="mb-4 text-lg text-secondary-600">
                El Hotel Sierra Nevada se encuentra estratégicamente ubicado a pocas cuadras del centro histórico de Santa Marta, ofreciendo fácil acceso a los principales puntos de interés.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>A 5 minutos a pie del centro histórico</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>A 10 minutos en auto de la Playa de Rodadero</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>A 20 minutos en auto del Parque Nacional Tayrona</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>A 15 minutos del Aeropuerto Internacional Simón Bolívar</span>
                </li>
              </ul>
              <Link to="/contacto" className="btn btn-primary">
                Cómo llegar
              </Link>
            </div>
            <div className="animate-on-scroll">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/placeholder.jpg" alt="Mapa de ubicación" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;