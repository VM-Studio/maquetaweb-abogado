

'use client';
import Image from 'next/image';

export default function ServicesHome() {
  const services = [
    {
      title: "Declaratoria de herederos",
      description: "Gestionamos todo el trámite en la nueva Oficina de Procesos Sucesorios de Córdoba. Desde el inicio hasta que puedas disponer de los bienes.",
      gif: "/icono-Declaratoria.gif"
    },
    {
      title: "Sucesiones complejas",
      description: "Conflictos entre herederos, bienes en distintas provincias o situaciones trabadas. Negociamos para evitar subastas y encontrar soluciones justas.",
      gif: "/icono-Sucesiones.gif"
    },
    {
      title: "Tracto abreviado",
      description: "Transferencia directa de inmuebles sin escrituras intermedias. Más rápido, menos costos, menos trámites.",
      gif: "/icono-Tracto.gif"
    },
    {
      title: "Adjudicación de vehículos",
      description: "Gestión completa para transferir autos, motos y rodados a tu nombre. Incluye toda la documentación necesaria.",
      gif: "/icono-Adjudicación.gif"
    },
    {
      title: "Representación desde cualquier provincia",
      description: "¿Vivís fuera de Córdoba pero la sucesión se tramita acá? Te representamos sin que tengas que viajar. Todo 100% online.",
      gif: "/icono-Representación.gif"
    },
    {
      title: "Negociación entre herederos",
      description: "Mediamos para llegar a acuerdos que respeten los derechos de todos. Evitamos juicios largos, costosos y regulaciones judiciales elevadas.",
      gif: "/icono-Negociación.gif"
    }
  ];

  return (
    <section id="servicios" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="text-[10px] sm:text-xs font-bold text-blue-800 uppercase tracking-[0.2em] block mb-3">
            Servicios Especializados
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            ¿Qué podemos resolver por vos?
          </h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
            >
              {/* Icono */}
              <div className="shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 relative bg-slate-50 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={service.gif}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              {/* Contenido */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
