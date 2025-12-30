import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesHome from '../components/ServicesHome';
import ProcedureHome from '../components/ProcedureHome';
import CasesHome from '../components/CasesHome';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Declaratoria de Herederos en Córdoba | AUGUSTO Filí & Asociados',
  description: 'Iniciamos y gestionamos todo el trámite. Costos claros desde el primer día, sin sorpresas. Más de 50 declaratorias tramitadas por año.',
};

export default function DeclaratoriaDeHerederos() {
  return (
    <>
      <Header />
      
      {/* Hero Section - Personalizado */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 bg-white pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            {/* Text Column */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-tight">
                Declaratoria de Herederos en <span className="text-[#e9a459]">Córdoba</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Iniciamos y gestionamos todo el trámite. Costos claros desde el primer día, sin sorpresas.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Más de 50 declaratorias tramitadas por año. 100% online, con facilidades de pago.
              </p>
              <a 
                href="https://wa.me/5493515186325?text=Hola,%20quiero%20consultar%20sobre%20declaratoria%20de%20herederos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#e9a459] text-white text-sm sm:text-base lg:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
              >
                Consultar por WhatsApp →
              </a>
            </div>

            {/* Image Column */}
            <div className="relative flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <Image
                  src="/hero.jpeg"
                  alt="Declaratoria de Herederos en Córdoba"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resto de la página igual que la home */}
      <ServicesHome />
      <ProcedureHome />
      <CasesHome />

      <Footer />
    </>
  );
}
