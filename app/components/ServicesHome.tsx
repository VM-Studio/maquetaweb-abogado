'use client';

import Image from 'next/image';
import Link from 'next/link';

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
    <section id="servicios" className="py-20 sm:py-24 md:py-28 px-6 sm:px-8 md:px-10 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Título centrado minimalista */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-[0.3em] block mb-4 sm:mb-6">
            Servicios Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight px-4">
            ¿Qué podemos resolver<br className="hidden sm:block" /> por vos?
          </h2>
        </div>

        {/* Grid de servicios estilo horizontal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border-2 p-4 sm:p-5 hover:shadow-xl transition-all duration-300 rounded-2xl shadow-md group flex flex-row items-center gap-4 sm:gap-5"
              style={{ 
                borderColor: 'rgba(150, 60, 0, 0.15)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(150, 60, 0, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(150, 60, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* GIF Icon - Izquierda */}
              <div className="shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 relative bg-white rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={service.gif}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              {/* Contenido - Derecha */}
              <div className="flex-1 text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-normal text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Servicios */}
        <div className="text-center mt-12 sm:mt-16">
          <Link 
            href="/servicios"
            className="inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-amber-800 via-amber-700 to-amber-600 text-white text-sm sm:text-base font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
