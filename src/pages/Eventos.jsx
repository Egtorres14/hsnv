import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaUtensils, FaGlassMartiniAlt } from 'react-icons/fa';

const Eventos = () => {
  // Próximos eventos
  const upcomingEvents = [
    {
      title: 'Noche de Cata de Vinos',
      description: 'Únase a nosotros para una velada de vinos selectos y deliciosos aperitivos en nuestro elegante salón.',
      date: 'Todos los viernes',
      time: '19:00 - 23:00',
      image: '/images/placeholder.jpg',
    },
    {
      title: 'Música en Vivo',
      description: 'Disfrute de actuaciones de artistas locales todos los viernes por la noche en nuestra terraza con vistas al mar.',
      date: 'Todos los viernes',
      time: '20:00 - 00:00',
      image: '/images/placeholder.jpg',
    },
    {
      title: 'Brunch Dominical',
      description: 'Deléitese con un lujoso buffet de brunch que incluye platos gourmet y mimosas ilimitadas.',
      date: 'Todos los domingos',
      time: '10:00 - 14:00',
      image: '/images/placeholder.jpg',
    },
  ];

  // Tipos de eventos que organizamos
  const eventTypes = [
    {
      title: 'Bodas',
      description: 'Celebre su día especial en nuestros hermosos espacios con atención personalizada y servicios de catering de alta calidad.',
      image: '/images/placeholder.jpg',
      icon: <FaGlassMartiniAlt className="w-8 h-8 text-primary-500" />,
    },
    {
      title: 'Conferencias',
      description: 'Espacios versátiles con la última tecnología audiovisual para sus reuniones de negocios, conferencias y presentaciones.',
      image: '/images/placeholder.jpg',
      icon: <FaUsers className="w-8 h-8 text-primary-500" />,
    },
    {
      title: 'Celebraciones',
      description: 'El lugar perfecto para aniversarios, cumpleaños, graduaciones y cualquier ocasión especial que merezca ser celebrada.',
      image: '/images/placeholder.jpg',
      icon: <FaCalendarAlt className="w-8 h-8 text-primary-500" />,
    },
    {
      title: 'Banquetes',
      description: 'Experiencias gastronómicas excepcionales con menús personalizados para satisfacer todos los gustos y preferencias dietéticas.',
      image: '/images/placeholder.jpg',
      icon: <FaUtensils className="w-8 h-8 text-primary-500" />,
    },
  ];

  // Datos de espacios para eventos
  const eventSpaces = [
    {
      name: 'Salón Real',
      capacity: '150 personas',
      features: ['250 m²', 'Iluminación ajustable', 'Equipo audiovisual integrado', 'Acceso a terraza'],
      description: 'Nuestro salón más amplio y elegante, perfecto para bodas y grandes celebraciones.',
      image: '/images/placeholder.jpg',
    },
    {
      name: 'Sala Ejecutiva',
      capacity: '40 personas',
      features: ['80 m²', 'Configuración flexible', 'Conexiones para videoconferencias', 'Luz natural'],
      description: 'Espacio ideal para reuniones de negocios, seminarios y presentaciones corporativas.',
      image: '/images/placeholder.jpg',
    },
    {
      name: 'Terraza Panorámica',
      capacity: '100 personas',
      features: ['200 m²', 'Vistas al mar', 'Parcialmente cubierta', 'Sistema de sonido'],
      description: 'Una impresionante terraza al aire libre con vistas panorámicas, perfecta para eventos al atardecer.',
      image: '/images/placeholder.jpg',
    },
    {
      name: 'Salón Privado',
      capacity: '20 personas',
      features: ['40 m²', 'Ambiente íntimo', 'Servicio personalizado', 'Decoración elegante'],
      description: 'Un espacio acogedor para cenas privadas y pequeñas celebraciones familiares.',
      image: '/images/placeholder.jpg',
    },
  ];

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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl font-serif">Eventos</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Creamos experiencias memorables para cada ocasión especial. Desde bodas elegantes hasta reuniones corporativas exitosas.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Próximos Eventos</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Participe en nuestros eventos especiales diseñados para enriquecer su experiencia durante su estancia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-md animate-on-scroll"
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                  <p className="mb-4 text-secondary-600">{event.description}</p>
                  <div className="flex items-center text-primary-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{event.date}, {event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Type of Events */}
      <section className="py-16 bg-secondary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Tipos de Eventos</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Creamos experiencias personalizadas para cada tipo de evento, adaptándonos a sus necesidades y preferencias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {eventTypes.map((type, index) => (
              <div 
                key={index} 
                className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md md:flex-row animate-on-scroll"
              >
                <div className="md:w-2/5">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:w-3/5">
                  <div className="flex items-center mb-4">
                    {type.icon}
                    <h3 className="ml-3 text-xl font-bold">{type.title}</h3>
                  </div>
                  <p className="text-secondary-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Nuestros Espacios</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Disponemos de diversos espacios versátiles que pueden adaptarse a sus necesidades específicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {eventSpaces.map((space, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="overflow-hidden bg-white rounded-lg shadow-md animate-on-scroll"
              >
                <div className="relative h-64">
                  <img 
                    src={space.image} 
                    alt={space.name} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">{space.name}</h3>
                    <p className="text-white/90">Capacidad: {space.capacity}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-secondary-600">{space.description}</p>
                  <h4 className="mb-2 font-semibold">Características:</h4>
                  <ul className="pl-5 mb-4 space-y-1 list-disc text-secondary-600">
                    {space.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Planning Services */}
      <section className="py-16 bg-primary-50 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="animate-on-scroll">
              <img src="/images/placeholder.jpg" alt="Planificación de eventos" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold font-serif">Servicios de Planificación</h2>
              <p className="mb-6 text-lg text-secondary-600">
                Nuestro equipo de expertos en eventos está a su disposición para ayudarle a planificar cada detalle de su evento, garantizando una experiencia sin contratiempos y memorable.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Planificación personalizada de eventos</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Servicios de catering con menús personalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Decoración y arreglos florales temáticos</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Equipos audiovisuales y asistencia técnica</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Coordinación con proveedores externos</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Alojamiento para invitados con tarifas especiales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Lo que dicen nuestros clientes</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Descubra por qué somos el lugar elegido para eventos inolvidables en Santa Marta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 italic text-secondary-600">
                "La boda de nuestros sueños se hizo realidad gracias al increíble equipo del Hotel Sierra Nevada. La atención al detalle y el servicio excepcional hicieron que nuestro día especial fuera perfecto."
              </p>
              <div className="flex items-center">
                <img 
                  src="/images/placeholder-avatar.jpg" 
                  alt="Cliente" 
                  className="object-cover w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <h4 className="font-bold">Ana y Roberto</h4>
                  <p className="text-sm text-secondary-500">Boda, marzo 2023</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 italic text-secondary-600">
                "Organizamos nuestra conferencia anual en el Hotel Sierra Nevada y quedamos impresionados con la profesionalidad y flexibilidad del equipo. Las instalaciones son excelentes y el servicio fue impecable."
              </p>
              <div className="flex items-center">
                <img 
                  src="/images/placeholder-avatar.jpg" 
                  alt="Cliente" 
                  className="object-cover w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <h4 className="font-bold">Carlos Vega</h4>
                  <p className="text-sm text-secondary-500">Conferencia empresarial, enero 2023</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 italic text-secondary-600">
                "Celebramos el 50 aniversario de nuestros padres en el Salón Privado y fue una experiencia inolvidable. La comida fue exquisita y el servicio atento. Definitivamente recomendaría este lugar para cualquier celebración familiar."
              </p>
              <div className="flex items-center">
                <img 
                  src="/images/placeholder-avatar.jpg" 
                  alt="Cliente" 
                  className="object-cover w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <h4 className="font-bold">Familia Martínez</h4>
                  <p className="text-sm text-secondary-500">Celebración familiar, junio 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section 
        className="py-20 text-white bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/placeholder.jpg')` 
        }}
      >
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">¿Planea un evento?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Nuestro equipo de especialistas en eventos está listo para ayudarle a crear una experiencia inolvidable. Contáctenos hoy para comenzar a planificar su evento.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link to="/contacto" className="btn btn-primary">
              Solicitar información
            </Link>
            <a href="tel:+573001234567" className="btn btn-secondary">
              Llamar: +57 300 123 4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eventos;