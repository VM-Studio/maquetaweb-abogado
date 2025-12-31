import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesHome from '../components/ServicesHome';
import ProcedureHome from '../components/ProcedureHome';
import CasesHome from '../components/CasesHome';
import FAQHome from '../components/FAQHome';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import HeroImage from '@/public/nosotros.png';
import HeroBack from '@/public/Hero.png';
import WhatsAppLink from '../components/Whatsapplink';

export const metadata: Metadata = {
  title: 'Sucesiones en Córdoba a Distancia | 100% Online | AUGUSTO Filí',
  description: '¿Tenés que tramitar una sucesión en Córdoba pero vivís lejos? Nos encargamos de todo sin que tengas que viajar. 100% online, desde cualquier provincia.',
};

export default function SucesionesCordobaDistancia() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section - Mismo estilo que Home */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 bg-white pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={HeroBack}
              alt=""
              fill
              className="object-cover opacity-60"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
              {/* Text Column */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center justify-center lg:justify-start mb-3 sm:mb-4 md:mb-6">
                  <span className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.3em] text-gray-600 uppercase">
                    100% Online desde Cualquier Provincia
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-montserrat text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-tight">
                  Sucesiones en<br />
                  Córdoba<br />
                  <span className="text-gray-800">a Distancia</span>
                </h1>

                <p className="text-md sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
                  ¿Tenés que tramitar una sucesión en Córdoba pero vivís lejos? <span className="font-black text-gray-900">Nos encargamos de todo sin que tengas que viajar.</span> Si el causante falleció en Córdoba, el trámite se hace acá.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
                  <WhatsAppLink
                    message="Hola, necesito tramitar una sucesión a distancia"
                    className="group inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-blue-800 text-white text-xs sm:text-sm font-bold tracking-wide hover:shadow-2xl hover:scale-105 rounded-sm transition-all duration-300 whitespace-nowrap"
                  >
                    Consultar desde donde estés
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </WhatsAppLink>
                  <Link 
                    href="/preguntas-frecuentes"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 border-gray-900 text-gray-900 text-xs sm:text-sm font-bold tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-sm whitespace-nowrap"
                  >
                    Preguntas Frecuentes
                  </Link>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative flex flex-col items-center justify-center order-1 lg:order-2">
                <div className="relative w-full aspect-[4/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <Image
                    src={HeroImage}
                    alt="Sucesiones en Córdoba a Distancia"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesHome />
        <ProcedureHome />
        <CasesHome />
        <FAQHome />
      </main>
      <Footer />
    </div>
  );
}