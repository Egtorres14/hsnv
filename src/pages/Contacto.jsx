import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import ContactForm from '../components/ui/ContactForm';

const Contacto = () => {
  // Información de contacto
  const contactInfo = {
    direccion: {
      calle: 'Calle 21 # 6-73',
      ciudad: 'Santa Marta',
      pais: 'Colombia',
      codigoPostal: '470004',
      mapa: 'https://www.google.com/maps/place/11%C2%B014\'26.7%22N+74%C2%B012\'33.8%22W/@11.2407494,-74.2119713,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.2407494!4d-74.2093964?hl=es&entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSOASAFQAw%3D%3D',
    },
    contacto: {
      telefono: '+57 3127417352',
      email: 'htsierranevada@gmail.com',
      whatsapp: '+57 3127417352',
    },
    redesSociales: [
      {
        nombre: 'Facebook',
        icono: <FaFacebookF />,
        url: 'https://www.facebook.com/hsierranevada',
      },
      {
        nombre: 'Instagram',
        icono: <FaInstagram />,
        url: 'https://www.instagram.com/hotelsierranevada?igsh=MTZvODJoMGczdzV6MQ%3D%3D&utm_source=gr',
      },
      {
        nombre: 'WhatsApp',
        icono: <FaWhatsapp />,
        url: 'https://wa.me/573127417352',
      },
    ],
  };

  // Preguntas frecuentes
  const faq = [
    {
      pregunta: '¿Se permiten visitas durante mi estancia?',
      respuesta: 'Se permiten visitas a los huéspedes, pero solo en las zonas comunes del hotel. La entrada de una persona a la habitación conlleva un suplemento.',
    },
    {
      pregunta: '¿Están cerca de las principales atracciones turísticas?',
      respuesta: 'Sí, estamos ubicados a pocas cuadras del centro histórico de Santa Marta, a 10 minutos en auto de la Playa del Rodadero y a 30 minutos del Parque Nacional Tayrona.',
    },
    {
      pregunta: '¿Tienen baño privado y servicio de lavandería todas las habitaciones?',
      respuesta: 'Sí, todas nuestras habitaciones cuentan con baño privado completamente equipado y ofrecemos servicio de lavandería disponible todos los días. Las habitaciones incluyen amenidades de baño de alta calidad y el servicio de lavandería tiene un tiempo de entrega de 24 horas.',
    },
    {
      pregunta: '¿Cuál es la hora de check-in y check-out?',
      respuesta: 'El check-in es a partir de las 15:00 horas y el check-out hasta las 12:00 horas. Si necesita un horario diferente, contáctenos y haremos lo posible por acomodar su solicitud.',
    },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - Hotel Sierra Nevada",
    "description": "Contáctenos para reservas o consultas sobre el Hotel Sierra Nevada en Santa Marta. Atención personalizada las 24 horas.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Hotel Sierra Nevada",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+573127417352",
        "contactType": "customer service",
        "areaServed": "CO",
        "availableLanguage": ["Spanish", "English"],
        "email": "htsierranevada@gmail.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle 21 # 6-73",
        "addressLocality": "Santa Marta",
        "addressRegion": "Magdalena",
        "postalCode": "470004",
        "addressCountry": "CO"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Hotel Sierra Nevada | Reservas y Atención al Cliente</title>
        <meta name="description" content="Contáctenos para reservas o información sobre el Hotel Sierra Nevada en Santa Marta. Atención personalizada 24/7, ubicación privilegiada y servicios premium." />
        <meta name="keywords" content="contacto hotel santa marta, reservas hotel sierra nevada, teléfono hotel santa marta, ubicación hotel sierra nevada" />
        <link rel="canonical" href="https://hotelsierranevada.com/contacto" />
        
        <meta property="og:title" content="Contacto - Hotel Sierra Nevada" />
        <meta property="og:description" content="Comuníquese con nosotros para reservas o información. Atención personalizada 24/7." />
        <meta property="og:url" content="https://hotelsierranevada.com/contacto" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

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
                  {contactInfo.redesSociales.map((red, index) => {
                    if (red.nombre === 'Facebook' || red.nombre === 'Instagram' || red.nombre === 'WhatsApp') {
                      return (
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
                      );
                    }
                    return null;
                  })}
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
          <div className="overflow-hidden rounded-lg shadow-lg h-[600px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.6400203342334!2d-74.20941069999999!3d11.240798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f57ba95ad43b%3A0xa06bb1fc5661b6fe!2sHotel%20Sierra%20Nevada!5e0!3m2!1ses-419!2ses" 
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Hotel Sierra Nevada"
            ></iframe>
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

      {/* CTA Section */}
      <section 
        className="py-20 text-white bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/placeholder.jpg')` 
        }}
      >
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-serif">¡Contáctenos Hoy!</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Estamos aquí para responder todas sus preguntas y ayudarle a planificar su estancia perfecta.
          </p>
          <a href="tel:+573127417352" className="btn btn-accent">
            <FaPhone className="mr-2" />
            Llámenos
          </a>
        </div>
      </section>
    </>
  );
};

export default Contacto;
