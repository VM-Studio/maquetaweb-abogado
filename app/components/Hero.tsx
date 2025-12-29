import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-8 md:px-10 lg:px-12 bg-white pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 items-center">
          {/* Text Column - CENTRADO en mobile */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-gray-400 uppercase">
                Estudio Jurídico Especializado
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-gray-900 mb-6 sm:mb-8 tracking-tight">
              Sucesiones y<br />
              Declaratorias<br />
              <span className="text-gray-600">de Herederos</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              ¿El resto de los herederos <span className="font-black text-gray-900">no respetan tus derechos?</span> Te representamos y aseguramos que el trato sea igual a igual.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
              <a 
                href="https://wa.me/5491112345678?text=Hola,%20quiero%20iniciar%20una%20consulta%20sobre%20sucesiones%20y%20declaratorias%20de%20herederos"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 text-white text-sm font-bold tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-md whitespace-nowrap"
              >
                Iniciar Consulta
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <Link 
                href="/preguntas-frecuentes"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 text-sm font-bold tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-md whitespace-nowrap"
              >
                Preguntas Frecuentes
              </Link>
            </div>
          </div>

          {/* Image Column - Right */}
          <div className="relative flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpeg"
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
