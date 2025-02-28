'use client'
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { ChevronDown, Mail, Phone, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <Navbar fluid rounded className="px-12 bg-[#101326] fixed z-50 w-full top-0">
      <Navbar.Brand as={Link} href="/" className="flex flex-row gap-3 ">
        <img src="/logo.png" className=" h-16" alt="Flowbite React Logo" />
        <div className="flex flex-col ">
            <span className="font-semibold text-white">Gonzales Reyes</span>
            <span className="font-light text-white/60">Abogados Asociados</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="text-white flex flex-row w-full items-center">
        <Navbar.Link className="text-white" href="#">Sobre nosotors</Navbar.Link>
        <Navbar.Link className="text-white" href="#">Contacto</Navbar.Link>
        <div className="flex flex-col text-white">
            <span className="text-white text-xs ">
                Idioma
            </span>
            <div className="flex flex-row gap-1 ">
                <ChevronDown />
                <span className="text-white font-medium">
                    Espanol
                </span>
            </div>
        </div>
        <div className="flex py-2 flex-row gap-1 ">
        <Phone />
        <Mail />
        <ShoppingCart />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}