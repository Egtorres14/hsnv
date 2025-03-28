import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useUI } from '../../contexts/UIContext';
import { FaTimes } from 'react-icons/fa';

const BookingForm = () => {
  const { toggleBookingForm } = useUI();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("¡Gracias por su reserva! Nos pondremos en contacto con usted pronto.");
    toggleBookingForm();
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
              className={`input ${errors.checkIn ? 'border-red-500' : ''}`}
              {...register('checkIn', { required: true })}
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
              className={`input ${errors.checkOut ? 'border-red-500' : ''}`}
              {...register('checkOut', { required: true })}
            />
            {errors.checkOut && (
              <span className="text-xs text-red-500">Este campo es requerido</span>
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
            <option value="standard">Habitación Estándar</option>
            <option value="deluxe">Habitación Deluxe</option>
            <option value="suite">Suite Presidencial</option>
            <option value="royal">Suite Real</option>
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn btn-primary py-3"
          >
            Enviar Solicitud de Reserva
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;