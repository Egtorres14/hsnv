import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

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
                href="https://www.facebook.com/hsierranevada?mibextid=wwXIfr&rdid=kL0obCPTN47UebBo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12FmssgwEbn%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/hotelsierranevada?igsh=MTZvODJoMGczdzV6MQ%3D%3D&utm_source=gr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/573127417352"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com/HSierraNevada"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.youtube.com/@hotelsierranevada8967"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-secondary-800 hover:bg-primary-600"
                aria-label="YouTube"
              >
                <FaYoutube />
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
                <Link to="/nuestro-hotel" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  Nuestro Hotel
                </Link>
              </li>
              <li>
                <Link to="/habitaciones" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  Habitaciones
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
                  Calle 21 # 6-73, Santa Marta - Colombia
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-primary-500" />
                <a href="mailto:htsierranevada@gmail.com" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  htsierranevada@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-primary-500" />
                <a href="https://wa.me/573127417352" className="transition-colors duration-300 text-secondary-300 hover:text-primary-400">
                  +57 3127417352
                </a>
              </li>
            </ul>
          </div>

          {/* ¿Por qué elegirnos? */}
          <div>
            <h3 className="mb-6 text-lg font-bold">¿Por qué elegirnos?</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-secondary-300">
                <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Ubicación privilegiada en el centro histórico
              </li>
              <li className="flex items-center text-secondary-300">
                <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Atención personalizada 24/7
              </li>
              <li className="flex items-center text-secondary-300">
                <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Precios competitivos y excelente servicio
              </li>
              <li className="flex items-center text-secondary-300">
                <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Habitaciones confortables y modernas
              </li>
            </ul>
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
