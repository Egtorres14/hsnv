import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTripadvisor, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo y descripción */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold font-serif">Hotel Sierra Nevada</h2>
            </Link>
            <p className="mb-6 text-secondary-300">
              Su puerta de entrada a memorias inolvidables en el corazón de Santa Marta, Colombia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="TripAdvisor"
              >
                <FaTripadvisor />
              </a>
              <a 
                href="https://wa.me/573001234567" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Enlaces rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/habitaciones" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/restaurante" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  Restaurante
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Contáctenos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 mr-3 text-primary-500" />
                <span className="text-secondary-300">
                  Calle 14 #5-23, Centro Histórico<br />
                  Santa Marta, Colombia
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-primary-500" />
                <a href="mailto:info@hotelsierranevada.com" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  info@hotelsierranevada.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-primary-500" />
                <a href="tel:+573001234567" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-primary-500" />
                <a href="tel:+575123456" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  +57 (5) 123 456
                </a>
              </li>
            </ul>
          </div>

          {/* Boletín */}
          <div>
            <h3 className="mb-6 text-lg font-bold">Boletín informativo</h3>
            <p className="mb-4 text-secondary-300">
              Suscríbase para recibir noticias y ofertas especiales.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Su correo electrónico"
                  className="w-full px-4 py-2 text-secondary-800 bg-white border-none rounded"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2 font-medium text-white transition-colors duration-300 rounded bg-primary-600 hover:bg-primary-700"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-center border-t border-secondary-800">
        <div className="container">
          <p className="text-secondary-400">
            &copy; {new Date().getFullYear()} Hotel Sierra Nevada. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;