import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Error404 = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-16 bg-secondary-50">
      <div className="container">
        <div className="mx-auto text-center max-w-2xl">
          <motion.img 
            src="/images/placeholder.jpg" 
            alt="Página no encontrada" 
            className="w-64 h-64 mx-auto mb-8 rounded-full object-cover border-8 border-white shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="mb-6 text-6xl font-bold text-primary-600 font-serif">404</h1>
            <h2 className="mb-4 text-3xl font-bold">Página no encontrada</h2>
            <p className="mb-8 text-lg text-secondary-600">
              Lo sentimos, pero la página que está buscando no existe o ha sido movida.
            </p>
            
            <div className="space-y-4">
              <Link 
                to="/" 
                className="inline-block px-6 py-3 font-medium text-white transition-colors duration-300 rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Volver al Inicio
              </Link>
              
              <div className="pt-4">
                <p className="mb-2 text-secondary-600">O visite nuestras secciones principales:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/habitaciones" className="text-primary-600 hover:underline">Habitaciones</Link>
                  {/* Eliminado enlace a Servicios */}
                  <Link to="/contacto" className="text-primary-600 hover:underline">Contacto</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
