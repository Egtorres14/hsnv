import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Mensaje enviado con éxito. Nos pondremos en contacto con usted pronto.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="name">
          Nombre completo
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
          Correo Electrónico
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
          Asunto
        </label>
        <select
          id="subject"
          className={`input ${errors.subject ? 'border-red-500' : ''}`}
          {...register('subject', { required: true })}
        >
          <option value="">Seleccionar...</option>
          <option value="reserva">Consulta sobre reserva</option>
          <option value="informacion">Solicitud de información</option>
          <option value="comentario">Comentario o sugerencia</option>
          <option value="reclamo">Reclamo</option>
          <option value="otro">Otro</option>
        </select>
        {errors.subject && (
          <span className="text-xs text-red-500">Este campo es requerido</span>
        )}
      </div>
      
      <div>
        <label className="block mb-1 text-sm font-medium text-secondary-700" htmlFor="message">
          Mensaje
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
          className="w-full btn btn-primary py-3"
        >
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
};

export default ContactForm;