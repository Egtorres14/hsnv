import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // URL de tu servidor intermedio
  const API_URL = 'http://localhost:3001/api/contact';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Preparar los datos para el servidor
    const requestData = {
      "Nombre completo": data.name,
      "Correo Electronico": data.email,
      "Asunto": data.subject,
      "Mensaje": data.message
    };

    try {
      // Enviar la solicitud a tu servidor Node.js
      const response = await axios.post(API_URL, requestData);
      
      console.log('Respuesta del servidor:', response.data);
      
      if (response.data.success) {
        setSubmitStatus('success');
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto con usted pronto.");
        reset();
      } else {
        throw new Error(response.data.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error completo:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="name">
          Nombre completo *
        </label>
        <input
          id="name"
          type="text"
          className={`input ${errors.name ? 'border-red-500' : ''}`}
          placeholder="Juan Pérez"
          {...register('name', { required: true })}
        />
        {errors.name && (
          <span className="text-xs text-red-500">Este campo es requerido</span>
        )}
      </div>
      
      <div>
        <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="contactEmail">
          Correo Electrónico *
        </label>
        <input
          id="contactEmail"
          type="email"
          className={`input ${errors.email ? 'border-red-500' : ''}`}
          placeholder="juan@ejemplo.com"
          {...register('email', { 
            required: true, 
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
          })}
        />
        {errors.email?.type === 'required' && (
          <span className="text-xs text-red-500">Este campo es requerido</span>
        )}
        {errors.email?.type === 'pattern' && (
          <span className="text-xs text-red-500">Ingrese un correo electrónico válido</span>
        )}
      </div>
      
      <div>
        <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="subject">
          Asunto *
        </label>
        <select
          id="subject"
          className={`input ${errors.subject ? 'border-red-500' : ''}`}
          {...register('subject', { required: true })}
        >
          <option value="">Seleccionar...</option>
          <option value="Consulta sobre reserva">Consulta sobre reserva</option>
          <option value="Solicitud de información">Solicitud de información</option>
          <option value="Comentario o sugerencia">Comentario o sugerencia</option>
          <option value="Reclamo">Reclamo</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.subject && (
          <span className="text-xs text-red-500">Este campo es requerido</span>
        )}
      </div>
      
      <div>
        <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="message">
          Mensaje *
        </label>
        <textarea
          id="message"
          rows="5"
          className={`input resize-none ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Escriba su mensaje aquí..."
          {...register('message', { required: true, minLength: 10 })}
        ></textarea>
        {errors.message?.type === 'required' && (
          <span className="text-xs text-red-500">Este campo es requerido</span>
        )}
        {errors.message?.type === 'minLength' && (
          <span className="text-xs text-red-500">El mensaje debe tener al menos 10 caracteres</span>
        )}
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          className={`w-full btn py-3 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed'
              : submitStatus === 'error'
              ? 'bg-red-500 hover:bg-red-600'
              : 'btn-primary'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            "Enviar Mensaje"
          )}
        </button>
      </div>

      {submitStatus === 'error' && (
        <div className="text-red-500 text-sm text-center">
          Hubo un error al enviar el mensaje. Por favor, intente nuevamente.
        </div>
      )}
    </form>
  );
};

export default ContactForm;