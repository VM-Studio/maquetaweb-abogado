import Link from 'next/link';
import Image from 'next/image';
import Tribunales from '@/public/tribunales.png';

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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-900">
      <div className="max-w-6xl mx-auto">
       
        {/* Grid: Imagen + Contenido */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-14 md:mb-16">
         
          {/* Imagen del estudio */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={Tribunales}
                alt="Estudio Augusto Filí y Asociados"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-[0.2em] block mb-3">
              Sobre el Estudio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 sm:mb-6">
              Más de 20 años<br className="hidden sm:block" /> resolviendo sucesiones
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                El Dr. Augusto Filí y su equipo nos especializamos exclusivamente en <strong className="text-white">sucesiones y declaratorias de herederos</strong>. Esta dedicación nos permite atender casos de cualquier magnitud: desde trámites simples hasta situaciones complejas con conflictos familiares o bienes en distintas provincias.
              </p>
             
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Entendemos que no siempre se cuenta con dinero en efectivo para arrancar. Por eso <strong className="text-white">ofrecemos facilidades de pago</strong>, incluyendo tarjeta de crédito y cobro parcial a resultados.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Nuestros honorarios se pactan desde el inicio. <strong className="text-white">Sin sorpresas ni regulaciones judiciales elevadas.</strong>
              </p>
            </div>


            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5493515186325?text=Hola,%20quiero%20consultar%20mi%20caso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 rounded-sm"
              >
                Consultar mi caso
              </a>
             
              <Link
                href="/preguntas-frecuentes"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 border border-slate-600 text-slate-300 text-sm font-bold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-300 rounded-sm"
              >
                Ver preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>


        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-slate-800/50 py-5 sm:py-6 px-4 rounded-lg border border-slate-700/50">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
