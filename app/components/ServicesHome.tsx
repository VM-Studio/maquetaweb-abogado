export default function ServicesHome() {
  const services = [
    {
      title: "Declaratoria de herederos",
      description: "Gestionamos todo el trámite en la nueva Oficina de Procesos Sucesorios de Córdoba. Desde el inicio hasta que puedas disponer de los bienes."
    },
    {
      title: "Sucesiones complejas",
      description: "Conflictos entre herederos, bienes en distintas provincias o situaciones trabadas. Negociamos para evitar subastas y encontrar soluciones justas."
    },
    {
      title: "Tracto abreviado",
      description: "Transferencia directa de inmuebles sin escrituras intermedias. Más rápido, menos costos, menos trámites."
    },
    {
      title: "Adjudicación de vehículos",
      description: "Gestión completa para transferir autos, motos y rodados a tu nombre. Incluye toda la documentación necesaria."
    },
    {
      title: "Representación desde cualquier provincia",
      description: "¿Vivís fuera de Córdoba pero la sucesión se tramita acá? Te representamos sin que tengas que viajar. Todo 100% online."
    },
    {
      title: "Negociación entre herederos",
      description: "Mediamos para llegar a acuerdos que respeten los derechos de todos. Evitamos juicios largos, costosos y regulaciones judiciales elevadas."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-light text-gray-900 text-center mb-4 sm:mb-6 tracking-tight">
          ¿Qué podemos resolver por vos?
        </h2>
        
        <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light leading-relaxed text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto px-4">
          Tramitamos más de 50 declaratorias de herederos por año. Todo el proceso 100% online, desde Córdoba o cualquier provincia. Honorarios pactados y transparentes desde el inicio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-100">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 md:p-10 border border-transparent hover:border-primary hover:bg-blue-50 transition-all duration-300"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-normal text-gray-900 mb-3 sm:mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base font-light text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
