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
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 text-center mb-6 tracking-tight">
          ¿Qué podemos resolver por vos?
        </h2>
        
        <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed text-center mb-20 max-w-4xl mx-auto">
          Tramitamos más de 50 declaratorias de herederos por año. Todo el proceso 100% online, desde Córdoba o cualquier provincia. Honorarios pactados y transparentes desde el inicio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-10 border border-transparent hover:border-primary hover:bg-blue-50 transition-all duration-300"
            >
              <h3 className="text-lg font-normal text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
