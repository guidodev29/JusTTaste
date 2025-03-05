"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const images = [
  "/images/burguer1.jpg",
  "/images/platos.png",
  "/images/burguer3.jpg",
];

const testimonios = [
  { name: "Juan Pérez", comment: "¡La mejor hamburguesa que he probado!" },
  { name: "Ana López", comment: "Las papas locas son increíbles, recomiendo 100%." },
  { name: "Carlos Ramírez", comment: "Atención rápida y comida deliciosa." },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-amber-50 font-afacad">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
      </style>

      {/* Header */}
      <header className="bg-amber-700 text-white p-5 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">JusTTaste</h1>
          <nav className="space-x-5">
            {["Menú", "Nosotros", "Testimonios", "Contacto"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="hover:text-amber-300 transition duration-300"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero - Carrusel */}
      <section className="relative w-full h-[450px] overflow-hidden">
        <Image 
          src={images[currentSlide]} 
          alt="Comida deliciosa" 
          fill 
          style={{ objectFit: "cover", transition: "transform 1s ease-in-out" }}
        />
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-800 bg-opacity-60 text-white p-3 rounded-full hover:scale-110 transition">
          ◀
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-800 bg-opacity-60 text-white p-3 rounded-full hover:scale-110 transition">
          ▶
        </button>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-12 bg-white text-center">
        <h2 className="text-4xl font-bold text-amber-700 mb-4">¿Quiénes somos?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          En <span className="font-bold">FastFood Express</span>, usamos ingredientes frescos y recetas originales para darte un sabor inolvidable. Desde hamburguesas gourmet hasta papas locas, cada bocado es una fiesta.
        </p>
      </section>

      {/* Menú */}
      <section id="menu" className="py-12 bg-amber-50">
        <h2 className="text-4xl font-bold text-center text-amber-700 mb-8">Nuestro Menú</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Burger Clásica", img: "/images/menu1.jpeg", desc: "Con queso y tocino." },
            { name: "Papas Locas", img: "/images/menu2.jpg", desc: "Con queso cheddar y salsas especiales." },
            { name: "Hot Dog Gourmet", img: "/images/burguer2.jpeg", desc: "Con chili y cebolla caramelizada." },
            { name: "Tacos al Pastor", img: "/images/menu4.jpg", desc: "Con piña y cilantro fresco." },
            { name: "Alitas BBQ", img: "/images/menu5.jpeg", desc: "Bañadas en nuestra salsa secreta." },
            { name: "Malteadas", img: "/images/menu6.jpeg", desc: "Fresa, chocolate y vainilla." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <Image src={item.img} alt={item.name} width={400} height={250} className="rounded-lg" />
              <h3 className="text-2xl font-semibold mt-4 text-amber-700">{item.name}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <button className="mt-4 w-full py-2 bg-red-600 text-white font-semibold rounded-lg transform hover:scale-105 hover:bg-red-700 transition duration-300">
                Ordenar ya
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-12 bg-amber-100">
        <h2 className="text-4xl font-bold text-center text-amber-700 mb-8">Opiniones de nuestros clientes</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:scale-105 transition duration-300 text-center">
              <p className="text-xl font-semibold text-gray-800">{t.name}</p>
              <p className="text-gray-600 italic">"{t.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-amber-900 text-white py-8">
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold">¡Conéctate con nosotros!</h3>
          <p className="text-gray-300">Visítanos en Av. Gourmet 456, Distrito Culinario</p>
            <div className="mx-auto max-w-2xl h-64 mb-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0248208212!2d-58.38375908680797!3d-34.60368078045889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0aa4d4e0dcf%3A0x11b1eaf23acb3c74!2sObelisco!5e0!3m2!1ses!2sar!4v1719532124601!5m2!1ses!2sar" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex justify-center space-x-6 text-3xl">
            {[
              { icon: FaFacebook, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaWhatsapp, link: "#" },
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                className="hover:text-amber-400 transition transform hover:scale-125"
              >
                {<social.icon />}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">© 2025 FastFood Express - Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}