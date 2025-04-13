import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const VoiceflowAssistant = () => {
  const location = useLocation();
  const chatInitialized = useRef(false);
  const clearTimeoutRef = useRef(null);

  const showProactiveMessages = (pathname) => {
    if (!window.voiceflow?.chat?.proactive) return;

    // Limpiar cualquier timeout pendiente
    if (clearTimeoutRef.current) {
      clearTimeout(clearTimeoutRef.current);
    }

    // Limpiar mensajes anteriores
    window.voiceflow.chat.proactive.clear();

    // Esperar a que se limpien los mensajes anteriores
    clearTimeoutRef.current = setTimeout(() => {
      if (!window.voiceflow?.chat?.proactive) return;
      
      const messages = {
        '/': [
          { type: 'text', payload: { message: '¡Bienvenido al Hotel Sierra Nevada! 👋' } },
          { type: 'text', payload: { message: '¿Necesitas ayuda para encontrar la habitación perfecta?' } }
        ],
        '/habitaciones': [
          { type: 'text', payload: { message: '¿Buscas una habitación específica? 🛏️' } },
          { type: 'text', payload: { message: 'Puedo ayudarte a encontrar la mejor opción según tus necesidades.' } }
        ],
        '/nuestro-hotel': [
          { type: 'text', payload: { message: '¡Descubre todo sobre nuestro hotel! 🏨' } },
          { type: 'text', payload: { message: '¿Te gustaría conocer nuestras instalaciones y servicios?' } }
        ],
        '/contacto': [
          { type: 'text', payload: { message: '¿Necesitas comunicarte con nosotros? 📞' } },
          { type: 'text', payload: { message: 'Estoy aquí para ayudarte con cualquier consulta.' } }
        ],
        'default': [
          { type: 'text', payload: { message: '¡Ups! Parece que te has perdido 😅' } },
          { type: 'text', payload: { message: '¿Puedo ayudarte a encontrar lo que buscas?' } }
        ]
      };

      const messagesToShow = messages[pathname] || messages['default'];
      window.voiceflow.chat.proactive.push(...messagesToShow);
    }, 300);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '67fb016219f6e9bfcaca83b9' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      }).then(() => {
        chatInitialized.current = true;
        showProactiveMessages(location.pathname);
      });
    };
    
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    document.body.appendChild(script);

    return () => {
      // Cleanup cuando el componente se desmonta
      if (window.voiceflow?.chat?.proactive) {
        window.voiceflow.chat.proactive.clear();
      }
      if (clearTimeoutRef.current) {
        clearTimeout(clearTimeoutRef.current);
      }
      chatInitialized.current = false;
      document.body.removeChild(script);
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  // Efecto para manejar cambios de ruta
  useEffect(() => {
    if (chatInitialized.current) {
      showProactiveMessages(location.pathname);
    }
  }, [location.pathname]);

  return null;
};

export default VoiceflowAssistant;