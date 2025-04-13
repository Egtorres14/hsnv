import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, EffectCreative } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';

import BookingButton from '../components/ui/BookingButton';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import RoomCard from '../components/ui/RoomCard';

import { FaClock, FaUtensils, FaSwimmer, FaConciergeBell, FaSpa } from 'react-icons/fa';

const Home = () => {

  // Datos para el slider Hero
  const heroSlides = [
    {
      image: '/images/Hotel_frente.jpg',
      title: 'Su puerta a la magia de Santa Marta',
      subtitle: 'Donde la hospitalidad caribeña se encuentra con el confort contemporáneo'
    },
    {
      image: '/images/Recepcion_hotel.JPG',
      title: 'Bienvenido a su oasis de confort',
      subtitle: 'Comenzamos a crear sus recuerdos desde el primer instante'
    },
    {
      image: '/images/Espacio_verde.jpg',
      title: 'Respire tranquilidad en cada rincón',
      subtitle: 'Espacios naturales diseñados para su descanso y bienestar'
    },
    {
      image: '/images/Comedor_hotel.jpg',
      title: 'Sabores que despiertan los sentidos',
      subtitle: 'Experimente la auténtica gastronomía local en un ambiente acogedor'
    },
    {
      image: '/images/Habitaciones_piso_1.JPG',
      title: 'Su santuario de descanso perfecto',
      subtitle: 'Ambientes acogedores diseñados para brindarle la mejor experiencia'
    },
    {
      image: '/images/Habitaciones_piso_2.JPG',
      title: 'Elegancia y confort en las alturas',
      subtitle: 'Despierte con nuevas perspectivas y energías renovadas'
    }
  ];

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

  // Habitaciones destacadas (usando datos reales)
  const featuredRooms = [
    {
      id: 5,
      title: 'Habitación Quíntuple',
      description: 'Espaciosa habitación diseñada para grupos o familias numerosas, con todas las comodidades necesarias.',
      images: ['/images/Habitacion_quintuple_1.JPG', '/images/Habitacion_quintuple_2.JPG'],
      price: 'Desde COP 250.000',
      capacity: 5,
      type: 'quintuple',
      services: ['wifi', 'tv', 'ac'],
    },
    {
      id: 4,
      title: 'Habitación Doble Superior',
      description: 'Amplia habitación con cama doble y acabados superiores, ideal para parejas que buscan una experiencia confortable.',
      images: ['/images/Habitacion_doble_superior_1.JPG', '/images/Habitacion_doble_superior_2.JPG', '/images/Habitacion_doble_superior_3.JPG'],
      price: 'Desde COP 140.000',
      capacity: 2,
      type: 'doble-superior',
      services: ['wifi', 'tv', 'ac'],
    },
    {
      id: 6,
      title: 'Habitación Triple',
      description: 'Confortable habitación para tres personas, perfecta para pequeños grupos que buscan comodidad compartida.',
      images: ['/images/Habitacion_triple_1.JPG', '/images/Habitacion_triple_2.JPG', '/images/Habitacion_triple_3.JPG'],
      price: 'Desde COP 150.000',
      capacity: 3,
      type: 'triple',
      services: ['wifi', 'tv', 'ac'],
    },
  ];

  // Testimonios reales
  const testimonials = [
    {
      name: 'Nixon Padilla',
      comment: 'Excelente servicio prestado por el personal del hotel, mucha hospitalidad por parte de los mismo, ambiente muy agradable, en general un excelente servicio en el hotel.',
      rating: 5,
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjXDNwHOHRijTFv3TISWcM2vFKWaUETBaH_HzRzU6MCZUM4VihxM=w60-h60-p-rp-mo-br100',
      reviewUrl: 'https://maps.app.goo.gl/v9jQG9Xnn7gK2j8k9',
    },
    {
      name: 'Iván Zsilavecz',
      comment: 'El lugar es el más bonito en el que hemos estado desde que llegamos a Colombia. Un lugar moderno, muy limpio, muy cómodo. Un colchón increíble, agua tibia para bañarse. La atención del personal es realmente excepcional. Recomendado al 100%',
      rating: 5,
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjUZjmpv9e44OFHHle-PJaEH2GhUkD6IpEt9zejWmcByCHj4UxBJZg=w60-h60-p-rp-mo-ba4-br100',
      reviewUrl: 'https://maps.app.goo.gl/c91DabZfRjsQWkHu8',
    },
    {
      name: 'Rafael Navarro',
      comment: 'Excelente atención y habitaciónes limpias y órdenadas. Muy pulcras. Muy buen hotel, volveré',
      rating: 5,
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjUmVFq8jNCJF_7mP0dKze9GnBLPhjHyTH5_DXAr5jBv9kPPIT9pQQ=w60-h60-p-rp-mo-ba2-br100',
      reviewUrl: 'https://maps.app.goo.gl/rL6SUN1LqD4pRuzg8',
    },
    {
      name: 'Andrés Said Pardey Pabón',
      comment: 'Excelente servicio, bastante amistosos y muy buenas prestaciones.',
      rating: 5,
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjWQZ2ljUtgQP9TiII-FCAFKxsRVzIV4NR38oxoNEliNAi0RK1YM8w=w60-h60-p-rp-mo-br100',
      reviewUrl: 'https://maps.app.goo.gl/sqWApcp4qQb7vhXK8',
    },
    {
      name: 'Norella Rivera',
      comment: 'Me encantó pasar mis días de vacaciones en este hotel, el personal de servicio es muy agradable y servicial. Dispone de acceso a wifi y televisión en las habitaciones. Las habitaciones y los baños están muy limpios. El hotel cuenta con buenos espacios para crear contenido en redes sociales. Sin duda es una de las mejores opciones para alojarse en el centro histórico.',
      rating: 5,
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjW0ZPy1Dnp3TcGwjOO34_Urg8eJhFXnPYRJbZkOUocJbyEpnXtUXA=w60-h60-p-rp-mo-ba3-br100',
      reviewUrl: 'https://maps.app.goo.gl/7ReaisD9xHqB9WCR8',
    },
  ];

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://hotelsierranevada.com/#hotel",
    "name": "Hotel Sierra Nevada",
    "image": [
      "https://hotelsierranevada.com/images/Hotel_frente.jpg",
      "https://hotelsierranevada.com/images/Recepcion_hotel.JPG",
      "https://hotelsierranevada.com/images/Espacio_verde.jpg"
    ],
    "description": "Hotel boutique en el corazón del centro histórico de Santa Marta, ofreciendo habitaciones confortables y servicio excepcional. Ubicación privilegiada cerca al Parque Nacional Tayrona y principales atracciones turísticas.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 21 # 6-73",
      "addressLocality": "Santa Marta",
      "addressRegion": "Magdalena",
      "postalCode": "470004",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.240798",
      "longitude": "-74.209410"
    },
    "telephone": "+573127417352",
    "email": "htsierranevada@gmail.com",
    "url": "https://hotelsierranevada.com",
    "priceRange": "COP 120.000 - COP 250.000",
    "paymentAccepted": ["cash", "credit card", "debit card"],
    "currenciesAccepted": "COP",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "WiFi Gratuito" },
      { "@type": "LocationFeatureSpecification", "name": "Aire Acondicionado" },
      { "@type": "LocationFeatureSpecification", "name": "Recepción 24 Horas" },
      { "@type": "LocationFeatureSpecification", "name": "Smart TV" }
    ],
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": testimonials.length,
      "bestRating": "5"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewBody": testimonial.comment
    })),
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://hotelsierranevada.com/#booking",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "LodgingReservation",
        "name": "Reserva de Habitación"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Hotel Sierra Nevada - Su hogar en Santa Marta | Hotel Boutique en el Centro Histórico</title>
        <meta name="description" content="Experimente la hospitalidad caribeña en el Hotel Sierra Nevada, ubicado en el corazón del centro histórico de Santa Marta. Habitaciones confortables desde $120.000, WiFi gratis y excelente ubicación." />
        <meta name="keywords" content="hotel santa marta, hotel sierra nevada, alojamiento santa marta, hotel centro histórico, habitaciones santa marta, hotel económico santa marta" />
        <link rel="canonical" href="https://hotelsierranevada.com" />
        
        <meta property="og:title" content="Hotel Sierra Nevada - Su hogar en Santa Marta" />
        <meta property="og:description" content="Descubra el encanto del Caribe colombiano en nuestro hotel boutique. Habitaciones desde $120.000, ubicación privilegiada y servicio excepcional." />
        <meta property="og:image" content="https://hotelsierranevada.com/images/Hotel_frente.jpg" />
        <meta property="og:url" content="https://hotelsierranevada.com" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hotel Sierra Nevada - Santa Marta" />
        <meta name="twitter:description" content="Su puerta de entrada a memorias inolvidables en Santa Marta. Habitaciones confortables y ubicación privilegiada." />
        <meta name="twitter:image" content="https://hotelsierranevada.com/images/Hotel_frente.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(hotelSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          className="h-full"
          preloadImages={false}
          lazy={{
            loadPrevNext: true,
            loadPrevNextAmount: 1
          }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div 
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "low"}
                  decoding="async"
                />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.h2 
                  key={index + '-title'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl max-w-4xl font-serif"
                >
                  {slide.title}
                </motion.h2>
                <motion.p 
                  key={index + '-subtitle'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="max-w-2xl mb-8 text-lg"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div 
                  key={index + '-btn'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
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
            {/* Restored div structure */}
            <div> 
              <img src="/images/Recepcion_hotel.JPG" alt="Recepción del Hotel" className="object-cover w-full h-64 mb-4 rounded-lg" />
            </div>
            <div>
              <img src="/images/Espacio_verde.jpg" alt="Áreas Verdes del Hotel" className="object-cover w-full h-64 mb-4 rounded-lg" />
            </div>
            <div>
              <img src="/images/Comedor_hotel.jpg" alt="Comedor del Hotel" className="object-cover w-full h-64 mb-4 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* MARAUMAKE Ecolodge Section */}
      <section className="py-16 bg-secondary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <img src="/images/logo_maruamake.png" alt="MARAUMAKE Ecolodge Logo" className="h-32 mx-auto mb-8" />
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Descubra un paraíso ecológico donde la naturaleza y el confort se encuentran en perfecta armonía.
              Una experiencia única en la Sierra Nevada de Santa Marta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-64">
                <img src="/images/maruamake1.jpg" alt="MARAUMAKE Vista 1" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">Experiencia Natural</h3>
                <p className="text-secondary-600">Sumérgete en un entorno natural privilegiado, rodeado de la majestuosa Sierra Nevada.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-64">
                <img src="/images/maruamake2.jpg" alt="MARAUMAKE Vista 2" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">Confort Sostenible</h3>
                <p className="text-secondary-600">Disfruta del lujo en armonía con la naturaleza en nuestras exclusivas instalaciones.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-64">
                <img src="/images/maruamake3.jpg" alt="MARAUMAKE Vista 3" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">Paz y Tranquilidad</h3>
                <p className="text-secondary-600">Encuentra tu centro en un ambiente de serenidad y conexión con la naturaleza.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-64">
                <img src="/images/maruamake4.jpg" alt="MARAUMAKE Vista 4" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">Aventura Ecológica</h3>
                <p className="text-secondary-600">Vive experiencias únicas en un entorno natural incomparable.</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/nuestro-hotel#maraumake" 
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white transition-colors duration-300 rounded-md bg-primary-600 hover:bg-primary-700"
            >
              Saber más sobre MARAUMAKE
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
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
              Los precios de las habitaciones pueden variar en función de la temporada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
               // Corrected map structure
              <div key={room.id}>
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
      <section className="py-16 bg-primary-50 md:py-24 overflow-hidden">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Excelencia Reconocida</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Nuestros huéspedes hablan por nosotros. Descubra por qué somos la opción preferida en Santa Marta.
            </p>
          </div>
          
          <div className="relative max-w-[1400px] mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, EffectCreative]}
              pagination={{ 
                clickable: true,
                dynamicBullets: true
              }}
              autoplay={{ 
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              speed={1000}
              slidesPerView="auto"
              centeredSlides={true}
              slideToClickedSlide={true}
              grabCursor={true}
              effect="creative"
              creativeEffect={{
                limitProgress: 2,
                prev: {
                  translate: ["-120%", 0, -500],
                  rotate: [0, 0, -45],
                  scale: 0.8,
                  opacity: 0.5
                },
                next: {
                  translate: ["120%", 0, -500],
                  rotate: [0, 0, 45],
                  scale: 0.8,
                  opacity: 0.5
                }
              }}
              className="testimonials-swiper !overflow-visible py-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/slider-tour-santa-marta.jpg')` // Updated CTA background
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
              <a 
                href="https://maps.google.com/maps/dir//Hotel+Sierra+Nevada+centro+hist%C3%B3rico+y+cultural+Calle+21+%23+6-73+Santa+Marta,+Magdalena+Colombia/@11.240798,-74.2094107,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8ef4f57ba95ad43b:0xa06bb1fc5661b6fe"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Cómo llegar
              </a>
            </div>
            {/* Replaced image with Google Maps iframe and removed animate-on-scroll */}
            <div> 
              {/* Testing with fixed height h-96 */}
              <div className="overflow-hidden rounded-lg shadow-lg h-96"> 
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.6400203342334!2d-74.20941069999999!3d11.240798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f57ba95ad43b%3A0xa06bb1fc5661b6fe!2sHotel%20Sierra%20Nevada!5e0!3m2!1ses-419!2ses" 
                  className="w-full h-full border-0" // Ensure iframe fills container
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Ubicación del Hotel Sierra Nevada"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
