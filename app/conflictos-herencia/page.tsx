import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesHome from '../components/ServicesHome';
import ProcedureHome from '../components/ProcedureHome';
import CasesHome from '../components/CasesHome';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¿Problemas con tu Herencia? | Abogados Especializados en Córdoba',
  description: '¿El resto de los herederos no respetan tus derechos? Te representamos y aseguramos que el trato sea igual a igual. Negociamos para evitar subastas.',
};

export default function ConflictosHerencia() {
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
                ¿Problemas con tu <span className="text-[#e9a459]">Herencia?</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                ¿El resto de los herederos no respetan tus derechos? Te representamos y aseguramos que el trato sea igual a igual.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Negociamos para evitar subastas. Defendemos lo que te corresponde.
              </p>
              <a 
                href="https://wa.me/5493515186325?text=Hola,%20tengo%20problemas%20con%20una%20herencia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#e9a459] text-white text-sm sm:text-base lg:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
              >
                Contanos tu situación →
              </a>
            </div>

            {/* Image Column */}
            <div className="relative flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <Image
                  src="/hero.jpeg"
                  alt="Problemas con Herencia"
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
