import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RoomCard from '../components/ui/RoomCard';
import { FaBed, FaUsers, FaWifi, FaTv, FaSnowflake, FaCoffee, FaSearch } from 'react-icons/fa';

const Habitaciones = () => {
  const [filter, setFilter] = useState('all');
  
  // Datos de ejemplo para todas las habitaciones
  const allRooms = [
    {
      id: 1,
      title: 'Suite Real',
      description: 'Nuestra suite más lujosa con vistas panorámicas, sala de estar separada y todas las comodidades premium.',
      image: '/images/placeholder.jpg',
      price: 'COP 650.000',
      capacity: 6,
      bedType: '3 Camas King',
      type: 'suite',
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
      type: 'suite',
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
      type: 'deluxe',
      services: ['wifi', 'tv', 'ac', 'coffee'],
    },
    {
      id: 4,
      title: 'Habitación Estándar',
      description: 'Acogedora habitación con todas las comodidades esenciales para una estadía confortable en Santa Marta.',
      image: '/images/placeholder.jpg',
      price: 'COP 250.000',
      capacity: 2,
      bedType: '1 Cama Queen',
      type: 'standard',
      services: ['wifi', 'tv', 'ac', 'coffee'],
    },
    {
      id: 5,
      title: 'Habitación Familiar',
      description: 'Amplia habitación ideal para familias, con espacio adicional y comodidades para todos los miembros.',
      image: '/images/placeholder.jpg',
      price: 'COP 380.000',
      capacity: 4,
      bedType: '2 Camas Queen',
      type: 'deluxe',
      services: ['wifi', 'tv', 'ac', 'coffee'],
    },
    {
      id: 6,
      title: 'Habitación con Vista al Mar',
      description: 'Disfrute de impresionantes vistas al mar Caribe desde esta confortable habitación.',
      image: '/images/placeholder.jpg',
      price: 'COP 350.000',
      capacity: 2,
      bedType: '1 Cama King',
      type: 'deluxe',
      services: ['wifi', 'tv', 'ac', 'coffee'],
    },
  ];

  // Filtrar habitaciones según selección
  const filteredRooms = filter === 'all' 
    ? allRooms 
    : allRooms.filter(room => room.type === filter);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-24 text-white bg-center bg-cover md:py-32"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/placeholder.jpg')` 
        }}
      >
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl font-serif">Nuestras Habitaciones</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Elija entre nuestra variedad de habitaciones y suites de lujo, todas diseñadas para ofrecerle la máxima comodidad y relajación.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
              }`}
            >
              Todas
            </button>
            <button 
              onClick={() => setFilter('standard')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'standard' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
              }`}
            >
              Estándar
            </button>
            <button 
              onClick={() => setFilter('deluxe')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'deluxe' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
              }`}
            >
              Deluxe
            </button>
            <button 
              onClick={() => setFilter('suite')}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === 'suite' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
              }`}
            >
              Suites
            </button>
          </div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredRooms.map((room) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="animate-on-scroll"
              >
                <RoomCard room={room} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Servicios en todas las habitaciones</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Para garantizar su confort, todas nuestras habitaciones incluyen las siguientes comodidades:
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg">
              <FaWifi className="w-8 h-8 mb-3 text-primary-600" />
              <h3 className="mb-2 text-lg font-semibold">Wi-Fi Gratuito</h3>
              <p className="text-sm text-center text-secondary-600">Conexión de alta velocidad en todo el hotel</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg">
              <FaTv className="w-8 h-8 mb-3 text-primary-600" />
              <h3 className="mb-2 text-lg font-semibold">Smart TV</h3>
              <p className="text-sm text-center text-secondary-600">Televisores con aplicaciones de streaming</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg">
              <FaSnowflake className="w-8 h-8 mb-3 text-primary-600" />
              <h3 className="mb-2 text-lg font-semibold">Aire Acondicionado</h3>
              <p className="text-sm text-center text-secondary-600">Control de temperatura independiente</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg">
              <FaCoffee className="w-8 h-8 mb-3 text-primary-600" />
              <h3 className="mb-2 text-lg font-semibold">Cafetera</h3>
              <p className="text-sm text-center text-secondary-600">Café y té de cortesía en la habitación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold font-serif">Políticas de reserva</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium">Política de cancelación</h3>
                    <p className="text-secondary-600">Cancelación gratuita hasta 72 horas antes de la llegada. Después de este período, se cobrará la primera noche.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="mb-6 text-2xl font-bold font-serif">Información adicional</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium">Política de mascotas</h3>
                    <p className="text-secondary-600">Se permiten mascotas pequeñas con cargo adicional. Por favor informe al momento de reservar.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium">Política de no fumar</h3>
                    <p className="text-secondary-600">No se permite fumar en ninguna de nuestras habitaciones. Contamos con áreas designadas para fumadores.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-medium">Servicios adicionales</h3>
                    <p className="text-secondary-600">Ofrecemos servicios adicionales como transporte, tours, lavandería y más con cargo adicional.</p>
                  </div>
                </div>
              </div>
            </div>
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">¿Listo para disfrutar de nuestras habitaciones?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Reserve ahora para obtener nuestras mejores tarifas garantizadas y disfrutar de una experiencia inolvidable en Santa Marta.
          </p>
          <button className="btn btn-accent">Reserve Ahora</button>
        </div>
      </section>
    </>
  );
};

export default Habitaciones;