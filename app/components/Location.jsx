import React from 'react';

export default function Location() {
  return (
    <div className="py-16 px-4 md:px-16 bg-white">
      {/* Contenedor principal con dos apartados */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Primera sección (2/5 de la pantalla) */}
        <div className="w-full md:w-2/5 space-y-4">
          {/* Título grande en negro */}
          <h2 className="text-3xl font-bold text-black">Nuestras Ubicaciones</h2>

          {/* Descripción en gris, texto pequeño */}
          <p className="text-sm text-gray-600">
            Descubre nuestras oficinas y puntos de contacto en diferentes ciudades.
          </p>

          {/* Lista de ubicaciones */}
          <ul className="mt-4 space-y-2 text-black">
            <li>📍 Ciudad de México, CDMX</li>
            <li>📍 Guadalajara, Jalisco</li>
            <li>📍 Monterrey, Nuevo León</li>
          </ul>
        </div>

        {/* Segunda sección (imagen que ocupa el espacio restante) */}
        <div className="w-full md:w-3/5 h-96">
          <img
            src="/location.jpg"
            alt="Mapa de ubicaciones"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}