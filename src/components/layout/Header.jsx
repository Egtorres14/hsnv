import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUI } from '../../contexts/UIContext';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import BookingButton from '../ui/BookingButton';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, isScrolled } = useUI();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nuestro Hotel', path: '/nuestro-hotel' },
    { name: 'Habitaciones', path: '/habitaciones' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center">
          <img 
            src="/images/logo_hotel.png" 
            alt="Logo Hotel Sierra Nevada" 
            className="h-12 w-auto mr-3"
            width="48"
            height="48"
            loading="eager"
            fetchpriority="high"
          />
          <h1 className={`text-2xl font-bold transition-colors duration-300 font-serif md:text-3xl ${
            isScrolled || isMobileMenuOpen ? 'text-primary-800' : 'text-white'
          }`}>
            Hotel Sierra Nevada
          </h1>
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => `
                    font-medium transition-colors duration-300 hover:text-primary-500
                    ${isScrolled 
                      ? 'text-secondary-800' 
                      : 'text-white'
                    }
                    ${isActive ? 'text-primary-600 font-semibold' : ''}
                  `}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botones móviles */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <BookingButton isSmall={false} />
          </div>
          
          <button 
            className="relative z-50 block lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className={`w-6 h-6 ${
                isScrolled ? 'text-secondary-800' : 'text-white'
              }`} />
            ) : (
              <FaBars className={`w-6 h-6 ${
                isScrolled ? 'text-secondary-800' : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        <motion.div 
          className={`fixed inset-0 z-40 bg-white lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col h-full px-6 pt-20 pb-6">
            <nav className="flex-grow">
              <ul className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <li key={link.path} className="w-full text-center">
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => `
                        block py-2 text-xl font-medium transition-colors duration-300
                        ${isActive ? 'text-primary-600 font-semibold' : 'text-secondary-800 hover:text-primary-500'}
                      `}
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className="w-full text-center pt-8">
                  <BookingButton isSmall={false} className="w-3/4 mx-auto" />
                </li>
              </ul>
            </nav>

            {/* Contact and Social Info */}
            <div className="border-t border-secondary-200 pt-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-center text-secondary-800">
                  <FaMapMarkerAlt className="w-5 h-5 mr-3 text-primary-600" />
                  <span>Calle 21 # 6-73, Santa Marta</span>
                </div>
                <div className="flex items-center text-secondary-800">
                  <FaPhone className="w-5 h-5 mr-3 text-primary-600" />
                  <a href="tel:+573127417352" className="hover:text-primary-600 transition-colors">
                    +57 312 741 7352
                  </a>
                </div>
                <div className="flex items-center text-secondary-800">
                  <FaEnvelope className="w-5 h-5 mr-3 text-primary-600" />
                  <a href="mailto:htsierranevada@gmail.com" className="hover:text-primary-600 transition-colors">
                    htsierranevada@gmail.com
                  </a>
                </div>
                
                <div className="flex justify-center space-x-4 pt-4">
                  <a
                    href="https://www.facebook.com/hsierranevada"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/hotelsierranevada"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/573127417352"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/HSierraNevada"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                    aria-label="X"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@hotelsierranevada8967"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
