
"use client";

import { Footer } from "flowbite-react";

export default function FooterComp() {
  return (
    <Footer container className="bg-[#272727] rounded-none">
      <div className="flex flex-row gap-3 ">
        <img src="/logo.png" className=" h-16" alt="Flowbite React Logo" />
        <div className="flex flex-col ">
            <span className="font-semibold text-white">Gonzales Reyes</span>
            <span className="font-light text-white/60">Abogados Asociados</span>
        </div>
      </div>
      <Footer.Copyright href="#" by="Gonzales Reyes™" year={2022} />
      <Footer.LinkGroup className="text-white">
        <Footer.Link href="#">Sobre nosotros</Footer.Link>
        <Footer.Link href="#">Contactanos</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
