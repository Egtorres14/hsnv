import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import BookingForm from '../ui/BookingForm';
import { useUI } from '../../contexts/UIContext';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { isBookingFormOpen } = useUI();
  
  // Scroll al inicio cuando cambia la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Implementar animación de scroll para elementos con la clase .animate-on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      
      {/* Modal de formulario de reserva */}
      <AnimatePresence>
        {isBookingFormOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="max-w-lg w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <BookingForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;