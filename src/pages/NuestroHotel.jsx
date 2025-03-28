import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/ui/TestimonialCard';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

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

  // Datos de ejemplo para atracciones cercanas
  const attractions = [
    {
      name: 'Centro Histórico de Santa Marta',
      description: 'El corazón cultural e histórico de la ciudad con arquitectura colonial, museos y plazas.',
      distance: '5 minutos a pie',
      image: '/images/placeholder.jpg',
    },
    {
      name: 'Playa del Rodadero',
      description: 'Popular playa turística con aguas tranquilas y diversas opciones de entretenimiento.',
      distance: '10 minutos en auto',
      image: '/images/placeholder.jpg',
    },
    {
      name: 'Parque Nacional Tayrona',
      description: 'Impresionante parque nacional con playas vírgenes, selva tropical y senderismo.',
      distance: '30 minutos en auto',
      image: '/images/placeholder.jpg',
    },
    {
      name: 'Ciudad Perdida',
      description: 'Sitio arqueológico precolombino en la Sierra Nevada, accesible mediante excursiones guiadas.',
      distance: 'Excursión de varios días',
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
                Nuestra historia comenzó hace varias décadas, con un pequeño hotel boutique ubicado en una tranquila zona residencial de Santa Marta. Con el paso de los años, expandimos nuestros horizontes, mejorando constantemente nuestras instalaciones y servicios para ofrecer a nuestros huéspedes la mejor experiencia posible.
              </p>
              <p className="mb-4 text-lg text-secondary-600">
                A lo largo del camino, hemos recibido a innumerables viajeros, celebrado momentos especiales y creado un legado de calidez y hospitalidad que continúa hasta el día de hoy. Nuestra pasión por la atención personalizada y el servicio excepcional nos ha convertido en uno de los destinos preferidos en Santa Marta.
              </p>
              <p className="text-lg text-secondary-600">
                Hoy, el Hotel Sierra Nevada se enorgullece de combinar el encanto tradicional con toques modernos, ofreciendo a nuestros huéspedes una experiencia auténtica y memorable en el corazón de esta hermosa ciudad costera.
              </p>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll">
              <img src="/images/placeholder.jpg" alt="Historia del Hotel" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-primary-50 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="animate-on-scroll">
              <img src="/images/placeholder.jpg" alt="Visión del Hotel" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold font-serif">Nuestra Visión</h2>
              <p className="mb-4 text-lg text-secondary-600">
                En el Hotel Sierra Nevada, nuestra visión es redefinir el arte de la hospitalidad, estableciendo nuevos estándares de excelencia en la industria. Aspiramos a ser más que un simple lugar para hospedarse; buscamos ser un destino en sí mismo, donde cada huésped se sienta abrazado por la belleza de sus alrededores y la calidez de nuestra hospitalidad.
              </p>
              <p className="mb-4 text-lg text-secondary-600">
                Nos esforzamos por crear experiencias auténticas que conecten a nuestros huéspedes con la rica cultura y belleza natural de Santa Marta, mientras ofrecemos un servicio personalizado que anticipa y supera sus expectativas.
              </p>
              <p className="text-lg text-secondary-600">
                Nuestro compromiso con la sostenibilidad y la responsabilidad social es fundamental en todo lo que hacemos, asegurando que nuestras operaciones respeten y beneficien tanto al medio ambiente como a la comunidad local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Nuestro Equipo</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Nuestro dedicado equipo trabaja incansablemente para asegurar que su estancia sea excepcional. Conozca a las personas que hacen posible la magia en el Hotel Sierra Nevada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Miembro 1 */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/placeholder-avatar.jpg"
                  alt="Director General"
                  className="object-cover w-40 h-40 mx-auto transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Carlos Martínez</h3>
              <p className="text-primary-600 font-medium">Director General</p>
              <p className="mt-2 text-secondary-600">Con más de 20 años de experiencia en la industria hotelera, Carlos lidera nuestro equipo con pasión y dedicación.</p>
            </div>
            
            {/* Miembro 2 */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/placeholder-avatar.jpg"
                  alt="Directora de Operaciones"
                  className="object-cover w-40 h-40 mx-auto transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Laura Gómez</h3>
              <p className="text-primary-600 font-medium">Directora de Operaciones</p>
              <p className="mt-2 text-secondary-600">Laura asegura que todas nuestras operaciones funcionen a la perfección para garantizar su comodidad.</p>
            </div>
            
            {/* Miembro 3 */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/placeholder-avatar.jpg"
                  alt="Chef Ejecutivo"
                  className="object-cover w-40 h-40 mx-auto transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Javier López</h3>
              <p className="text-primary-600 font-medium">Chef Ejecutivo</p>
              <p className="mt-2 text-secondary-600">Javier crea experiencias culinarias excepcionales con ingredientes locales y técnicas innovadoras.</p>
            </div>
            
            {/* Miembro 4 */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-full">
                <img 
                  src="/images/placeholder-avatar.jpg"
                  alt="Directora de Servicio al Cliente"
                  className="object-cover w-40 h-40 mx-auto transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Ana Vargas</h3>
              <p className="text-primary-600 font-medium">Directora de Servicio al Cliente</p>
              <p className="mt-2 text-secondary-600">Ana y su equipo se dedican a hacer de su estancia con nosotros una experiencia memorable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Lo que dicen nuestros huéspedes</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Descubra por qué nuestros huéspedes eligen el Hotel Sierra Nevada para sus visitas a Santa Marta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-on-scroll">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
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
              <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md animate-on-scroll">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name} 
                      className="object-cover w-full h-full"
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
                <h3 className="mb-3 text-xl font-bold">¿El hotel cuenta con estacionamiento?</h3>
                <p className="text-secondary-600">Sí, ofrecemos estacionamiento gratuito para nuestros huéspedes, sujeto a disponibilidad. Por favor, infórmenos con anticipación si planea llegar en vehículo.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-3 text-xl font-bold">¿Se permiten mascotas en el hotel?</h3>
                <p className="text-secondary-600">Aceptamos mascotas pequeñas con un cargo adicional. Por favor, infórmenos al momento de hacer su reserva si viajará con su mascota para preparar adecuadamente su habitación.</p>
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
          <button className="btn btn-accent">Reserve Ahora</button>
        </div>
      </section>
    </>
  );
};

export default NuestroHotel;