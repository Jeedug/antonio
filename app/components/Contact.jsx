'use client'
import React, { useState } from 'react';

export default function Contact() {
  // Estado para manejar el envío del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Enviar los datos a la API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Si la respuesta es exitosa, mostrar mensaje de éxito
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' }); // Limpiar el formulario
      } else {
        // Si hay un error en la respuesta, mostrar mensaje de error
        setError(data.error || 'Ocurrió un error al enviar el formulario.');
      }
    } catch (err) {
      setError('Ocurrió un error al procesar la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 md:px-16 bg-gray-50">
      {/* Contenedor principal centrado */}
      <div
        className="mx-auto max-w-6xl relative rounded-3xl p-10 overflow-hidden"
        style={{
          backgroundImage: "url('/contact-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Filtro oscuro sobre la imagen */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Contenido dentro de la tarjeta */}
        <div className="relative z-10">
          {/* Título y texto pequeño */}
          <h2 className="text-3xl font-bold text-center text-white mb-2">
            Contáctanos
          </h2>
          <p className="text-sm text-center text-gray-200 mb-8">
            Estamos aquí para ayudarte. ¡Escríbenos!
          </p>

          {/* Notificación de éxito o error */}
          {success && (
            <div
              className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
              role="alert"
            >
              Solicitud enviada correctamente.
            </div>
          )}
          {error && (
            <div
              className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
              role="alert"
            >
              {error}
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primera sección (izquierda) */}
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white bg-opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white bg-opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white bg-opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Segunda sección (derecha) */}
            <div className="space-y-4">
              <textarea
                name="message"
                placeholder="Mensaje"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white bg-opacity-50 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={`w-full ${
                  loading ? 'bg-gray-500' : 'bg-blue-600 bg-opacity-80'
                } text-white font-bold py-2 px-4 rounded-full transition duration-300`}
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>

          {/* Texto adicional debajo del formulario */}
          <p className="text-xs text-center text-white underline mt-6">
            Más información
          </p>
          <p className="text-xs text-center text-gray-300 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}