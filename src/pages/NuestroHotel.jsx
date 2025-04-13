import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/ui/TestimonialCard';
import { FaMapMarkerAlt, FaArrowRight, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import BookingButton from '../components/ui/BookingButton';
import { Helmet } from 'react-helmet';

const NuestroHotel = () => {
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

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel Sierra Nevada",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1),
      "reviewCount": testimonials.length,
      "bestRating": "5"
    }
  };

  // Datos de ejemplo para atracciones cercanas
  const attractions = [
    {
      name: 'Parque de los Novios',
      description: 'Un vibrante parque en el centro histórico, ideal para pasear y disfrutar del ambiente local.', // Nueva descripción
      distance: '5 minutos a pie',
      image: "/images/Parque-De-Los-Novios.jpg", // Ruta corregida
    },
    {
      name: 'Playa del Rodadero',
      description: 'Popular playa turística con aguas tranquilas y diversas opciones de entretenimiento.',
      distance: '10 minutos en auto',
      image: '/images/playa-rodadero.jpg', // Ruta corregida
    },
    {
      name: 'Parque Nacional Tayrona',
      description: 'Impresionante parque nacional con playas vírgenes, selva tropical y senderismo.',
      distance: '30 minutos en auto',
      image: '/images/parque-tayrona.jpg', // Ruta corregida
    },
    {
      name: 'Ciudad Perdida',
      description: 'Sitio arqueológico precolombino en la Sierra Nevada, accesible mediante excursiones guiadas.',
      distance: 'Excursión de varios días',
      image: '/images/ciudad-perdida.jpg', // Ruta corregida
    },
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewsSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative py-24 text-white bg-center bg-cover md:py-32"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/espacio_verde.jpg')` 
        }}
      >
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl font-serif">Nuestro Hotel</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Bienvenido al Hotel Sierra Nevada, donde cada historia comienza con un viaje y cada viaje se convierte en un relato inolvidable.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold font-serif">Nuestra Historia</h2>
              <p className="mb-4 text-lg text-secondary-600">
                Ubicado en el corazón del centro histórico de Santa Marta, el Hotel Sierra Nevada nació en 2019 del sueño de crear un refugio donde la energía y el ambiente armónico se encuentran en perfecta sintonía. Como familia local, nos enorgullece estar en lo que los pueblos indígenas consideran el corazón del mundo: la majestuosa Sierra Nevada de Santa Marta.
              </p>
              <p className="text-lg text-secondary-600">
                Desde nuestros inicios, hemos mantenido nuestra esencia: brindar una experiencia cálida y auténtica conectada con el espíritu de la montaña. Hoy, somos más que un alojamiento; somos un punto de encuentro para viajeros y amantes de la naturaleza que buscan explorar el Parque Nacional Tayrona, aventurarse en la Sierra Nevada o sumergirse en la rica cultura local.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/images/Hotel_frente.jpg" 
                alt="Fachada del Hotel Sierra Nevada" 
                className="rounded-lg shadow-lg" 
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-primary-50 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <img 
                src="/images/nuestra_vision.jpg" 
                alt="Visión del Hotel" 
                className="rounded-lg shadow-lg" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold font-serif">Nuestra Visión</h2>
              <p className="mb-4 text-lg text-secondary-600">
                Ser reconocidos como un referente de hospitalidad auténtica en el centro histórico de Santa Marta, destacándonos por ofrecer experiencias memorables que integren la riqueza cultural, histórica y natural de la región.
              </p>
              <p className="text-lg text-secondary-600">
                Aspiramos a crecer de manera sostenible, preservando el patrimonio samario, promoviendo el turismo responsable y fortaleciendo nuestro compromiso con la calidad, la calidez humana y el respeto por el entorno que nos rodea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARAUMAKE Section */}
      <section id="maraumake" className="py-16 bg-secondary-50 md:py-24 scroll-mt-24">
        <div className="container">
          <div className="text-center">
            <img src="/images/logo_maruamake.png" alt="MARAUMAKE Ecolodge Logo" className="h-32 mx-auto mb-8" />
            <p className="max-w-3xl mx-auto mb-12 text-lg text-secondary-600">
              En el corazón de la Sierra Nevada de Santa Marta, MARAUMAKE Ecolodge se erige como un santuario de paz y conexión con la naturaleza. 
              Un espacio único donde el lujo sostenible y la autenticidad de la experiencia se fusionan para crear momentos inolvidables.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/maruamake5.jpg" 
                alt="MARAUMAKE Vista Panorámica" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 font-serif">Descubre una Nueva Forma de Viajar</h3>
              <p className="text-secondary-600 mb-6">
                MARAUMAKE Ecolodge representa la perfecta armonía entre el confort moderno y la preservación de nuestro entorno natural. 
                Cada detalle ha sido cuidadosamente pensado para minimizar nuestro impacto ambiental mientras maximizamos su experiencia.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Diseño Sostenible</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Energía Renovable</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gastronomía Local</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experiencias Únicas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-serif">Contacto y Ubicación</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <p className="text-secondary-600">52V8+CH Santa Marta, Magdalena, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100">
                      <FaPhone className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <a href="tel:+573166377670" className="text-primary-600 hover:text-primary-700 transition-colors">
                      +57 316 6377670
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100">
                      <FaEnvelope className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@maruamake.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                      info@maruamake.com
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Síguenos en Redes Sociales</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61566855481680"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/maruamake_ecolodge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://wa.me/573166377670"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.youtube.com/@MARUAMAKEECOLODGE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                      aria-label="YouTube"
                    >
                      <FaYoutube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.919252442072!2d-73.9861185241507!3d11.193610151358516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4ed0067bab137%3A0x27a99f608ecbc249!2sMaruamake%20Ecolodge!5e0!3m2!1ses-419!2sco!4v1738855539122!5m2!1ses-419!2sco"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de MARAUMAKE Ecolodge"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Atracciones Cercanas</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Explore los destinos más emblemáticos de Santa Marta, todos convenientemente ubicados cerca de nuestro hotel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {attractions.map((attraction, index) => (
              // Eliminada temporalmente la clase animate-on-scroll (Corrección de sintaxis)
              <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row">
                  {/* Volvemos a poner el div contenedor */}
                  <div className="md:w-2/5">
                    <img 
                      src={attraction.image}
                      alt={attraction.name}
                      className="object-cover w-full h-48 md:h-full" // Ancho completo, altura fija en móvil, altura completa en md+
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="mb-2 text-xl font-bold">{attraction.name}</h3>
                    <p className="mb-4 text-secondary-600">{attraction.description}</p>
                    <div className="flex items-center text-sm text-primary-600">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{attraction.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Preguntas Frecuentes</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Encuentre respuestas a las preguntas más comunes sobre su estancia en el Hotel Sierra Nevada.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-bold">¿A qué hora es el check-in y check-out?</h3>
                <p className="text-secondary-600">El check-in es a partir de las 15:00 horas y el check-out hasta las 12:00 horas. Si necesita un horario diferente, contáctenos y haremos lo posible por acomodar su solicitud.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-bold">¿Tienen baño privado y servicio de lavandería todas las habitaciones?</h3>
                <p className="text-secondary-600">Sí, todas nuestras habitaciones cuentan con baño privado completamente equipado y ofrecemos servicio de lavandería disponible todos los días. Las habitaciones incluyen amenidades de baño de alta calidad y el servicio de lavandería tiene un tiempo de entrega de 24 horas.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-bold">¿Se permiten mascotas en el hotel?</h3>
                <p className="text-secondary-600">Aceptamos mascotas pequeñas con un cargo adicional. Por favor, infórmenos al momento de hacer su reserva si viajará con su mascota para preparar adecuadamente su habitación.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-bold">¿Se permiten visitas durante mi estancia?</h3>
                <p className="text-secondary-600">Se permiten visitas a los huéspedes, pero solo en las zonas comunes del hotel. La entrada de una persona a la habitación conlleva un suplemento.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-bold">¿Ofrecen servicio de traslado desde el aeropuerto?</h3>
                <p className="text-secondary-600">Sí, ofrecemos servicio de traslado desde y hacia el Aeropuerto Internacional Simón Bolívar con cargo adicional. Por favor, reserve este servicio con al menos 24 horas de anticipación.</p>
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Viva la experiencia Hotel Sierra Nevada</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Estamos comprometidos a hacer de su estancia una experiencia inolvidable. ¡Haga su reserva hoy mismo!
          </p>
          <BookingButton />
        </div>
      </section>
    </>
  );
};

export default NuestroHotel;
