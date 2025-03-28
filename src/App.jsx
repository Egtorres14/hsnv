import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './assets/styles/index.css';
import { UIProvider } from './contexts/UIContext';

// Importación dinámica de páginas para optimización
const Home = lazy(() => import('./pages/Home'));
const Habitaciones = lazy(() => import('./pages/Habitaciones'));
const NuestroHotel = lazy(() => import('./pages/NuestroHotel'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Eventos = lazy(() => import('./pages/Eventos'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Error404 = lazy(() => import('./pages/Error404'));

function App() {
  return (
    <UIProvider>
      <Layout>
        <Suspense fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habitaciones" element={<Habitaciones />} />
            <Route path="/nuestro-hotel" element={<NuestroHotel />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </Layout>
    </UIProvider>
  );
}

export default App;