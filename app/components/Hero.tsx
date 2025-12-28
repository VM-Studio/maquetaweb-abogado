import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 bg-white pt-20 lg:pt-28">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Column - Left */}
          <div className="text-left">
            <div className="inline-flex items-center justify-start mb-4">
              <span className="text-xs font-light tracking-[0.2em] text-gray-400 uppercase">
                Estudio Jurídico
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-gray-900 mb-4 tracking-tight">
              Sucesiones y Declaratorias
              <br />
              <span className="font-normal italic">De Herederos en</span>
              <br />
              Córdoba
            </h1>

            <p className="text-lg md:text-xl text-gray-700 font-normal mb-8 leading-relaxed">
              ¿El resto de los herederos no respetan tus derechos? Te representamos, te respaldamos y aseguramos que el trato sea igual a igual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5491112345678?text=Hola,%20quiero%20iniciar%20una%20consulta%20sobre%20sucesiones%20y%20declaratorias%20de%20herederos"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white text-sm font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Quiero iniciar mi consulta
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <Link 
                href="/preguntas-frecuentes"
                className="w-full sm:w-auto px-8 py-4 border border-primary text-primary text-sm font-medium tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
              >
                Ver Preguntas Frecuentes
              </Link>
            </div>
          </div>

          {/* Video Column - Right */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden w-full">
              {/* Placeholder para video */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-light">Video aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
