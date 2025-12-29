'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function ServiciosPage() {
  const [expandedServices, setExpandedServices] = useState<number[]>([]);

  const toggleService = (index: number) => {
    setExpandedServices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    {
      title: "Declaratoria de herederos",
      description: "Gestionamos todo el trámite en la nueva Oficina de Procesos Sucesorios de Córdoba. Te acompañamos desde el inicio hasta que puedas disponer de los bienes de forma legal y ordenada.",
      gif: "/icono-Declaratoria.gif",
      icon: "📄",
      features: [
        "Presentación completa de documentación",
        "Gestión ante la Oficina de Procesos Sucesorios",
        "Seguimiento constante del trámite",
        "Asesoramiento legal personalizado"
      ]
    },
    {
      title: "Sucesiones complejas",
      description: "Resolvemos casos difíciles: conflictos entre herederos, bienes en distintas provincias o situaciones trabadas. Negociamos para evitar subastas y encontrar soluciones justas para todos.",
      gif: "/icono-Sucesiones.gif",
      icon: "📚",
      features: [
        "Análisis integral del caso",
        "Mediación entre herederos",
        "Estrategia legal personalizada",
        "Evitamos regulaciones judiciales elevadas"
      ]
    },
    {
      title: "Tracto abreviado",
      description: "Transferencia directa de inmuebles sin escrituras intermedias. Ahorrás tiempo, costos y simplificás el proceso de transmisión de propiedades.",
      gif: "/icono-Tracto.gif",
      icon: "🏠",
      features: [
        "Sin escrituras intermedias innecesarias",
        "Reducción de costos notariales",
        "Proceso más rápido y eficiente",
        "Asesoramiento en todo momento"
      ]
    },
    {
      title: "Adjudicación de vehículos",
      description: "Gestión completa para transferir autos, motos y rodados a tu nombre. Nos encargamos de toda la documentación necesaria ante el Registro Nacional.",
      gif: "/icono-Adjudicación.gif",
      icon: "🚗",
      features: [
        "Trámite completo ante el Registro",
        "Documentación legal completa",
        "Transferencia sin complicaciones",
        "Asesoramiento sobre deudas y patentes"
      ]
    },
    {
      title: "Representación desde cualquier provincia",
      description: "¿Vivís fuera de Córdoba pero la sucesión se tramita acá? Te representamos sin que tengas que viajar. Todo el proceso es 100% online con firma digital.",
      gif: "/icono-Representación.gif",
      icon: "🌎",
      features: [
        "Representación legal completa",
        "Trámite 100% online",
        "Sin necesidad de viajar a Córdoba",
        "Videollamadas y seguimiento constante"
      ]
    },
    {
      title: "Negociación entre herederos",
      description: "Mediamos para llegar a acuerdos que respeten los derechos de todos. Evitamos juicios largos, costosos y regulaciones judiciales elevadas.",
      gif: "/icono-Negociación.gif",
      icon: "⚖️",
      features: [
        "Mediación profesional y neutral",
        "Búsqueda de acuerdos equitativos",
        "Evitamos juicios prolongados",
        "Honorarios claros y sin sorpresas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-10 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-[0.3em] block mb-4 sm:mb-6">
              Servicios Especializados
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6">
              Sucesiones y Declaratorias<br className="hidden sm:block" /> de Herederos
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Nos especializamos exclusivamente en sucesiones. Esta dedicación nos permite ofrecerte el mejor servicio y resolver tu caso de la manera más eficiente.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`grid ${index % 2 === 0 ? 'lg:grid-cols-[0.6fr_1.6fr]' : 'lg:grid-cols-[1.6fr_0.6fr]'} gap-6 sm:gap-8 items-center`}
                >
                  {/* Imagen/GIF */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                      <Image
                        src={service.gif}
                        alt={service.title}
                        fill
                        className="object-contain rounded-3xl"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'} flex flex-col`}>
                    {/* Título - altura fija */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight h-16 sm:h-20 flex items-center">
                      {service.title}
                    </h2>

                    {/* Contenido expandible */}
                    <div className={`mb-4 ${!expandedServices.includes(index) ? 'max-h-24 overflow-hidden' : ''}`}>
                      {/* Descripción */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium mb-6">
                        {service.description}
                      </p>

                      {/* Features con checkmarks */}
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg 
                              className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm sm:text-base text-gray-700 font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botón Leer más/menos */}
                    <button
                      onClick={() => toggleService(index)}
                      className="text-amber-700 text-sm font-bold mb-6 text-left hover:text-amber-800 transition-colors"
                    >
                      {expandedServices.includes(index) ? 'Leer menos' : 'Leer más'}
                    </button>

                    {/* Botón */}
                    <a
                      href="https://wa.me/5491112345678?text=Hola,%20quiero%20consultar%20sobre%20este%20servicio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-200 text-gray-800 text-sm font-medium hover:bg-gray-300 transition-all duration-300 rounded-md"
                    >
                      Solicitar este servicio
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-10 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">
              ¿No encontrás lo que buscás?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 font-medium">
              Cada caso es único. Contactanos y te asesoramos de forma personalizada.
            </p>
            <a
              href="https://wa.me/5491112345678?text=Hola,%20quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-amber-800 via-amber-700 to-amber-600 text-white text-base sm:text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-md"
            >
              Contactar ahora
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
