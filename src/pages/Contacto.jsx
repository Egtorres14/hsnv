import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import ContactForm from '../components/ui/ContactForm';

const Contacto = () => {
  // Información de contacto
  const contactInfo = {
    direccion: {
      calle: 'Calle 14 #5-23',
      ciudad: 'Santa Marta',
      pais: 'Colombia',
      codigoPostal: '470004',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.771816458127!2d-74.22127417916546!3d11.242440514006199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5cdddb3a483%3A0x866aba2b8c96b865!2sSanta%20Marta%2C%20Magdalena!5e0!3m2!1ses!2sco!4v1616642962034!5m2!1ses!2sco',
    },
    contacto: {
      telefono: '+57 300 123 4567',
      fijo: '+57 (5) 123 456',
      email: 'info@hotelsierranevada.com',
      whatsapp: '+57 300 123 4567',
    },
    redesSociales: [
      {
        nombre: 'Facebook',
        icono: <FaFacebookF />,
        url: 'https://facebook.com',
      },
      {
        nombre: 'Instagram',
        icono: <FaInstagram />,
        url: 'https://instagram.com',
      },
      {
        nombre: 'TripAdvisor',
        icono: <FaTripadvisor />,
        url: 'https://tripadvisor.com',
      },
    ],
  };

  // Preguntas frecuentes
  const faq = [
    {
      pregunta: '¿Cuál es la hora de check-in y check-out?',
      respuesta: 'El check-in es a partir de las 15:00 horas y el check-out hasta las 12:00 horas. Si necesita un horario diferente, contáctenos y haremos lo posible por acomodar su solicitud.',
    },
    {
      pregunta: '¿Ofrecen servicio de traslado desde el aeropuerto?',
      respuesta: 'Sí, ofrecemos servicio de traslado desde y hacia el Aeropuerto Internacional Simón Bolívar con cargo adicional. Por favor, reserve este servicio con al menos 24 horas de anticipación.',
    },
    {
      pregunta: '¿Están cerca de las principales atracciones turísticas?',
      respuesta: 'Sí, estamos ubicados a pocas cuadras del centro histórico de Santa Marta, a 10 minutos en auto de la Playa del Rodadero y a 30 minutos del Parque Nacional Tayrona.',
    },
    {
      pregunta: '¿El hotel cuenta con estacionamiento?',
      respuesta: 'Sí, ofrecemos estacionamiento gratuito para nuestros huéspedes, sujeto a disponibilidad. Por favor, infórmenos con anticipación si planea llegar en vehículo.',
    },
  ];

  // Departamentos
  const departamentos = [
    {
      nombre: 'Reservaciones',
      descripcion: 'Para consultas sobre disponibilidad, tarifas y reservas.',
      email: 'reservas@hotelsierranevada.com',
      telefono: '+57 300 123 4567',
    },
    {
      nombre: 'Eventos',
      descripcion: 'Para organizar bodas, conferencias y eventos especiales.',
      email: 'eventos@hotelsierranevada.com',
      telefono: '+57 300 765 4321',
    },
    {
      nombre: 'Atención al Cliente',
      descripcion: 'Para comentarios, sugerencias o resolver cualquier inquietud.',
      email: 'atencion@hotelsierranevada.com',
      telefono: '+57 300 987 6543',
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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl font-serif">Contáctenos</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Estamos a su disposición para responder a cualquier pregunta, comentario o solicitud que pueda tener.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Información de contacto */}
            <div>
              <h2 className="mb-6 text-3xl font-bold font-serif">Información de Contacto</h2>
              
              <div className="mb-8">
                <h3 className="mb-3 text-xl font-bold">Dirección</h3>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-primary-500 w-5 h-5" />
                  <div>
                    <p className="text-secondary-600">
                      {contactInfo.direccion.calle},<br />
                      {contactInfo.direccion.ciudad}, {contactInfo.direccion.pais}<br />
                      {contactInfo.direccion.codigoPostal}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="mb-3 text-xl font-bold">Contacto Directo</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaPhone className="mr-3 text-primary-500 w-5 h-5" />
                    <a href={`tel:${contactInfo.contacto.telefono}`} className="transition-colors duration-300 text-secondary-600 hover:text-primary-600">
                      {contactInfo.contacto.telefono} (Móvil)
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaPhone className="mr-3 text-primary-500 w-5 h-5" />
                    <a href={`tel:${contactInfo.contacto.fijo}`} className="transition-colors duration-300 text-secondary-600 hover:text-primary-600">
                      {contactInfo.contacto.fijo} (Fijo)
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="mr-3 text-primary-500 w-5 h-5" />
                    <a href={`mailto:${contactInfo.contacto.email}`} className="transition-colors duration-300 text-secondary-600 hover:text-primary-600">
                      {contactInfo.contacto.email}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaWhatsapp className="mr-3 text-primary-500 w-5 h-5" />
                    <a href={`https://wa.me/${contactInfo.contacto.whatsapp.replace(/\D/g, '')}`} className="transition-colors duration-300 text-secondary-600 hover:text-primary-600">
                      {contactInfo.contacto.whatsapp} (WhatsApp)
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="mb-3 text-xl font-bold">Redes Sociales</h3>
                <div className="flex space-x-4">
                  {contactInfo.redesSociales.map((red, index) => (
                    <a
                      key={index}
                      href={red.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-100 hover:bg-primary-600 hover:text-white text-primary-600"
                      aria-label={red.nombre}
                    >
                      {red.icono}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="mb-3 text-xl font-bold">Horario de Atención</h3>
                <p className="text-secondary-600">
                  Lunes a Domingo: 24 horas<br />
                  Nuestro personal de recepción está disponible para atenderle en cualquier momento.
                </p>
              </div>
            </div>
            
            {/* Formulario de contacto */}
            <div>
              <h2 className="mb-6 text-3xl font-bold font-serif">Envíenos un Mensaje</h2>
              <p className="mb-6 text-secondary-600">
                Complete el siguiente formulario y nos pondremos en contacto con usted a la brevedad posible. Todos los campos marcados con * son obligatorios.
              </p>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12">
        <div className="container">
          <div className="overflow-hidden rounded-lg shadow-lg h-96">
            <iframe
              src={contactInfo.direccion.mapa}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="Ubicación del Hotel Sierra Nevada"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Departamentos */}
      <section className="py-16 bg-secondary-50 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Nuestros Departamentos</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Para una atención más especializada, puede contactar directamente con el departamento correspondiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {departamentos.map((depto, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-lg shadow-md animate-on-scroll"
              >
                <h3 className="mb-2 text-xl font-bold">{depto.nombre}</h3>
                <p className="mb-4 text-secondary-600">{depto.descripcion}</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaEnvelope className="mr-2 text-primary-500" />
                    <a href={`mailto:${depto.email}`} className="transition-colors duration-300 text-secondary-600 hover:text-primary-600">
                      {depto.email}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaPhone className="mr-2 text-primary-500" />
                    <a href={`tel:${depto.telefono}`} className="transition-colors duration-300 text-secondary-600 hover:text-primary-600">
                      {depto.telefono}
                    </a>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Preguntas Frecuentes</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-secondary-600">
              Encuentre respuestas a las preguntas más comunes sobre nuestro hotel y servicios.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-3 text-xl font-bold">{item.pregunta}</h3>
                  <p className="text-secondary-600">{item.respuesta}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="mb-4 text-secondary-600">
                ¿No encontró la respuesta que buscaba? No dude en contactarnos directamente.
              </p>
              <a href={`tel:${contactInfo.contacto.telefono}`} className="btn btn-primary">
                <FaPhone className="mr-2" />
                Llámenos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-50 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">Suscríbase a Nuestro Boletín</h2>
            <p className="mb-8 text-lg text-secondary-600">
              Reciba nuestras últimas noticias, ofertas especiales y promociones exclusivas directamente en su bandeja de entrada.
            </p>
            
            <form className="flex flex-col mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-4 max-w-xl">
              <input 
                type="email" 
                placeholder="Su correo electrónico" 
                className="flex-grow px-4 py-3 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 font-medium text-white transition-colors duration-300 rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Suscribirse
              </button>
            </form>
            
            <p className="mt-4 text-sm text-secondary-500">
              Respetamos su privacidad. Puede cancelar su suscripción en cualquier momento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;