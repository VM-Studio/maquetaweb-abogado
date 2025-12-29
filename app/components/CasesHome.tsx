import Link from 'next/link';
import Image from 'next/image';

export default function CasesHome() {
  const stats = [
    {
      value: "+50",
      label: "sucesiones por año"
    },
    {
      value: "+20",
      label: "años de experiencia"
    },
    {
      value: "100%",
      label: "trámite online"
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 px-6 sm:px-8 md:px-10 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid: Imagen + Contenido */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-12 sm:mb-16">
          
          {/* Imagen del estudio */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpeg"
                alt="Estudio Augusto Filí y Asociados"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-[0.3em] block mb-4 sm:mb-6">
              Sobre el Estudio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6 sm:mb-8">
              Más de 20 años<br className="hidden sm:block" /> resolviendo sucesiones
            </h2>

            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                El Dr. Augusto Filí y su equipo nos especializamos exclusivamente en <strong className="text-gray-900">sucesiones y declaratorias de herederos</strong>. Esta dedicación nos permite atender casos de cualquier magnitud: desde trámites simples hasta situaciones complejas con conflictos familiares o bienes en distintas provincias.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                Entendemos que no siempre se cuenta con dinero en efectivo para arrancar. Por eso <strong className="text-gray-900">ofrecemos facilidades de pago</strong>, incluyendo tarjeta de crédito y cobro parcial a resultados.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                Nuestros honorarios se pactan desde el inicio. <strong className="text-gray-900">Sin sorpresas ni regulaciones judiciales elevadas.</strong>
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="https://wa.me/5491112345678?text=Hola,%20quiero%20consultar%20mi%20caso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-amber-800 via-amber-700 to-amber-600 text-white text-sm sm:text-base font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md whitespace-nowrap"
              >
                Consultar mi caso
              </a>
              
              <Link 
                href="/preguntas-frecuentes"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 text-sm sm:text-base font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-md whitespace-nowrap"
              >
                Ver preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 py-5 sm:py-6 px-4 rounded-xl border border-gray-200">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1.5">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
