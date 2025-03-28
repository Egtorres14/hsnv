import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ui/ServiceCard';
import { Link } from 'react-router-dom';
import { 
  FaClock, 
  FaUtensils, 
  FaSwimmer, 
  FaConciergeBell, 
  FaSpa, 
  FaWifi,
  FaCar,
  FaBriefcase,
  FaTshirt,
  FaGlassMartiniAlt,
  FaShower,
  FaUserTie
} from 'react-icons/fa';

const Servicios = () => {
  // Servicios principales
  const mainServices = [
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
    {
      icon: <FaWifi className="w-6 h-6" />,
      title: 'Wi-Fi Gratuito',
      description: 'Conexión a internet de alta velocidad gratuita en todas las áreas del hotel.',
    },
  ];

  // Servicios adicionales
  const additionalServices = [
    {
      icon: <FaCar className="w-6 h-6" />,
      title: 'Servicio de Transporte',
      description: 'Traslados al aeropuerto y servicios de transporte a puntos de interés locales.',
    },
    {
      icon: <FaBriefcase className="w-6 h-6" />,
      title: 'Centro de Negocios',
      description: 'Espacio equipado para reuniones y necesidades empresariales durante su estancia.',
    },
    {
      icon: <FaTshirt className="w-6 h-6" />,
      title: 'Servicio de Lavandería',
      description: 'Servicio de lavandería y planchado disponible para todos nuestros huéspedes.',
    },
    {
      icon: <FaGlassMartiniAlt className="w-6 h-6" />,
      title: 'Bar en la Terraza',
      description: 'Disfrute de cócteles y aperitivos mientras contempla vistas panorámicas desde nuestra terraza.',
    },
    {
      icon: <FaShower className="w-6 h-6" />,
      title: 'Servicio de Habitaciones',
      description: 'Comidas y bebidas entregadas directamente a su habitación durante todo el día.',
    },
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: 'Servicio de Mayordomía',
      description: 'Atención personalizada de mayordomía disponible para suites y bajo solicitud.',
    },
  ];

  // Imágenes de servicios destacados
  const featuredServicesImages = [
    {
      src: '/images/placeholder.jpg',
      alt: 'Spa y Bienestar',
      title: 'Spa y Bienestar',
      description: 'Relájese y rejuvenezca con nuestros tratamientos premium.'
    },
    {
      src: '/images/placeholder.jpg',
      alt: 'Restaurante Gourmet',
      title: 'Restaurante Gourmet',
      description: 'Sabores auténticos de la cocina local e internacional.'
    },
    {
      src: '/images/placeholder.jpg',
      alt: 'Piscina Exterior',
      title: 'Piscina Exterior',
      description: 'Disfrute del sol caribeño en nuestra piscina panorámica.'
    }
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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl font-serif">Servicios e Instalaciones</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Descubra un mundo donde la opulencia se encuentra con la tranquilidad, donde cada momento es una sinfonía de relajación y refinamiento.
          </p>
        </div>
      </section>

      {/* Featured Services with Images */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServicesImages.map((service, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg group animate-on-scroll"
              >
                <img 
                  src={service.src} 
                  alt={service.alt} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-secondary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Nuestros Servicios Principales</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              En Hotel Sierra Nevada, nos esforzamos por ofrecer servicios excepcionales que garanticen una estancia cómoda y memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <div key={index} className="animate-on-scroll">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Servicios Adicionales</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Complementamos nuestra oferta principal con estos servicios adicionales para hacer su estancia aún más especial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, index) => (
              <div key={index} className="animate-on-scroll">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities in Rooms */}
      <section className="py-16 bg-primary-50 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold font-serif">Comodidades en las Habitaciones</h2>
              <p className="mb-6 text-lg text-secondary-600">
                Todas nuestras habitaciones están equipadas con comodidades premium para garantizar una estancia confortable y placentera.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Aire acondicionado con control individual</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Televisor Smart TV con canales premium</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Caja fuerte digital para objetos de valor</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Mini bar con selección de bebidas y snacks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Cafetera y hervidor eléctrico con selección de tés y cafés</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Amenidades de baño de lujo</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/habitaciones" className="btn btn-primary">
                  Ver nuestras habitaciones
                </Link>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <img src="/images/placeholder.jpg" alt="Amenidades de habitación" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Servicios para Negocios</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Ofrecemos instalaciones y servicios completos para satisfacer todas sus necesidades empresariales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="animate-on-scroll order-2 md:order-1">
              <img src="/images/placeholder.jpg" alt="Centro de negocios" className="rounded-lg shadow-lg" />
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="mb-4 text-2xl font-bold">Centro de Negocios</h3>
              <p className="mb-6 text-secondary-600">
                Nuestro centro de negocios completamente equipado ofrece todo lo que necesita para mantenerse productivo durante su estancia. Contamos con espacios de trabajo cómodos, equipos modernos y conexión a internet de alta velocidad.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Estaciones de trabajo con ordenadores de última generación</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Servicios de impresión, escáner y fotocopiado</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Salas de reuniones privadas con equipos audiovisuales</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-2 mr-4 text-white rounded-full bg-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Asistencia secretarial bajo petición</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contacto" className="btn btn-secondary">
                  Consulte disponibilidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-secondary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Servicios Especiales</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              ¿Está planeando una ocasión especial? Ofrecemos servicios personalizados para hacer de cualquier evento un momento inolvidable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Celebraciones Románticas</h3>
              <p className="text-secondary-600">Sorprenda a su pareja con decoración especial, champagne, pétalos de rosa y detalles románticos en su habitación.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Eventos Privados</h3>
              <p className="text-secondary-600">Organizamos cenas privadas, fiestas de cumpleaños y celebraciones especiales en espacios exclusivos del hotel.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Experiencias Gastronómicas</h3>
              <p className="text-secondary-600">Disfrute de una experiencia culinaria personalizada con nuestro chef en escenarios especiales dentro o fuera del hotel.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Servicios de Niñera</h3>
              <p className="text-secondary-600">Contamos con servicios de niñera profesional para que pueda disfrutar de su tiempo mientras sus hijos están bien atendidos.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Paquetes de Bienestar</h3>
              <p className="text-secondary-600">Diseñamos paquetes personalizados que incluyen tratamientos de spa, actividades físicas y alimentación saludable.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Tours Privados</h3>
              <p className="text-secondary-600">Organizamos excursiones privadas a los destinos más emblemáticos de Santa Marta y sus alrededores.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="mb-6 text-secondary-600">Para solicitar cualquiera de estos servicios o para consultarnos sobre otros servicios especiales, no dude en contactarnos.</p>
            <Link to="/contacto" className="btn btn-primary">
              Solicitar servicio especial
            </Link>
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Estamos aquí para servirle</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            En Hotel Sierra Nevada, nuestro objetivo es superar sus expectativas. Si necesita cualquier servicio adicional, no dude en consultarnos.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link to="/contacto" className="btn btn-primary">
              Contáctenos
            </Link>
            <Link to="/" className="btn btn-secondary">
              Reserve su estancia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicios;