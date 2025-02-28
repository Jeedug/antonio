import React from 'react';

export default function Validados() {
  return (
    <div className="py-16 px-4 md:px-16 bg-gray-50">
      {/* Título centrado */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
        Opiniones Validadas
      </h2>

      {/* Contenedor de opiniones */}
      <div className="space-y-8 text-center">
        {/* Opinión 1 */}
        <blockquote className="text-xl md:text-2xl font-semibold text-black">
          "Esta es una opinión destacada que refleja la calidad del servicio. ¡Altamente recomendado!"
        </blockquote>

        {/* Opinión 2 */}
        <blockquote className="text-xl md:text-2xl font-semibold text-black">
          "Increíble experiencia. El equipo fue muy profesional y siempre estuvo disponible para ayudar."
        </blockquote>

        {/* Opinión 3 */}
        <blockquote className="text-xl md:text-2xl font-semibold text-black">
          "Muy satisfecho con los resultados. Sin duda volveré a trabajar con ellos en el futuro."
        </blockquote>
      </div>
    </div>
  );
}