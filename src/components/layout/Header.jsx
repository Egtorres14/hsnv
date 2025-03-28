import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUI } from '../../contexts/UIContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import BookingButton from '../ui/BookingButton';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, isScrolled } = useUI();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nuestro Hotel', path: '/nuestro-hotel' },
    { name: 'Habitaciones', path: '/habitaciones' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Eventos', path: '/eventos' },
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
        <Link to="/" className="relative z-50">
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
          <div className="flex flex-col h-full justify-center items-center">
            <nav className="w-full">
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
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;