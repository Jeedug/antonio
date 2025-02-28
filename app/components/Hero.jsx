import { Star } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen">
        <img
          src="/hero.png"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-20">
          <p className="text-sm font-bold mb-2">Certificados y confiables</p>

          <h1 className="text-[24px] sm:text-[32px] md:text-[60px] font-bold mb-6 leading-[60px]">
            Protege tus acuerdos con contratos notariales confiables y válidos
            legalmente
          </h1>
          <p className="text-sm font-light mb-2">
            “Tu esfuerzo es valido con nosotros”
          </p>

          <div className="flex space-x-4">
            <button className="bg-[#1E4973] rounded-full hover:bg-blue-600 text-white font-normal text-sm py-2 px-4 ">
              Contactar
            </button>
            <button className=" text-white font-bold py-2 px-4 rounded underline">
              Mas informacion
            </button>
          </div>
        </div>
      </div>

      <div className="w-full py-6 bg-[#101628] flex flex-col sm:flex-row justify-between gap-20">

        <Opinion />
        <Opinion />
        <Opinion />

      </div>
    </>
  );
}



function Opinion() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white px-20">
      <div className="flex flex-row gap-1">
      <Star className="text-yellow-500 text-5xl " />
      <Star className="text-yellow-500 text-5xl" />

      <Star className="text-yellow-500 text-5xl" />
      <Star className="text-yellow-500 text-5xl" />
      <Star className="text-yellow-500 text-5xl" />

      </div>
      <span className="font-medium text-sm">
      “Totalmente satisfecho del servicio, todo claro y facil”
      </span>
    </div>
  );
}