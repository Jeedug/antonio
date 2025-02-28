import React from 'react';
import { Card, Button } from 'flowbite-react';

export default function Asuntos() {
  return (
    <div 
      className="bg-gradient-to-b from-[#101628] to-transparent py-16 px-4 md:px-16 min-h-screen"
      style={{ backgroundAttachment: 'fixed' }}
    >
      {/* Contenido superior */}
      <div className="flex flex-col md:flex-row items-start md:items-center mb-12 space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex-1">
          <h2 className="text-[60px] md:text-4xl font-bold text-white">
            Asuntos
          </h2>
          <p className="text-gray-200 mt-2">
          Contamos con un equipo de abogados altamente calificados y con amplia experiencia en diversas ramas del derecho.
          </p>
        </div>
        <Button color="purple" className="md:ml-auto rounded-full bg-[#1E4973] hover:bg-[#1E4973]/60 text-white font-normal text-sm py-2 px-4 ">
          Mas informacion
        </Button>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((card) => (
          <Card
            key={card}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={`./asuntos-${card}.png`}
              alt={`Card ${card}`}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">Título Tarjeta {card}</h5>
              <p className="text-gray-700">
                Descripción breve de la tarjeta {card} alineada a la izquierda
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}