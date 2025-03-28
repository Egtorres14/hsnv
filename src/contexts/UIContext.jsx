import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UIContext = createContext();

export function UIProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Detectar scroll para cambiar estilos del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const toggleBookingForm = () => {
    setIsBookingFormOpen(prev => !prev);
  };

  return (
    <UIContext.Provider value={{
      isMobileMenuOpen,
      isBookingFormOpen,
      isScrolled,
      toggleMobileMenu,
      toggleBookingForm
    }}>
      {children}
    </UIContext.Provider>
  );
}

// Hook personalizado para usar este contexto
export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI debe ser usado dentro de un UIProvider');
  }
  return context;
}