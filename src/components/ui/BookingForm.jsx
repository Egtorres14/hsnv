import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useUI } from '../../contexts/UIContext';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const BookingForm = () => {
  const { toggleBookingForm } = useUI();
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const [minCheckOut, setMinCheckOut] = useState(new Date().toISOString().split('T')[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // URL de tu servidor intermedio
  const API_URL = 'http://localhost:3001/api/booking';

  // Watch the checkIn value to update checkOut min date
  const checkInDate = watch('checkIn');
  
  React.useEffect(() => {
    if (checkInDate) {
      const nextDay = new Date(checkInDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setMinCheckOut(nextDay.toISOString().split('T')[0]);
    }
  }, [checkInDate]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Preparar los datos para el servidor
    const requestData = {
      "Nombre": data.firstName,
      "Apellido": data.lastName,
      "Correo Electronico": data.email,
      "Telefono": data.phone,
      "Fecha_Llegada": data.checkIn,
      "Fecha_Salida": data.checkOut,
      "Cantidad_Adultos": data.adults,
      "Cantidad_Ninos": data.children || "0",
      "Tipo_Habitacion": data.roomType,
      "Mensaje": data.message || "",
      "Estado_Contacto": "Sin_Contactar"
    };

    try {
      // Enviar la solicitud a tu servidor Node.js
      const response = await axios.post(API_URL, requestData);
      
      console.log('Respuesta del servidor:', response.data);
      
      if (response.data.success) {
        setSubmitStatus('success');
        alert("¡Gracias por su reserva! Nos pondremos en contacto con usted pronto.");
        
        // Esperar un momento y cerrar el formulario
        setTimeout(() => {
          reset();
          toggleBookingForm();
        }, 3000);
      } else {
        throw new Error(response.data.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-primary-600 text-white p-6 relative">
        <h3 className="text-2xl font-bold font-serif">Reserve su estadía</h3>
        <p className="mt-2 text-primary-100">Complete el formulario para solicitar disponibilidad</p>
        <button 
          onClick={toggleBookingForm}
          className="absolute top-4 right-4 text-white hover:text-primary-200 transition-colors"
          aria-label="Cerrar formulario"
        >
          <FaTimes className="w-6 h-6" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="firstName">
              Nombre
            </label>
            <input
              id="firstName"
              type="text"
              className={`input ${errors.firstName ? 'border-red-500' : ''}`}
              placeholder="Juan"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <span className="text-xs text-red-500">Este campo es requerido</span>
            )}
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="lastName">
              Apellido
            </label>
            <input
              id="lastName"
              type="text"
              className={`input ${errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Pérez"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && (
              <span className="text-xs text-red-500">Este campo es requerido</span>
            )}
          </div>
        </div>
        
        <div>
          <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            id="email"
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
          <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="phone">
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            className={`input ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="+57 300 123 4567"
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <span className="text-xs text-red-500">Este campo es requerido</span>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="checkIn">
              Fecha de Llegada
            </label>
            <input
              id="checkIn"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className={`input ${errors.checkIn ? 'border-red-500' : ''}`}
              {...register('checkIn', { 
                required: true,
                onChange: (e) => {
                  const nextDay = new Date(e.target.value);
                  nextDay.setDate(nextDay.getDate() + 1);
                  setMinCheckOut(nextDay.toISOString().split('T')[0]);
                }
              })}
            />
            {errors.checkIn && (
              <span className="text-xs text-red-500">Este campo es requerido</span>
            )}
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="checkOut">
              Fecha de Salida
            </label>
            <input
              id="checkOut"
              type="date"
              min={minCheckOut}
              className={`input ${errors.checkOut ? 'border-red-500' : ''}`}
              {...register('checkOut', { 
                required: true,
                validate: value => !checkInDate || new Date(value) > new Date(checkInDate) || 'La fecha de salida debe ser posterior a la fecha de llegada'
              })}
            />
            {errors.checkOut && (
              <span className="text-xs text-red-500">
                {errors.checkOut.type === 'validate' 
                  ? 'La fecha de salida debe ser posterior a la fecha de llegada'
                  : 'Este campo es requerido'}
              </span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="adults">
              Adultos
            </label>
            <select
              id="adults"
              className={`input ${errors.adults ? 'border-red-500' : ''}`}
              {...register('adults', { required: true })}
            >
              <option value="">Seleccionar...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            {errors.adults && (
              <span className="text-xs text-red-500">Este campo es requerido</span>
            )}
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="children">
              Niños
            </label>
            <select
              id="children"
              className="input"
              {...register('children')}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="roomType">
            Tipo de Habitación
          </label>
          <select
            id="roomType"
            className={`input ${errors.roomType ? 'border-red-500' : ''}`}
            {...register('roomType', { required: true })}
          >
            <option value="">Seleccionar...</option>
            <option value="Habitación Doble Económica">Habitación Doble Económica</option>
            <option value="Habitación Doble Superior">Habitación Doble Superior</option>
            <option value="Habitación Doble Deluxe">Habitación Doble Deluxe</option>
            <option value="Habitación Triple">Habitación Triple</option>
            <option value="Habitación Cuádruple">Habitación Cuádruple</option>
            <option value="Habitación Quíntuple">Habitación Quíntuple</option>
          </select>
          {errors.roomType && (
            <span className="text-xs text-red-500">Este campo es requerido</span>
          )}
        </div>
        
        <div>
          <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="message">
            Mensaje (opcional)
          </label>
          <textarea
            id="message"
            rows="3"
            className="input resize-none"
            placeholder="¿Tiene alguna solicitud especial?"
            {...register('message')}
          ></textarea>
        </div>
        
        <div className="pt-2">
          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
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
              "Enviar Solicitud de Reserva"
            )}
          </motion.button>
        </div>

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">Hubo un error al enviar su reserva. Por favor, intente nuevamente.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;