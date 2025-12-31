import Link from 'next/link';
import Image from 'next/image';
import HeroImage from "@/public/nosotros.png"
import HeroBack from "@/public/Hero.png"
import WhatsAppLink from './Whatsapplink';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 bg-white pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      {/* Background Image - Extremely subtle */}
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
          {/* Text Column - CENTRADO en mobile */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center justify-center lg:justify-start mb-3 sm:mb-4 md:mb-6">
              <span className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.3em] text-gray-600 uppercase">
                Estudio Jurídico Especializado
              </span>
            </div>

            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-montserrat text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-tight">
              Sucesiones y<br />
              Declaratorias<br />
              <span className="text-gray-800">de Herederos</span>
            </h1>

            <p className="text-md sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium mb-6 sm:mb-8 md:mb-10  max-w-xl mx-auto lg:mx-0">
              ¿El resto de los herederos <span className="font-black text-gray-900">no respetan tus derechos?</span> Te representamos y aseguramos que el trato sea igual a igual.
            </p>

            <div className="flex flex-col  sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
             <WhatsAppLink
                message="Hola, quiero iniciar una consulta sobre sucesiones y declaratorias de herederos"
                className="group inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-blue-800 text-white text-xs sm:text-sm font-bold tracking-wide hover:shadow-2xl hover:scale-105 rounded-sm transition-all duration-300 whitespace-nowrap"
              >
                Iniciar Consulta
                <span className="inline-block ml-2  group-hover:translate-x-1 transition-transform">→</span>
              </WhatsAppLink>
              <Link 
                href="/preguntas-frecuentes"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 border-gray-900 text-gray-900 text-xs sm:text-sm font-bold tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-sm whitespace-nowrap"
              >
                Preguntas Frecuentes
              </Link>
            </div>
          </div>

          {/* Image Column - Right */}
          <div className="relative flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-[4/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <Image
                src={HeroImage}
                alt="Estudio jurídico especializado en sucesiones"
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
  );
}
