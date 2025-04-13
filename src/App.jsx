import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { UIProvider } from './contexts/UIContext';
import Layout from './components/layout/Layout';
import VoiceflowAssistant from './components/ui/VoiceflowAssistant';
import './assets/styles/index.css';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const Habitaciones = lazy(() => import('./pages/Habitaciones'));
const NuestroHotel = lazy(() => import('./pages/NuestroHotel'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Error404 = lazy(() => import('./pages/Error404'));

function App() {
  return (
    <NextUIProvider>
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
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
          <VoiceflowAssistant />
        </Layout>
      </UIProvider>
    </NextUIProvider>
  );
}

export default App;
